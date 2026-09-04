import React, { useState } from 'react'
import { Button, Card, Col, Container, InputGroup, Row, Table, Modal } from 'react-bootstrap'
import Form from '../controls/Form'

const OMS_OPTIONS = [
    'American Regent',
    'Covista Business Development',
    'Continuum',
    'OSH - Heart Health',
    'ReSound',
    'Perficient',
    '95 Percent Group',
    'AAD',
    'ABOMS',
    'Adtalem Marketing',
    'Adtalem Work Force Solutions (MRC)',
    'AGA',
    'American University of the Caribbean (AUC)',
    'Andrea Goldman Design',
    'APHON',
    'Aspen Dental',
    'August Jackson',
    'Banner Life Sciences',
    'Beltone',
    'Blue Chip',
    'Chamberlain Marketing (CUCC)',
    'City Colleges Of Chicago (CCC)',
    'City of Hope (CTCA)',
    'ClearChoice',
    'Columbia College',
    'Core Change',
    'Council of Tall Buildings and Urban Habitats (CTBUH)',
    'CVS Careside',
    'Dairy Queen',
    'DEC (Division for Early Childhood)',
    'Diamond Fulfillment Solutions',
    'DMG MORI',
    'eDoc',
    'Equity Lifestyle Investments',
    'Federal Reserve',
    'Fresenius Kabi',
    'Global Electronics Association (IPC)',
    'Grassroots',
    'Guitar Center',
    'Horizon',
    'IKEA',
    'Integrative Therapeutics Inc',
    'Jetcraft',
    'Kimball International (National Office Furniture)',
    'La Cornue',
    'Labor Solutions',
    'LCP',
    'Lightwave',
    'Lincoln International,LLC',
    'Link Logistics',
    'Lovet',
    'Lynx',
    'Methode Electronics Inc',
    'Middleby Corp.',
    'Mitsubishi Electric Automation',
    'Morningstar',
    'Motorola',
    'National Marine',
    'Northwestern Alumni',
    'Oak Street Health (OSH)',
    'OCC',
    'Optimas',
    'Other',
    'Overture Promotions',
    'Pfizer',
    'PharmaCann',
    'Ross University',
    'Ross Vet',
    'Rubicon-OSH',
    'Snap-on',
    'Story Financial',
    'StrataTech',
    'Sun Chemical',
    'Supply Logic',
    'TAG',
    'TerSera',
    'Tricoci University',
    'Twin Health',
    'TWS',
    'Valent BioSciences',
    'Videojet Technologies Inc',
    'Viking Range',
    'Vive',
    'Walden',
    'Wellnow',
    'Wilson Sporting Goods',
    'Wonderlic',
    'test company',
    'Safe-Guard',
    'Sourdough Enzo',
    'Esteve',
    'Haydon',
]

const FAKE_ITEMS_TO_REPLACE = [
    {
        offerID: 'One95_Eco_Catalog_0626.Sales',
        description: 'One95 Literacy Ecosystem Catalog: June 2026 - NEW',
        qty: 1,
    },
    {
        offerID: 'PH1822.02.Sales',
        description: 'Dan\'s Class Pets - Sales (Gr.6-8)',
        qty: 2,
    },
    {
        offerID: 'PH1830.02.Sales',
        description: '95 Readables - Grade 6-8 Mable Gets Her Wheels Turning',
        qty: 2,
    },
    {
        offerID: 'PH1846.02.Sales',
        description: '95 Readables Nonfiction - Volcano Alert (Gr. 4)',
        qty: 2,
    },
    {
        offerID: 'PH1853.02.Sales',
        description: '96 Readables Nonfiction - Starry, Starry Night (Gr. 5)',
        qty: 2,
    },
    {
        offerID: 'PH1908.Sales',
        description: '95 Phonics Lesson Library 2.0 Teacher\'s Edition - M.S. Skills - Skill 10',
        qty: 2,
    },
]

const REPLACEMENT_OPTIONS = [
    {
        label: 'Shipping Error',
        name: 'ShippingError',
        subOptions: [
            {
                label: 'Damaged in Transit',
                name: 'DamagedInTransit'
            },
            {
                label: 'Lost Shipment',
                name: 'LostShipment'
            },
        ]
    },
    {
        label: 'Order Entry Error',
        name: 'OrderEntryError',
        subOptions: [
            {
                label: 'Wrong Item Entered',
                name: 'WrongItemEntered'
            },
        ]
    },
    {
        label: 'Printing/Bindery Error',
        name: 'PrintingBinderyError'
    },
    {
        label: 'Picking/Packing Error',
        name: 'PickingPackingError',
        subOptions: [
            {
                label: 'Wrong Item(s) Sent',
                name: 'WrongItemsSent'
            },
            {
                label: 'Missing Item(s)',
                name: 'MissingItems'
            },
        ]
    },
    {
        label: 'Other',
        name: 'Other'
    },
]

const SHIPPING_METHODS = [
    { label: '2 Day', name: '2day', },
    { label: 'Ground', name: 'ground', },
    { label: 'Overnight', name: 'overnight', },
]

const ACCOUNTS = [
    'LCP',
    'Customer',
]

function ReplacementRequest() {
    const [oms, setOms] = useState<string>('')

    const [orderId, setOrderId] = useState<string>('')

    const [reasons, setReasons] = useState<string[]>([])
    const toggleReason = (label: string) => {
        setReasons((prev) =>
            prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
        )
    }

    const [itemToReplace, setItemToReplace] = useState<string>()
    // const handleItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { value, checked } = e.target
    //     setItemToReplace((prev) =>
    //         checked ? [...prev, value] : prev.filter((v) => v !== value)
    //     )
    // }

    const [requestedBy, setRequestedy] = useState<string>('')

    const [shippingMethod, setShippingMethod] = useState<string>('')

    const [account, setAccount] = useState<string>('')

    const [returnRequired, setReturnRequired] = useState<string>('')

    const [supportingDocs, setSupportingDocs] = useState<string>('')


    const [showEmail, setShowEmail] = useState(false);

    const handleCloseEmail = () => setShowEmail(false);
    const handleShowEmail = () => setShowEmail(true);

    return (
        <Container>
            <Row>
                <Col lg='12' className='m-auto'>
                    <Form>
                        <Form.Group controlId='oms'>
                            <Form.Label>OMS</Form.Label>
                            <Form.Control as='select' required value={oms} onChange={(e) => setOms(e.target.value)}>
                                {OMS_OPTIONS.map((name) => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='orderNumber'>
                            <Form.Label>Order ID</Form.Label>
                            <InputGroup>
                                <Form.Control type='text' placeholder='Enter order id from selected OMS' required value={orderId} onChange={(e) => setOrderId(e.target.value)} />
                                <div className='input-group-append'>
                                    <Button variant='secondary'>Search</Button>
                                </div>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId='item'>
                            <Form.Label>Item to Replace</Form.Label>
                            <Form.Control as='select' required value={itemToReplace} onChange={(e) => setItemToReplace(e.target.value)}>
                                <option value=''>Select One</option>
                                {FAKE_ITEMS_TO_REPLACE.map((item) => (
                                    <option key={item.offerID} value={item.offerID}>{`SKU: ${item.offerID} | DESC: ${item.description} | QTY: ${item.qty}`}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>


                        <div className='form-group'>
                            <label>Reason for Replacement</label>
                            {REPLACEMENT_OPTIONS.map((opt) => (
                                <div key={opt.name}>
                                    <Form.Check id={opt.name}>
                                        <Form.Check.Input type='checkbox' onChange={() => toggleReason(opt.label)} />
                                        <Form.Check.Label>{opt.label}</Form.Check.Label>
                                    </Form.Check>
                                    <div className='ml-3'>
                                        {reasons.includes(opt.label) && opt.subOptions?.map((subOpt) => (
                                            <Form.Check key={subOpt.name} id={subOpt.name}>
                                                <Form.Check.Input type='checkbox' />
                                                <Form.Check.Label>{subOpt.label}</Form.Check.Label>
                                            </Form.Check>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {reasons.includes('Other') &&
                                <Form.Group>
                                    <Form.Label>Specify Other</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>
                            }
                        </div>

                        <Form.Group>
                            <Form.Label>Requested By</Form.Label>
                            <Form.Control type='text' value={requestedBy} onChange={(e) => setRequestedy(e.target.value)} />
                        </Form.Group>


                        <Form.Group controlId='shipmethod'>
                            <Form.Label>Shipping Method</Form.Label>
                            <div>
                                {SHIPPING_METHODS.map((method) => (
                                    <Form.Check
                                        key={method.name}
                                        inline
                                        label={method.label}
                                        name='ship-method'
                                        type='radio'
                                        id={method.name}
                                        value={method.name}
                                        checked={shippingMethod === method.name}
                                        onChange={(e) => setShippingMethod(e.target.value)}
                                    />
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group controlId='account'>
                            <Form.Label>Account to Charge</Form.Label>
                            <div>
                                {ACCOUNTS.map((acct) => (
                                    <Form.Check
                                        key={acct}
                                        inline
                                        label={acct}
                                        name='account'
                                        type='radio'
                                        id={acct}
                                        value={acct}
                                        checked={account === acct}
                                        onChange={(e) => setAccount(e.target.value)}
                                    />
                                ))}
                            </div>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Return Required?</Form.Label>
                            <div>
                                {['Yes', 'No'].map((v) => (
                                    <Form.Check
                                        key={v}
                                        inline
                                        label={v}
                                        name='return'
                                        type='radio'
                                        id={v}
                                        value={v}
                                        checked={returnRequired === v}
                                        onChange={(e) => setReturnRequired(e.target.value)}
                                    />
                                ))}
                            </div>

                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Supporting Documents</Form.Label>
                            <br />
                            <input type='file' />
                        </Form.Group>

                    </Form>
                    <Button onClick={handleShowEmail}>test</Button>
                </Col>
            </Row>

            <Modal show={showEmail} onHide={handleCloseEmail}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{oms}</p>
                    <p>{orderId}</p>
                    <p>{itemToReplace}</p>
                    <p>{reasons}</p>
                    <p>{requestedBy}</p>
                    <p>{shippingMethod}</p>
                    <p>{account}</p>
                    <p>{returnRequired}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEmail}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseEmail}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default ReplacementRequest




{/* <Table>
                            <thead>
                                <td></td>
                                <td>Item</td>
                                <td>Qty Ordered</td>
                                <td>Qty to Replace</td>
                                <td>Reason</td>
                            </thead>
                            <tbody>
                                {FAKE_ITEMS_TO_REPLACE.map((item) => (
                                    <tr>
                                        <td>
                                            <input
                                                type='checkbox'
                                                id={item.offerID}
                                                name={item.offerID}
                                                value={item.offerID}
                                                onChange={handleItems}
                                            />
                                        </td>
                                        <td>
                                            <label htmlFor={item.offerID}>
                                                <span className='h6'>{item.offerID}</span><br />
                                                <span className='small muted'>{item.description}</span>
                                            </label>
                                        </td>
                                        <td>{item.qty}</td>
                                        <td>
                                            <select
                                                key={`${item.offerID}-${itemToReplace.includes(item.offerID) ? 'selected' : 'unselected'}`}
                                                className='form-control'
                                                disabled={!itemToReplace.includes(item.offerID)}
                                                defaultValue={itemToReplace.includes(item.offerID) ? item.qty : ''}>
                                                <option value=''>0</option>
                                                {Array.from({ length: item.qty }, (_, i) => (
                                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                ))}
                                            </select>
                                        </td>
                                        <td>
                                            <select>
                                                
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table> */}