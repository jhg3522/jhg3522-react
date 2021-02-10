import React from 'react';
import './Comment.css'

export function Comment(props){
    return<div className="Comment">
        <div>작성자 : {props.name}</div>
        <div>내용 : {props.body}</div>
    </div>;
}