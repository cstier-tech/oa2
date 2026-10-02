import { useState, type ReactNode } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { Col, Form, Row, InputGroup } from 'react-bootstrap'
import Button from '../controls/Button'
import { useSearchParams } from 'react-router-dom'


type RequestDetail = {
    label: string
    value: ReactNode
}

// placeholder until request details are loaded from the backend
const REQUEST_DETAILS: RequestDetail[] = [
    { label: 'Approved By', value: 'Albus Dumbledore' },
    { label: 'Date/Time Approved', value: '10/01/2026 4:17PM' },
    { label: 'OMS', value: 'American Regent' },
    { label: 'Order ID', value: '123456' },
    { label: 'Return Required?', value: 'Yes' },
    { label: 'Item to Replace', value: 'V2-BHPOSTCARD | Behavioral Health Postcard' },
    { label: 'Qty to Replace', value: 50 },
    { label: 'Qty Expected in Return', value: 50 },
    {
        label: 'Reason for Request',
        value: (
            <ul className='mb-0'>
                <li>Damaged in Transit</li>
                <li>Other
                    <ul>
                        <li>Box arrived open</li>
                    </ul>
                </li>
            </ul>
        ),
    },
    { label: 'Originally Requested By', value: 'Jane Smith' },
    { label: 'Shipping Method', value: 'ground' },
    { label: 'Shipping Account', value: 'LCP' },
]

const detailValue = (label: string) => REQUEST_DETAILS.find((detail) => detail.label === label)?.value

type ApprovalStatus = string | null
type ReplacementOrderStatus = string | null

type ReplacementOrderFormValues = {
    replacementOrderId: string
}

export default function ReplacementView() {
    const [searchParams] = useSearchParams();
    const defaultStatus = searchParams.get('status')

    const [saved, setSaved] = useState<boolean>(false)
    const [editMode, setEditMode] = useState<boolean>(true)
    // placeholder until the approvalStatus is loaded from the backend
    const [approvalStatus, setApprovalStatus] = useState<ApprovalStatus>(defaultStatus)
    const [replacementOrderStatus, setReplacementOrderStatus] = useState<ReplacementOrderStatus>(null)

    const DEFAULT_COMMENTS: Record<string, string> = {
        Pending: '',
        Approved: 'Replacement approved.',
        Rejected: 'We cannot replace this item.',
    }

    const [comments, setComments] = useState<string>(DEFAULT_COMMENTS[defaultStatus ?? ''] ?? '')

    const changeStatus = (status: string) => {
        setApprovalStatus(status)
        if (!comments.trim()) {
            setComments(DEFAULT_COMMENTS[status] ?? '')
        }
    }


    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<ReplacementOrderFormValues>({
        defaultValues: { replacementOrderId: '' },
    })

    const replacementOrderId = useWatch({ control, name: 'replacementOrderId' })

    const onSubmit = (data: ReplacementOrderFormValues) => {
        // TODO: persist replacement order id to the backend
        console.log(data)
        setSaved(true)
        setEditMode(false)
        if (data.replacementOrderId.trim()) {
            setReplacementOrderStatus('Processed Pending')
        }
    }

    return (
        <div className='page-body'>
            <Row>
                <Col>

                    <div className='page-title'>
                        {approvalStatus === 'Pending'
                            ? <h1 className='h3 my-2'>Please review the replacement request for {detailValue('OMS')} order {detailValue('Order ID')}</h1>
                            : <h1 className='h3 my-2'>Replacement details for {detailValue('OMS')} order {detailValue('Order ID')}</h1>
                        }
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        {(approvalStatus !== "Pending" && approvalStatus !== "Rejected") &&
                            <Form.Group as={Row} controlId='replacement-order' className=' pb-2 mb-2 align-items-center'>
                                <Col sm={3}>
                                    <Form.Label className='font-weight-300 mb-0'>Replacement Order ID</Form.Label>
                                </Col>
                                <Col>
                                    {editMode || !saved ? (
                                        <InputGroup className='' style={{ width: 300 }}>
                                            <Form.Control
                                                placeholder='Replacement Order Number'
                                                aria-label='Replacement Order Number'
                                                isInvalid={!!errors.replacementOrderId}
                                                {...register('replacementOrderId')}
                                            />
                                            <div className='input-group-append'>
                                                <Button type='submit' className='rounded-right' disabled={isSubmitting}>Save</Button>
                                            </div>
                                            <Form.Control.Feedback type='invalid'>{errors.replacementOrderId?.message}</Form.Control.Feedback>
                                        </InputGroup>
                                    ) : (
                                        <>
                                            <span className='mr-3 font-weight-600'>{replacementOrderId}</span>
                                            <Button type='button' variant='secondary' size='sm' onClick={() => setEditMode(true)}>Edit</Button>
                                        </>
                                    )}
                                </Col>
                            </Form.Group>

                        }
                        {(approvalStatus === 'Approved' && saved) &&

                            <Form.Group as={Row} className=' pb-2 mb-2 align-items-center'>
                                <Col sm={3}>
                                    <Form.Label className='font-weight-300 mb-0'>Replacement Order Status</Form.Label>
                                </Col>
                                <Col>
                                    <span className='font-weight-600'>{replacementOrderStatus}</span>
                                </Col>
                            </Form.Group>
                        }
                        <Form.Group as={Row} className=' pb-2 mb-2 align-items-center'>
                            <Col sm={3}>
                                <Form.Label className='font-weight-300 mb-0'>Approval Status</Form.Label>
                            </Col>
                            <Col>
                                <span className='font-weight-600'>{approvalStatus}</span>
                            </Col>
                        </Form.Group>
                    </Form>
                    {REQUEST_DETAILS.map(({ label, value }) => (
                        <Row key={label} className='mb-2  pb-2'>
                            <Col className='font-weight-300' xs={3}>{label}: </Col><Col className='font-weight-600'>{value}</Col>
                        </Row>
                    ))}
                    {approvalStatus === 'Pending' &&
                        <Form.Group as={Row} controlId='comments' className=' pb-3 mb-3 pt-2'>
                            <Col sm={3}>
                                <Form.Label className='font-weight-300'>Comments</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    as='textarea'
                                    rows={3}
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                />

                            </Col>
                        </Form.Group>
                    }
                    {approvalStatus !== 'Pending' &&
                        <Form.Group as={Row} className=' pb-2 mb-2 align-items-center'>
                            <Col sm={3}>
                                <Form.Label className='font-weight-300 mb-0'>Comments</Form.Label>
                            </Col>
                            <Col>
                                <span className='font-weight-600'>{comments}</span>
                            </Col>
                        </Form.Group>
                    }

                    {approvalStatus === 'Pending' &&
                        <div className='d-flex justify-content-end'>
                            <Button variant='secondary' onClick={() => changeStatus("Rejected")}>Reject</Button>
                            <Button className='ml-2' onClick={() => changeStatus("Approved")}>Approve</Button>
                        </div>
                    }
                </Col>
            </Row>
        </div>
    )
}
