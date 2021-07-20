import React from 'react';
import  './Button.css'

const button = (props) => (
    <button
    className="Button"
        onClick={props.onClick}
> {props.children}</button>
); 
export default button;