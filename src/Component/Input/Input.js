import React from 'react';
import './Input.css';
const input = (props) => {
//     let inputElement = null;
//     switch(props.type)
//     {
//         case ('text'):
//             inputElement = <input 
//             className="inputElement" 
//              value={props.value} />;
//             break;

//         case ('textarea'):
//             inputElement = <textarea  
//             className="inputElement" 
//             value={props.value}/>;
//             break;
//         default:
//             inputElement = <input  
//             className="inputElement" 
//             value={props.value}/>;
//             break;
//     }
    return(
     
    <div className="input">
    <label  className="label">{props.label}</label>
           {/* {inputElement} */}
    <input className="inputElement" type={props.type} placeholder={props.placeholder}/>
    </div>   
    )
};
export default input;