import React, { ReactElement } from 'react';

interface InputGroupInput {
    tooltip: string;
    label: string;
    value: number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {};
}

export default function InputRow(props: InputGroupInput): ReactElement {
    return (
        <div className='input-row' >
            <label className='tooltip' >{ props.label } <span className='tooltiptext'>{props.tooltip}</span></label>
            <input type="number" value={props.value} onChange={ props.handleChange } />
        </div>
    );
}
