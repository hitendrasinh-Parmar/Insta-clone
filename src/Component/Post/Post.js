import React from 'react';
// import logo from '../../assets/logo512.png';
import './Post.css';
import Avatar from '../../Component/Avatar/Avatar';
import avatar from '../../assets/img_avatar2.png';

const post = (props) => {
    return(
        
        <div className="post">
            <div className="post__header">
                    <Avatar 
                    alt = "abcd"
                    src = {avatar}/>
                    
                      <h3>{props.username}</h3>

            </div>
            
            <img src={props.imageUrl} 
            alt={props.username}
                 className="post__image"/>

         <h4 className="post__text"> <strong>{props.username}</strong>  {props.caption}</h4>
        </div>
    )
}
export default post;