import React from 'react';
import './bodylayout.css';

const BodyLayout = (props) => {
    return (
        <div className="body-layout">
            {props.children}
        </div>
    )
}

export const LeftSide = (props) => {
    return (
        <div className={'body-left'}>
            {props.children}
        </div>
    )
}

export const RightSide = (props) => {
    return (
        <div className={'body-right'}>
            {props.children}
        </div>
    )
}

export default BodyLayout;
