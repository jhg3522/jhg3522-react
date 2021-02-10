import React from 'react';
import {Feed} from "./Feed";
import {Link} from "react-router-dom";

export function TimeLine(props){
    return props.feeds.map( (d) => <Link to={"DetailPage/" + d.id}><Feed owner={d.owner} content={d.content}/></Link>)
}