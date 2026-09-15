import React, { useState } from 'react'
import { Button, Col, Container, InputGroup, Row, Modal, FormGroup } from 'react-bootstrap'
import Form from '../../controls/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../../controls/IconButton'
import Select from 'react-select'
import Switch from '../../controls/Switch'

const OMS_OPTIONS = [
    { value: 'Select One', label: 'Select One' },
    { value: 'American Regent', label: 'American Regent' },
    { value: 'Covista Business Development', label: 'Covista Business Development' },
    { value: 'Continuum', label: 'Continuum' },
    { value: 'OSH - Heart Health', label: 'OSH - Heart Health' },
    { value: 'ReSound', label: 'ReSound' },
    { value: 'Perficient', label: 'Perficient' },
    { value: '95 Percent Group', label: '95 Percent Group' },
    { value: 'AAD', label: 'AAD' },
    { value: 'ABOMS', label: 'ABOMS' },
    { value: 'Adtalem Marketing', label: 'Adtalem Marketing' },
    { value: 'Adtalem Work Force Solutions (MRC)', label: 'Adtalem Work Force Solutions (MRC)' },
    { value: 'AGA', label: 'AGA' },
    { value: 'American University of the Caribbean (AUC)', label: 'American University of the Caribbean (AUC)' },
    { value: 'Andrea Goldman Design', label: 'Andrea Goldman Design' },
    { value: 'APHON', label: 'APHON' },
    { value: 'Aspen Dental', label: 'Aspen Dental' },
    { value: 'August Jackson', label: 'August Jackson' },
    { value: 'Banner Life Sciences', label: 'Banner Life Sciences' },
    { value: 'Beltone', label: 'Beltone' },
    { value: 'Blue Chip', label: 'Blue Chip' },
    { value: 'Chamberlain Marketing (CUCC)', label: 'Chamberlain Marketing (CUCC)' },
    { value: 'City Colleges Of Chicago (CCC)', label: 'City Colleges Of Chicago (CCC)' },
    { value: 'City of Hope (CTCA)', label: 'City of Hope (CTCA)' },
    { value: 'ClearChoice', label: 'ClearChoice' },
    { value: 'Columbia College', label: 'Columbia College' },
    { value: 'Core Change', label: 'Core Change' },
    { value: 'Council of Tall Buildings and Urban Habitats (CTBUH)', label: 'Council of Tall Buildings and Urban Habitats (CTBUH)' },
    { value: 'CVS Careside', label: 'CVS Careside' },
    { value: 'Dairy Queen', label: 'Dairy Queen' },
    { value: 'DEC (Division for Early Childhood)', label: 'DEC (Division for Early Childhood)' },
    { value: 'Diamond Fulfillment Solutions', label: 'Diamond Fulfillment Solutions' },
    { value: 'DMG MORI', label: 'DMG MORI' },
    { value: 'eDoc', label: 'eDoc' },
    { value: 'Equity Lifestyle Investments', label: 'Equity Lifestyle Investments' },
    { value: 'Federal Reserve', label: 'Federal Reserve' },
    { value: 'Fresenius Kabi', label: 'Fresenius Kabi' },
    { value: 'Global Electronics Association (IPC)', label: 'Global Electronics Association (IPC)' },
    { value: 'Grassroots', label: 'Grassroots' },
    { value: 'Guitar Center', label: 'Guitar Center' },
    { value: 'Horizon', label: 'Horizon' },
    { value: 'IKEA', label: 'IKEA' },
    { value: 'Integrative Therapeutics Inc', label: 'Integrative Therapeutics Inc' },
    { value: 'Jetcraft', label: 'Jetcraft' },
    { value: 'Kimball International (National Office Furniture)', label: 'Kimball International (National Office Furniture)' },
    { value: 'La Cornue', label: 'La Cornue' },
    { value: 'Labor Solutions', label: 'Labor Solutions' },
    { value: 'LCP', label: 'LCP' },
    { value: 'Lightwave', label: 'Lightwave' },
    { value: 'Lincoln International,LLC', label: 'Lincoln International,LLC' },
    { value: 'Link Logistics', label: 'Link Logistics', },
    { value: 'Lovet', label: 'Lovet' },
    { value: 'Lynx', label: 'Lynx' },
    { value: 'Methode Electronics Inc', label: 'Methode Electronics Inc' },
    { value: 'Middleby Corp.', label: 'Middleby Corp.' },
    { value: 'Mitsubishi Electric Automation', label: 'Mitsubishi Electric Automation' },
    { value: 'Morningstar', label: 'Morningstar' },
    { value: 'Motorola', label: 'Motorola' },
    { value: 'National Marine', label: 'National Marine' },
    { value: 'Northwestern Alumni', label: 'Northwestern Alumni' },
    { value: 'Oak Street Health (OSH)', label: 'Oak Street Health (OSH)' },
    { value: 'OCC', label: 'OCC' },
    { value: 'Optimas', label: 'Optimas' },
    { value: 'Other', label: 'Other' },
    { value: 'Overture Promotions', label: 'Overture Promotions' },
    { value: 'Pfizer', label: 'Pfizer' },
    { value: 'PharmaCann', label: 'PharmaCann' },
    { value: 'Ross University', label: 'Ross University' },
    { value: 'Ross Vet', label: 'Ross Vet' },
    { value: 'Rubicon-OSH', label: 'Rubicon-OSH' },
    { value: 'Snap-on', label: 'Snap-on' },
    { value: 'Story Financial', label: 'Story Financial' },
    { value: 'StrataTech', label: 'StrataTech' },
    { value: 'Sun Chemical', label: 'Sun Chemical' },
    { value: 'Supply Logic', label: 'Supply Logic' },
    { value: 'TAG', label: 'TAG' },
    { value: 'TerSera', label: 'TerSera' },
    { value: 'Tricoci University', label: 'Tricoci University' },
    { value: 'Twin Health', label: 'Twin Health' },
    { value: 'TWS', label: 'TWS' },
    { value: 'Valent BioSciences', label: 'Valent BioSciences' },
    { value: 'Videojet Technologies Inc', label: 'Videojet Technologies Inc' },
    { value: 'Viking Range', label: 'Viking Range' },
    { value: 'Vive', label: 'Vive' },
    { value: 'Walden', label: 'Walden' },
    { value: 'Wellnow', label: 'Wellnow' },
    { value: 'Wilson Sporting Goods', label: 'Wilson Sporting Goods' },
    { value: 'Wonderlic', label: 'Wonderlic' },
    { value: 'test company', label: 'test company' },
    { value: 'Safe-Guard', label: 'Safe-Guard' },
    { value: 'Sourdough Enzo', label: 'Sourdough Enzo' },
    { value: 'Esteve', label: 'Esteve' },
    { value: 'Haydon', label: 'Haydon' },
]

const FAKE_ITEMS_TO_REPLACE = [
    {
        offerID: 'V2-BHPOSTCARD',
        description: 'Behavioral Health Postcard',
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

const itemsToShow = FAKE_ITEMS_TO_REPLACE.map((item) => (
    { label: `${item.description} | ${item.offerID} | qty: ${item.qty}`, value: `${item.offerID} | ${item.description}`, qty: item.qty, packQty: item.packQty }
))

console.log(itemsToShow)

type ReplacementOption = {
    label: string
    value: string
}

type ReplacementOptionGroup = ReplacementOption & {
    options?: ReplacementOption[]
}

const REPLACEMENT_OPTIONS: ReplacementOptionGroup[] = [
    {
        label: 'Shipping Error',
        value: 'ShippingError',
        options: [
            {
                label: 'Damaged in Transit',
                value: 'DamagedInTransit'
            },
            {
                label: 'Lost Shipment',
                value: 'LostShipment'
            },
        ]
    },
    {
        label: 'Order Entry Error',
        value: 'OrderEntryError',
        options: [
            {
                label: 'Wrong Item Entered',
                value: 'WrongItemEntered'
            },
        ]
    },
    {
        label: 'Printing/Bindery Error',
        value: 'PrintingBinderyError'
    },
    {
        label: 'Picking/Packing Error',
        value: 'PickingPackingError',
        options: [
            {
                label: 'Wrong Item(s) Sent',
                value: 'WrongItemsSent'
            },
            {
                label: 'Missing Item(s)',
                value: 'MissingItems'
            },
        ]
    },
    {
        label: 'Other',
        value: 'Other'
    },
]

const SHIPPING_METHODS = [
    { label: '2 Day', value: '2day', },
    { label: 'Ground', value: 'ground', },
    { label: 'Overnight', value: 'overnight', },
]

const ACCOUNTS = [
    { label: 'LCP', value: 'LCP' },
    { label: 'Customer', value: 'Customer' }
]

function ReplacementRequest() {
    const [oms, setOms] = useState<string>('')

    const [orderId, setOrderId] = useState<string>('')

    const [searchedOrderId, setSearchedOrderId] = useState<boolean>(false)

    type SelectedReason = ReplacementOption & {
        name?: string
        subOptions: {
            name: string
            label: string
        }[]
    }
    const [reasons, setReasons] = useState<SelectedReason[]>([])

    const flatOptions: ReplacementOption[] = REPLACEMENT_OPTIONS.flatMap((group) =>
        group.options ? group.options : [{ label: group.label, value: group.value }]
    )


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
        label: string
        value: string
        qty: number
        packQty: number
    }


    const [itemToReplace, setItemToReplace] = useState<ItemToReplace>({label: '', value: '', qty: 0, packQty: 0})

    const qtyToReplaceOptions = Array.from(
        { length: itemToReplace.qty / itemToReplace.packQty },
        (_, index) => ({label: `${(index + 1) * itemToReplace.packQty}`, value: (index + 1) * itemToReplace.packQty})
    )


    const [qtyToReplace, setQtyToReplace] = useState<number>()

    const [replaceWithDifferentSku, setReplaceWithDifferentSku] = useState<boolean>(false)

    const [skuToReplaceWith, setSkuToReplaceWith] = useState<string>('')

    const [requestedBy, setRequestedy] = useState<string>('')

    const [shippingMethod, setShippingMethod] = useState<string>('')

    const [account, setAccount] = useState<string>('')

    const [returnRequired, setReturnRequired] = useState<boolean>(false)

    const [supportingDocs, setSupportingDocs] = useState<string>('')


    const [showEmail, setShowEmail] = useState(false);

    const handleCloseEmail = () => setShowEmail(false);
    const handleSearchOrderId = () => {
        if (oms !== '' && orderId !== '') {
            setSearchedOrderId(true)
        }
    }

    // const [validated, setValidated] = useState<boolean>(false)
    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }

        // setValidated(true);
        // handleShowEmail
        event.preventDefault();
        setShowEmail(true);
    };

    return (
        <Container>
            <Row>
                <Col className='m-auto'>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup className='form-group form-row' as={Row}>
                            <Col sm={12}>
                                <Form.Label>Order Lookup</Form.Label>
                            </Col>
                            <Col sm={4}>

                                <Select
                                    classNames={{
                                        clearIndicator: () => 'border-top border-bottom btn-icon btn justify-content-center align-items-center',
                                        container: () => 'select2-container--bootstrap',
                                        control: () => 'input-group border-0 select2-selection select2-selection--multiple',
                                        input: () => '',
                                        placeholder: () => 'text-muted',
                                        dropdownIndicator: () => 'btn btn-light text-body btn-icon justify-content-center align-items-center',
                                        valueContainer: () => 'form-control border-right-0',
                                        indicatorSeparator: () => 'd-none',
                                        indicatorsContainer: () => 'input-group-append',
                                        multiValueRemove: () => 'bg-transparent select2-selection__choice__remove m-0',
                                        multiValue: () => 'multiValue select2-selection__choice p-0 mt-0 ml-0 mr-1 flex-row-reverse',
                                        multiValueLabel: () => 'pr-2 pl-0',
                                        menuList: () => 'select2-results__options',
                                        option: () => 'select2-results__option',
                                    }}
                                    options={OMS_OPTIONS}
                                    value={OMS_OPTIONS.find((option) => option.value === oms) ?? null}
                                    onChange={(option) => setOms(option?.value ?? '')}
                                />
                            </Col>
                            <Col className='col-sm'>
                                <Form.Control type='text' placeholder='Enter order id from selected OMS' required value={orderId} onChange={(e) => setOrderId(e.target.value)} />
                            </Col>
                            <Col className='col-sm-auto'>
                                <IconButton variant='secondary' onClick={() => handleSearchOrderId()}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </IconButton>
                            </Col>

                        </FormGroup>
                        <hr className='my-4' />


                        {searchedOrderId &&
                            <>
                                <h4>Replacement Request for order {orderId}</h4>
                                <Form.Group controlId='item' as={Row}>
                                    <Form.Label column sm={4}>Item to Replace</Form.Label>
                                    <Col sm={8}>
                                        {/* <Form.Control as='select' required value={itemToReplace?.offerID ?? ''}
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
                                        </Form.Control> */}
                                        <Select
                                            classNames={{
                                                clearIndicator: () => 'border-top border-bottom btn-icon btn justify-content-center align-items-center',
                                                container: () => 'select2-container--bootstrap',
                                                control: () => 'input-group border-0 select2-selection select2-selection--multiple',
                                                input: () => '',
                                                placeholder: () => 'text-muted',
                                                dropdownIndicator: () => 'btn btn-light text-body btn-icon justify-content-center align-items-center',
                                                valueContainer: () => 'form-control border-right-0',
                                                indicatorSeparator: () => 'd-none',
                                                indicatorsContainer: () => 'input-group-append',
                                                multiValueRemove: () => 'bg-transparent select2-selection__choice__remove m-0',
                                                multiValue: () => 'multiValue select2-selection__choice p-0 mt-0 ml-0 mr-1 flex-row-reverse',
                                                multiValueLabel: () => 'pr-2 pl-0',
                                                menuList: () => 'select2-results__options',
                                                option: () => 'select2-results__option',
                                            }}
                                            options={itemsToShow}
                                            value={itemsToShow.find((option) => option === itemToReplace) ?? null}
                                            onChange={(option) => setItemToReplace(option ?? undefined)}
                                        />
                                    </Col>
                                </Form.Group>

                                {itemToReplace && (
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={4}>Qty to Replace</Form.Label>
                                        <Col sm={8}>
                                        {/* <Form.Control
                                            as="select"
                                            value={qtyToReplace ?? ''}
                                            onChange={(e) => setQtyToReplace(Number(e.target.value))}
                                        >
                                            <option value="">Select quantity</option>

                                            {Array.from(
                                                { length: itemToReplace.qty / itemToReplace.packQty },
                                                (_, index) => (index + 1) * itemToReplace.packQty
                                            ).map((quantity) => (
                                                <option key={quantity} value={quantity}>
                                                    {quantity}
                                                </option>
                                            ))}
                                        </Form.Control> */}

                                        <Select 
                                        classNames={{
                                                clearIndicator: () => 'border-top border-bottom btn-icon btn justify-content-center align-items-center',
                                                container: () => 'select2-container--bootstrap',
                                                control: () => 'input-group border-0 select2-selection select2-selection--multiple',
                                                input: () => '',
                                                placeholder: () => 'text-muted',
                                                dropdownIndicator: () => 'btn btn-light text-body btn-icon justify-content-center align-items-center',
                                                valueContainer: () => 'form-control border-right-0',
                                                indicatorSeparator: () => 'd-none',
                                                indicatorsContainer: () => 'input-group-append',
                                                multiValueRemove: () => 'bg-transparent select2-selection__choice__remove m-0',
                                                multiValue: () => 'multiValue select2-selection__choice p-0 mt-0 ml-0 mr-1 flex-row-reverse',
                                                multiValueLabel: () => 'pr-2 pl-0',
                                                menuList: () => 'select2-results__options',
                                                option: () => 'select2-results__option',
                                            }}
                                            options={qtyToReplaceOptions}
                                            value={qtyToReplaceOptions.find((option) => option.value === qtyToReplace) ?? null}
                                            onChange={(option) => setQtyToReplace(option?.value ?? undefined)}
                                        />
                                        </Col>
                                    </Form.Group>

                                )}

                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Replace with different SKU?</Form.Label>
                                    <Col sm={8}>
                                        <Switch name='replace' checked={replaceWithDifferentSku} onChange={(e) => setReplaceWithDifferentSku(e.target.checked)} togglerFor='replaceWithDifferentSku' />
                                    </Col>
                                </Form.Group>

                                {replaceWithDifferentSku &&
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={4}>SKU to replace with: </Form.Label>
                                        <Col sm={8}><InputGroup>
                                            <Form.Control type='text' placeholder='Search SKU' required value={skuToReplaceWith} onChange={(e) => setSkuToReplaceWith(e.target.value)} />
                                            <div className='input-group-append'>
                                                <IconButton variant='secondary'>
                                                    <FontAwesomeIcon icon={faSearch} />
                                                </IconButton>
                                            </div>
                                        </InputGroup></Col>
                                    </Form.Group>

                                }

                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Reason for Replacement</Form.Label>
                                    <Col sm={8}>
                                        <Select
                                            classNames={{
                                                clearIndicator: () => 'border-top border-bottom btn-icon btn justify-content-center align-items-center',
                                                container: () => 'select2-container--bootstrap',
                                                control: () => 'input-group border-0 select2-selection select2-selection--multiple',
                                                input: () => '',
                                                placeholder: () => 'text-muted',
                                                dropdownIndicator: () => 'btn btn-light text-body btn-icon justify-content-center align-items-center',
                                                valueContainer: () => 'form-control border-right-0',
                                                indicatorSeparator: () => 'd-none',
                                                indicatorsContainer: () => 'input-group-append',
                                                multiValueRemove: () => 'bg-transparent select2-selection__choice__remove m-0',
                                                multiValue: () => 'multiValue select2-selection__choice p-0 mt-0 ml-0 mr-1 flex-row-reverse',
                                                multiValueLabel: () => 'pr-2 pl-0',
                                                menuList: () => 'select2-results__options',
                                                option: () => 'select2-results__option',
                                            }}
                                            isMulti
                                            options={flatOptions}
                                            value={flatOptions.filter((option) => reasons.some((reason) => reason.value === option.value))}
                                            onChange={(options) =>
                                                setReasons(
                                                    options
                                                        ? options.map((option) => ({
                                                            ...option,
                                                            name: option.value,
                                                            subOptions: [],
                                                        }))
                                                        : []
                                                )
                                            }
                                        />
                                    </Col>
                                </Form.Group>

                                {reasons.some((reason) => reason.name === 'Other') && (
                                    <Form.Group as={Row}>
                                        <Form.Label column sm={4}>Specify Other</Form.Label>
                                        <Col sm={8}>
                                            <Form.Control
                                                type='text'
                                                value={otherReason}
                                                onChange={(e) => updateOtherReason(e.target.value)}
                                            />
                                        </Col>
                                    </Form.Group>
                                )}

                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Requested By</Form.Label>
                                    <Col sm={8}><Form.Control type='text' value={requestedBy} onChange={(e) => setRequestedy(e.target.value)} /></Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Shipping Method</Form.Label>
                                    <Col sm={8}>
                                        <Select
                                            classNames={{
                                                clearIndicator: () => 'border-top border-bottom btn-icon btn justify-content-center align-items-center',
                                                container: () => 'select2-container--bootstrap',
                                                control: () => 'input-group border-0 select2-selection select2-selection--multiple',
                                                input: () => '',
                                                placeholder: () => 'text-muted',
                                                dropdownIndicator: () => 'btn btn-light text-body btn-icon justify-content-center align-items-center',
                                                valueContainer: () => 'form-control border-right-0',
                                                indicatorSeparator: () => 'd-none',
                                                indicatorsContainer: () => 'input-group-append',
                                                multiValueRemove: () => 'bg-transparent select2-selection__choice__remove m-0',
                                                multiValue: () => 'multiValue select2-selection__choice p-0 mt-0 ml-0 mr-1 flex-row-reverse',
                                                multiValueLabel: () => 'pr-2 pl-0',
                                                menuList: () => 'select2-results__options',
                                                option: () => 'select2-results__option',
                                            }}
                                            options={SHIPPING_METHODS}
                                            value={SHIPPING_METHODS.find((option) => option.value === shippingMethod) ?? null}
                                            onChange={(option) => setShippingMethod(option?.value ?? '')}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Account to bill</Form.Label>
                                    <Col sm={8}>
                                        <Select
                                            classNames={{
                                                clearIndicator: () => 'border-top border-bottom btn-icon btn justify-content-center align-items-center',
                                                container: () => 'select2-container--bootstrap',
                                                control: () => 'input-group border-0 select2-selection select2-selection--multiple',
                                                input: () => '',
                                                placeholder: () => 'text-muted',
                                                dropdownIndicator: () => 'btn btn-light text-body btn-icon justify-content-center align-items-center',
                                                valueContainer: () => 'form-control border-right-0',
                                                indicatorSeparator: () => 'd-none',
                                                indicatorsContainer: () => 'input-group-append',
                                                multiValueRemove: () => 'bg-transparent select2-selection__choice__remove m-0',
                                                multiValue: () => 'multiValue select2-selection__choice p-0 mt-0 ml-0 mr-1 flex-row-reverse',
                                                multiValueLabel: () => 'pr-2 pl-0',
                                                menuList: () => 'select2-results__options',
                                                option: () => 'select2-results__option',
                                            }}
                                            options={ACCOUNTS}
                                            value={ACCOUNTS.find((option) => option.value === account) ?? null}
                                            onChange={(option) => setAccount(option?.value ?? '')}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Return required</Form.Label>
                                    <Col sm={8}>
                                        <Switch name='return' checked={returnRequired} onChange={(e) => setReturnRequired(e.target.checked)} togglerFor='returnRequired' />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={4}>Supporting Documents</Form.Label>
                                    <Col sm={8}>
                                        <label>

                                            <input type='file' multiple className='' />
                                        </label>


                                    </Col>
                                </Form.Group>
                                <Button type='submit'>Submit</Button>
                            </>

                        }

                    </Form>

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















{/* <Table borderless size='sm' className='list-group-item-success'>
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

                        </Table>*/}