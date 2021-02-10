import React from "react";
import {Comment} from './Comment';

export const Detail = (props) => {
    return props.comments.map(comment => <Comment key={comment.id} name={comment.owner} body={comment.content}/>)
}