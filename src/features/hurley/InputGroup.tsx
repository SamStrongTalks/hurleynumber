import React, { ReactElement } from 'react';

interface InputGroupInput {
    title: string;
    children: React.ReactNode;
}

export default function InputGroup(props: InputGroupInput): ReactElement {
    return (
        <div className="input-group">
            <h2 className="inputtitle">{ props.title }</h2>
            <div className='input-wrapper'>
                { props.children }
            </div>
        </div>
    );
}
