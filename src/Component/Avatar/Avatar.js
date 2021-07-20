import React from 'react';

const avatar = (props) => {
    
    return(
        <div>
            <img src={props.src}    
                 alt={props.alt}
                 style={{verticalAlign:"middle",
                         width: "50px",
                         height: "50px",
                         borderRadius: "50%",
                         marginRight: "10px"
                        }
               }/>
        </div>
    )
}

export default avatar;