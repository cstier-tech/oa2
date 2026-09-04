import React from 'react';
import BsForm from 'react-bootstrap/Form';
import type {
    FormProps as BsFormProps,
    FormGroupProps,
    FormLabelProps as BsFormLabelProps,
} from 'react-bootstrap';

export interface FormProps extends BsFormProps {
    ref?: React.Ref<HTMLFormElement>;
}

function Form({ ref, ...props }: FormProps) {
    return <BsForm ref={ref} {...props} />;
}

export type FormLabelProps = BsFormLabelProps & {
    required?: boolean;
};

function FormLabel({ required = false, children, ...props }: FormLabelProps) {
    return (
        <BsForm.Label {...props}>
            {children}
            {required && <span className="text-danger ms-1">*</span>}
        </BsForm.Label>
    );
}

function FormGroup({ children, ...props }: FormGroupProps) {
    return (
        <BsForm.Group {...props} className='form-group'>
            {children}
        </BsForm.Group>
    );
}

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Control = BsForm.Control;
Form.Select = BsForm.Select;
Form.Check = BsForm.Check;
Form.Text = BsForm.Text;

export default Form;
