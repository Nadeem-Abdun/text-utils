import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }
    return (
        <div className={`alertContainer${props.mode === 'light' ? 'light' : 'dark'} `}>
            {props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show mb-0`} role="alert">
                <strong>{capitalize(props.alert.typ)}</strong> {props.alert.msg}
            </div>}
        </div>
    )
}