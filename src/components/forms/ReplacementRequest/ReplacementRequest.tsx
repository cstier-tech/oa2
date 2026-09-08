import React, { useState } from 'react'
import { Button, Card, Col, Container, InputGroup, Row, Table, Modal, Alert } from 'react-bootstrap'
import Form from '../../controls/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../controls/IconButton'
import { Select2 } from "select2-react-component";

const OMS_OPTIONS = [
    'Select One',
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
        offerID: 'V2-BHPOSTCARD',
        description: '	Behavioral Health Postcard',
        qty: 125,
        packQty: 25,
    },
    {
        offerID: 'V2-OSH-MEASURINGSPOONS-150',
        description: 'MEASURING SPOONS - SET OF 4',
        qty: 150,
        packQty: 150,
    },
    {
        offerID: 'V2-PLAYCRD-OSH-LOGO',
        description: 'Playing Cards | OSH Logo',
        qty: 50,
        packQty: 25,
    },
    {
        offerID: 'V2-NOTEPAD4X6',
        description: '4 x 6 Notepad',
        qty: 50,
        packQty: 10,
    },
    {
        offerID: 'V2-SHOPPINGTOTEBAG-OSH-AARP-MINT',
        description: 'CUSTOM SHOPPING BAG 7478 WITH OSH PMS336 & AARP PMS485',
        qty: 100,
        packQty: 100,
    },
    {
        offerID: 'V2-MICROFIBERCLEANINGCLOTH',
        description: 'Microfiber Cleaning Cloth for Glasses',
        qty: 100,
        packQty: 50,
    },
    {
        offerID: 'V2-LIPBALM-PLN',
        description: 'Plain, aloe vera lip balm. SPF 15.',
        qty: 750,
        packQty: 250,
    },
    {
        offerID: 'V2-AEP-TSHIRT-SPA-MINT-S',
        description: 'AEP-TSHIRT-SPA MINT SMALL',
        qty: 4,
        packQty: 1,
    },
    {
        offerID: 'V2-AEP-TSHIRT-SPA-MINT-M',
        description: 'AEP-TSHIRT-SPA MINT MEDIUM',
        qty: 4,
        packQty: 1,
    },
    {
        offerID: 'V2-AEP-TSHIRT-SPA-MINT-L',
        description: 'AEP-TSHIRT-SPA MINT LARGE',
        qty: 4,
        packQty: 1,
    },
    {
        offerID: 'V2-AEP-TSHIRT-SPA-MINT-XL',
        description: 'AEP-TSHIRT-SPA MINT XLARGE',
        qty: 4,
        packQty: 1,
    },
    {
        offerID: 'V2-AEP-TSHIRT-SPA-MINT-2XL',
        description: 'AEP-TSHIRT-SPA MINT 2XL',
        qty: 2,
        packQty: 1,
    },
    {
        offerID: 'V2-OEPSHIRT24-MINT-ENG-S',
        description: 'OEP t-shirt 2024 - Mint | Eng | S',
        qty: 3,
        packQty: 1,
    },
    {
        offerID: 'V2-OEPSHIRT24-MINT-ENG-M',
        description: 'OEP t-shirt 2024 - Mint | Eng | M',
        qty: 3,
        packQty: 1,
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

    const [validOrderId, setValidOrderId] = useState<string>('')

    const [searchedOrderId, setSearchedOrderId] = useState<boolean>(false)
    const handleIsValid = (value: string) => {
        const result =
            value === ''
                ? 'empty'
                : value.includes("x")
                    ? 'invalid'
                    : 'valid'
        setValidOrderId(result)
    }

    type SelectedSubReason = {
        label: string
        name: string
    }
    type SelectedReason = {
        label: string
        name: string
        subOptions: SelectedSubReason[]
    }
    const [reasons, setReasons] = useState<SelectedReason[]>([])
    const toggleReason = (option: typeof REPLACEMENT_OPTIONS[number]) => {
        setReasons((prev) => {
            // prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
            const exists = prev.some((reason) => reason.name === option.name)
            if (exists) {
                return prev.filter((reason) => reason.name !== option.name)
            }
            return [
                ...prev,
                {
                    label: option.label,
                    name: option.name,
                    subOptions: [],
                },
            ]
        })
    }
    const toggleSubReason = (
        parent: typeof REPLACEMENT_OPTIONS[number],
        subOption: { label: string; name: string }
    ) => {
        setReasons((prev) =>
            prev.map((reason) => {
                if (reason.name !== parent.name) {
                    return reason
                }
                const exists = reason.subOptions.some(
                    (selected) => selected.name == subOption.name
                )
                return {
                    ...reason,
                    subOptions: exists
                        ? reason.subOptions.filter(
                            (selected) => selected.name !== subOption.name
                        )
                        : [...reason.subOptions, subOption]
                }
            })
        )
    }

    const updateOtherReason = (value: string) => {
        setReasons((previous) =>
            previous.map((reason) =>
                reason.name === 'Other'
                    ? {
                        ...reason,
                        subOptions: value
                            ? [{ name: 'OtherSpecify', label: value }]
                            : [],
                    }
                    : reason
            )
        )
    }

    const otherReason = reasons.find(
        (reason) => reason.name === 'Other'
    )?.subOptions[0]?.label ?? ''


    type ItemToReplace = {
        description: string
        offerID: string
        qty: number
        packQty: number
    }


    const [itemToReplace, setItemToReplace] = useState<ItemToReplace>()

    const [qtyToReplace, setQtyToReplace] = useState<number>()

    const [replaceWithDifferentSku, setReplaceWithDifferentSku] = useState<boolean>(false)

    const [skuToReplaceWith, setSkuToReplaceWith] = useState<string>('')

    const [requestedBy, setRequestedy] = useState<string>('')

    const [shippingMethod, setShippingMethod] = useState<string>('')

    const [account, setAccount] = useState<string>('')

    const [returnRequired, setReturnRequired] = useState<string>('')

    const [supportingDocs, setSupportingDocs] = useState<string>('')


    const [showEmail, setShowEmail] = useState(false);

    const handleCloseEmail = () => setShowEmail(false);
    const handleShowEmail = () => setShowEmail(true);

    const [validated, setValidated] = useState<boolean>(false)
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    handleShowEmail
  };

    return (
        <Container>
            <Row>
                <Col lg='8' className='m-auto'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                            <InputGroup hasValidation>
                                <Form.Control isInvalid type='text' placeholder='Enter order id from selected OMS' required value={orderId} onChange={(e) => setOrderId(e.target.value)} />
                                
                                <div className='input-group-append'>
                                    <IconButton variant='secondary' onClick={() => handleIsValid(orderId)}>
                                        <FontAwesomeIcon icon={faSearch} />
                                    </IconButton>
                                </div>
                                <Form.Control.Feedback type='invalid'>
                                    Please enter an order ID
                                </Form.Control.Feedback>
                            </InputGroup>
                            
                        </Form.Group>

                        
                            <Table borderless size='sm' className='list-group-item-success'>
                                <tbody>
                                    <tr className='small'>
                                    <td><strong>Order ID:</strong></td>
                                    <td>{orderId}</td>
                                    <td><strong>Order Date:</strong></td>
                                    <td>09/01/2026 02:07 PM</td>
                                </tr>
                                <tr className='small'>
                                    <td><strong>Reference #:</strong></td>
                                    <td>802</td>
                                    <td><strong>Status:</strong></td>
                                    <td>Processed Backordered Shipped</td>
                                </tr>
                                <tr className='small'>
                                    <td><strong>Ordered By: </strong></td>
                                    <td>Chitova Whetstone
                                        Oak Street Health - Soundview<br />
                                        1555 Westchester Ave<br />
                                        Bronx, NY 10472-2910<br />
                                        United States<br />
                                        Phone: (718) 765-6367<br />
                                        Email: chitova.whetstone@oakstreethealth.com</td>
                                    <td><strong>Ship To: </strong></td>
                                    <td>Chitova Whetstone
                                        Oak Street Health - Soundview<br />
                                        1555 Westchester Ave<br />
                                        Bronx, NY 10472-2910<br />
                                        United States<br />
                                        Phone: (718) 765-6367<br />
                                        Email: chitova.whetstone@oakstreethealth.com</td>
                                </tr>
                                </tbody>
                                
                            </Table>
                            <Alert variant='danger'>
                                Order {orderId} Not Found
                            </Alert>
                           
                        

                        <Form.Group controlId='item'>
                            <Form.Label>Item to Replace</Form.Label>
                            <Form.Control as='select' required value={itemToReplace?.offerID ?? ''}
                                onChange={(e) => {
                                    const selectedItem = FAKE_ITEMS_TO_REPLACE.find(
                                        (item) => item.offerID === e.target.value
                                    )
                                    setItemToReplace(selectedItem)
                                }}
                            >
                                <option value=''>Select One</option>
                                {FAKE_ITEMS_TO_REPLACE.map((item) => (
                                    <option key={item.offerID} value={item.offerID}>{`SKU: ${item.offerID} | DESC: ${item.description} | QTY: ${item.qty}`}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        {itemToReplace && (
                            <Form.Group>
                                <Form.Label>Qty to Replace</Form.Label>

                                {/* <Form.Control
                                    type='number'
                                    value={qtyToReplace ?? ''}
                                    min='0'
                                    max={itemToReplace.qty}
                                    step={itemToReplace.packQty}
                                    onChange={handleQtyToReplace}
                                /> */}
                                <Form.Control
                                    as="select"
                                    value={qtyToReplace ?? ''}
                                    onChange={(e) => setQtyToReplace(Number(e.target.value))}
                                >
                                    <option value="">Select quantity</option>

                                    {Array.from(
                                        { length: itemToReplace.qty / itemToReplace.packQty + 1 },
                                        (_, index) => (index + 1) * itemToReplace.packQty
                                    ).map((quantity) => (
                                        <option key={quantity} value={quantity}>
                                            {quantity}
                                        </option>
                                    ))}
                                </Form.Control>
                                {/* <Form.Text className='muted'>Max qty that can be returned for this item is <strong>{itemToReplace.qty}</strong>.</Form.Text> */}
                            </Form.Group>
                        )}
                        <div className='form-group'>
                            <Form.Check id='replaceWithDifferentSku'>
                                <Form.Check.Input checked={replaceWithDifferentSku} onChange={(e) => setReplaceWithDifferentSku(e.target.checked)} />
                                <Form.Check.Label>Replace with different SKU?</Form.Check.Label>
                            </Form.Check>
                        </div>
                        {replaceWithDifferentSku &&
                            <Form.Group>
                                <Form.Label>SKU to replace {itemToReplace?.offerID} with: </Form.Label>
                                <InputGroup>
                                    <Form.Control type='text' placeholder='Search SKU' required value={skuToReplaceWith} onChange={(e) => setSkuToReplaceWith(e.target.value)} />
                                    <div className='input-group-append'>
                                        <IconButton variant='secondary'>
                                            <FontAwesomeIcon icon={faSearch} />
                                        </IconButton>
                                    </div>
                                </InputGroup>
                            </Form.Group>
                        }
                        <div className='form-group'>
                            <label>Reason for Replacement</label>
                            {REPLACEMENT_OPTIONS.map((opt) => {
                                const selectedReason = reasons.find(
                                    (reason) => reason.name === opt.name
                                )
                                return (
                                    <div key={opt.name}>
                                        <Form.Check id={opt.name}>
                                            <Form.Check.Input type='checkbox' onChange={() => toggleReason(opt)} />
                                            <Form.Check.Label>{opt.label}</Form.Check.Label>
                                        </Form.Check>
                                        <div className='ml-3'>
                                            {selectedReason && opt.subOptions?.map((subOpt) => (
                                                <Form.Check key={subOpt.name} id={subOpt.name}>
                                                    <Form.Check.Input type='checkbox' onChange={() => toggleSubReason(opt, subOpt)} />
                                                    <Form.Check.Label>{subOpt.label}</Form.Check.Label>
                                                </Form.Check>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                            {reasons.some((reason) => reason.name === 'Other') &&
                                <Form.Group>
                                    <Form.Label>Specify Other</Form.Label>
                                    <Form.Control type='text' value={otherReason} onChange={(e) => updateOtherReason(e.target.value)} />
                                </Form.Group>
                            }
                        </div>

                        <Form.Group controlId='requestedBy'>
                            <Form.Label>Requested By</Form.Label>
                            <Form.Control type='text' value={requestedBy} onChange={(e) => setRequestedy(e.target.value)} />
                        </Form.Group>


                        <Form.Group id='shipmethod'>
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

                        <Form.Group id='account'>
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

                        <Form.Group id='returnRequired'>
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
                            <Form.Control type='file' value={supportingDocs} onChange={(e) => setSupportingDocs(e.target.value)} className='border-0 p-0' />
                        </Form.Group>

                    </Form>
                    <Button type='submit'>Submit</Button>
                </Col>
            </Row>

            <Modal show={showEmail} onHide={handleCloseEmail} size="lg">
                <Modal.Header>
                    <Modal.Title>Please review the replacement request for {oms}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {oms && <p><strong>OMS: </strong>{oms}</p>}
                    {orderId && <p><strong>Order ID: </strong>{orderId}</p>}
                    {itemToReplace && <p><strong>Item to Replace: </strong>{itemToReplace.offerID}</p>}
                    {reasons.length > 0 &&
                        <>
                            <strong>Reason for Request: </strong>
                            <ul>
                                {reasons.map((reason) => (
                                    <li key={reason.name}>{reason.label}
                                        <ul>
                                            {reason.subOptions.map((subReason) => (
                                                <li key={subReason.name}>
                                                    {subReason.label}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </>

                    }
                    {requestedBy && <p><strong>Originally Requested By: </strong>{requestedBy}</p>}
                    {shippingMethod && <p><strong>Shipping Method: </strong>{shippingMethod}</p>}
                    {account && <p><strong>Shipping Account: </strong>{account}</p>}
                    {returnRequired && <p><strong>Return Required?: </strong>{returnRequired}</p>}
                    {supportingDocs && <p><strong>Supporting Docs: </strong>{supportingDocs}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseEmail}>
                        Close
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