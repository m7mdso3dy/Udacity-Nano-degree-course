import React from "react";

const Input = props => {
    return (
        <React.Fragment>
            <label htmlFor={props.id}>
                {props.label}
            </label>
            <input
                id={props.id}
                value={props.value}
                type={props.type}
                onChange={props.onChange}
                />
        </React.Fragment>
    )
}

export default Input;