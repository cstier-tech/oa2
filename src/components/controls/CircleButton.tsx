import React from 'react';
import BsButton, { ButtonProps as BsButtonProps } from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

export interface CircleButtonProps extends BsButtonProps {
    icon?: IconProp;
    ref?: React.Ref<HTMLButtonElement>;
}

const CircleButton = ({ icon = faCircleCheck, ref, ...props }: CircleButtonProps) => (
    <BsButton ref={ref} {...props} className={clsx('btn-circle', props.className)}>
        <FontAwesomeIcon icon={icon} className="me-2" />
    </BsButton>
);

export default CircleButton;
