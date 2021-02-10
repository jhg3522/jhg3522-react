import React, {useState,useEffect} from 'react';
import './TimelinePage.css';
import {Write} from "../components/timeline/Write";
import {TimeLine} from "../components/timeline/TimeLine";
import {createFeed,readFeeds} from "../server/server";
import {useHistory} from "react-router";

export function TimelinePage(props){
    const [feeds, setFeeds] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("token")) {
            const server = async () => {
                setFeeds(await readFeeds());
            }
            server();
        }else{
            alert("로그인을 해주세요.");
            history.push('/');
        }
    },[]);


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