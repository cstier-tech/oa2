import React from 'react'
import Select from 'react-select'

function Select2({  }) {
    return (
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
    )
}

export default Select2