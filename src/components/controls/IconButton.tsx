import React from 'react';
import BsButton, { ButtonProps as BsButtonProps } from 'react-bootstrap/Button';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import clsx from 'clsx';

export interface IconButtonProps extends BsButtonProps {
    icon?: IconProp;
    ref?: React.Ref<HTMLButtonElement>;
}

const IconButton = ({ children, ref, ...props }: IconButtonProps) => (
    <BsButton ref={ref} {...props} className={clsx('btn-icon', props.className)}>
        {/* //<FontAwesomeIcon icon={icon} className="me-2" /> */}
        {children}
    </BsButton>
);

export default IconButton;
