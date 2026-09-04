import React from 'react';
import BsButton, { ButtonProps as BsButtonProps } from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

export interface IconButtonProps extends BsButtonProps {
    icon?: IconProp;
    ref?: React.Ref<HTMLButtonElement>;
}

const IconButton = ({ icon = faCircleCheck, ref, ...props }: IconButtonProps) => (
    <BsButton ref={ref} {...props} className={clsx('btn-icon', props.className)}>
        <FontAwesomeIcon icon={icon} className="me-2" />
    </BsButton>
);

export default IconButton;
