import React, {useState,useEffect} from 'react';
import './TimelinePage.css';
import {Write} from "../components/timeline/Write";
import {TimeLine} from "../components/timeline/TimeLine";
import {createFeed,readFeeds} from "../server/server";

export function TimelinePage(props){
    const [feeds, setFeeds] = useState([]);

    useEffect(() => {
        const server = async() => {
            setFeeds(await readFeeds());
        }
        server();
    });


    return <>
        <div className='TimelinePage'>
            <div className='Timeline-inner'>
                <h2>TimelinePage</h2>
                <Write
                    readFeeds={readFeeds}
                    setFeeds ={setFeeds}
                    writeFunc={createFeed}
                />
            </div>
            <div className='Timeline-inner2'>
                <TimeLine feeds={feeds}/>
            </div>
        </div>
    </>
}