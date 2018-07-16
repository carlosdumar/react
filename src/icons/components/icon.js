import React from 'react';

function Icon(props) {
    return (
        <svg
            viewBox="0 0 32 32"
        >
            {props.children}
        </svg>
    )
}

export default Icon;