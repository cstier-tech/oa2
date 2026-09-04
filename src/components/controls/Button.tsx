import React from 'react';
import BsButton, { ButtonProps as BsButtonProps } from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export interface ButtonProps extends BsButtonProps {
    showIcon?: boolean;
    icon?: IconProp;
    ref?: React.Ref<HTMLButtonElement>;
}

const Button = ({ showIcon = false, icon = faCircleCheck, children, ref, ...props }: ButtonProps) => (
    <BsButton ref={ref} {...props}>
        {showIcon && <FontAwesomeIcon icon={icon} className="me-2" />}
        <span>{children}</span>
    </BsButton>
);

export default Button;
