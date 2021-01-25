import React from 'react';
import {Feed} from "./Feed";

export function TimeLine(props){
    return <>
        {props.feeds.map( (feed) => <Feed name={feed.name} body={feed.body}/> )}
        </>;
}