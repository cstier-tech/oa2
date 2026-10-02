import { Col, Form, InputGroup, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../controls/IconButton'
import Table from 'react-bootstrap/Table'
import { Link, useSearchParams } from 'react-router-dom'
import type { ReplacementFormValues } from './ReplacementRequest'


type ReplacementStatus = 'Pending' | 'Rejected' | 'Approved'

type ReplacementRequestRow = Pick<ReplacementFormValues, 'oms' | 'orderId' | 'itemToReplace' | 'qtyToSend' | 'requestedBy'> & {
    id: string
    dateSubmitted: string
    status: ReplacementStatus
}

const STATUSES: ReplacementStatus[] = ['Pending', 'Approved', 'Rejected']

const STATUS_BADGES: Record<ReplacementStatus, string> = {
    Pending: 'badge-warning',
    Rejected: 'badge-danger',
    Approved: 'badge-success',
}

// placeholder until submitted requests are loaded from the backend
const SAMPLE_REQUESTS: ReplacementRequestRow[] = [
    {
        id: 'RR-1001',
        dateSubmitted: '2026-09-30',
        requestedBy: 'Harry Potter',
        oms: 'American Regent',
        orderId: '123456',
        itemToReplace: { value: 'V2-BHPOSTCARD', label: 'Behavioral Health Postcard', qty: 125, packQty: 25 },
        qtyToSend: 50,
        status: 'Pending',
    },
    {
        id: 'RR-1002',
        dateSubmitted: '2026-09-29',
        requestedBy: 'Hermione Granger',
        oms: 'OSH - Heart Health',
        orderId: '123512',
        itemToReplace: { value: 'V2-OSH-MEASURINGSPOONS-150', label: 'MEASURING SPOONS - SET OF 4', qty: 150, packQty: 150 },
        qtyToSend: 150,
        status: 'Approved',
    },
    {
        id: 'RR-1003',
        dateSubmitted: '2026-09-26',
        requestedBy: 'Ron Weasley',
        oms: 'OSH - Heart Health',
        orderId: '123587',
        itemToReplace: { value: 'V2-PLAYCRD-OSH-LOGO', label: 'Playing Cards | OSH Logo', qty: 50, packQty: 25 },
        qtyToSend: 25,
        status: 'Rejected',
    },
    {
        id: 'RR-1004',
        dateSubmitted: '2026-09-25',
        requestedBy: 'Luna Lovegood',
        oms: 'Continuum',
        orderId: '123601',
        itemToReplace: { value: 'V2-NOTEPAD4X6', label: '4 x 6 Notepad', qty: 50, packQty: 10 },
        qtyToSend: 20,
        status: 'Pending',
    },
    {
        id: 'RR-1005',
        dateSubmitted: '2026-09-23',
        requestedBy: 'Neville Longbottom',
        oms: 'AAD',
        orderId: '123644',
        itemToReplace: { value: 'V2-SHOPPINGTOTEBAG-OSH-AARP-MINT', label: 'CUSTOM SHOPPING BAG 7478 WITH OSH PMS336 & AARP PMS485', qty: 100, packQty: 100 },
        qtyToSend: 100,
        status: 'Approved',
    },
    {
        id: 'RR-1006',
        dateSubmitted: '2026-09-22',
        requestedBy: 'Ginny Weasley',
        oms: 'ReSound',
        orderId: '123690',
        itemToReplace: { value: 'V2-MICROFIBERCLEANINGCLOTH', label: 'Microfiber Cleaning Cloth for Glasses', qty: 100, packQty: 50 },
        qtyToSend: 50,
        status: 'Pending',
    },
    {
        id: 'RR-1007',
        dateSubmitted: '2026-09-18',
        requestedBy: 'Albus Dumbledore',
        oms: 'Aspen Dental',
        orderId: '123718',
        itemToReplace: { value: 'V2-LIPBALM-PLN', label: 'Plain, aloe vera lip balm. SPF 15.', qty: 750, packQty: 250 },
        qtyToSend: 250,
        status: 'Approved',
    },
    {
        id: 'RR-1008',
        dateSubmitted: '2026-09-17',
        requestedBy: 'Minerva McGonagall',
        oms: 'Perficient',
        orderId: '123755',
        itemToReplace: { value: 'V2-AEP-TSHIRT-SPA-MINT-M', label: 'AEP-TSHIRT-SPA MINT MEDIUM', qty: 4, packQty: 1 },
        qtyToSend: 2,
        status: 'Rejected',
    },
    {
        id: 'RR-1009',
        dateSubmitted: '2026-09-15',
        requestedBy: 'Severus Snape',
        oms: 'ABOMS',
        orderId: '123790',
        itemToReplace: { value: 'V2-AEP-TSHIRT-SPA-MINT-XL', label: 'AEP-TSHIRT-SPA MINT XLARGE', qty: 4, packQty: 1 },
        qtyToSend: 4,
        status: 'Pending',
    },
    {
        id: 'RR-1010',
        dateSubmitted: '2026-09-12',
        requestedBy: 'Rubeus Hagrid',
        oms: 'APHON',
        orderId: '123823',
        itemToReplace: { value: 'V2-OEPSHIRT24-MINT-ENG-S', label: 'OEP t-shirt 2024 - Mint | Eng | S', qty: 3, packQty: 1 },
        qtyToSend: 1,
        status: 'Pending',
    },
]

// parse as a local date so '2026-09-30' doesn't shift a day in timezones west of UTC
const formatDate = (isoDate: string) => {
    const [year, month, day] = isoDate.split('-').map(Number)
    return new Date(year, month - 1, day).toLocaleDateString('en-US')
}

export default function ReplacementRequestDashboard() {
    const [searchParams, setSearchParams] = useSearchParams()
    // ignore unrecognized values so a bad link falls back to showing all statuses
    const statusParam = searchParams.get('status')
    const statusFilter = STATUSES.find((status) => status === statusParam) ?? ''

    const setStatusFilter = (status: ReplacementStatus | '') => {
        setSearchParams((params) => {
            if (status) {
                params.set('status', status)
            } else {
                params.delete('status')
            }
            return params
        })
    }

    const requests = statusFilter ? SAMPLE_REQUESTS.filter((request) => request.status === statusFilter) : SAMPLE_REQUESTS

    return (
        <div className='page-body'>
            <Row>
                <Col>
                    <div className='page-title d-flex justify-content-between align-items-center'>
                        <h1 className='h3 my-2'>Replacement Requests</h1>
                        <div className='d-flex align-items-center'>
                            <select
                                className='custom-select my-2 mr-2'
                                style={{ width: 160 }}
                                aria-label='Filter by status'
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value as ReplacementStatus | '')}
                            >
                                <option value=''>All Statuses</option>
                                {STATUSES.map((status) => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                            {/* display only for now; not wired up to filter the table yet */}
                            <InputGroup className='my-2' style={{ width: 300 }}>
                                <Form.Control type='search' placeholder='Search requests' aria-label='Search requests' />
                                <div className='input-group-append'>
                                    <IconButton variant='secondary' aria-label='Search'>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </IconButton>
                                </div>
                            </InputGroup>
                        </div>
                    </div>
                    <div className='border' style={{ maxHeight: '60vh', overflow: 'auto' }}>
                        <Table className='mb-0'>
                            <thead className='bg-gray-100 text-nowrap' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                <tr>
                                    <th>Order ID</th>
                                    <th>OMS</th>
                                    <th>SKU to Replace</th>
                                    <th>Qty to Replace</th>
                                    <th>Date Submitted</th>
                                    <th>Submitted By</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {requests.map((request) => (
                                    <tr key={request.id}>
                                        <td>{request.orderId}</td>
                                        <td>{request.oms}</td>
                                        <td>
                                            <div className='font-weight-600'>{request.itemToReplace?.value}</div>
                                            <div className='small'>{request.itemToReplace?.label}</div>
                                        </td>
                                        <td>{request.qtyToSend}</td>
                                        <td>{formatDate(request.dateSubmitted)}</td>
                                        <td>{request.requestedBy}</td>
                                        <td>
                                            <span className={`badge ${STATUS_BADGES[request.status]} `}>{request.status}</span>
                                        </td>
                                        <td>
                                            <Link to={`/replacement-view?status=${request.status}`}>View</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
