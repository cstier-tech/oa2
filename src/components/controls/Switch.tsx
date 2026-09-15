import type React from 'react';

type SwitchProps = {
    name: string;
    togglerFor: string;
    checked: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

function Switch({ name, togglerFor, checked, onChange }: SwitchProps) {
    return (
        <label className="switch">
            <input
                data-toggler-for={togglerFor}
                id={name}
                name={name}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className="switch-toggle" data-on="On" data-off="Off"></span>
        </label>
    )
}

export default Switch