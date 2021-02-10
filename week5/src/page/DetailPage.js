import React, {useState,useEffect} from 'react';
import {useParams} from "react-router";
import './DetailPage.css';
import {createComment, readComments, readFeed} from "../server/server";
import {Comment_Write} from "../components/detail/Comment_Write";
import {Detail} from "../components/detail/Detail";

export function DetailPage(props){
    const {id} = useParams();
    const [feed, setFeed] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("token")){
            const server = async () =>{
                setFeed(await readFeed(id));
                setComments(await readComments(id));
            };
            server();
        }
        else{
            alert("로그인을 해주세요!");
        }
    },[]);
    return <>
        <div className='DetailPage'>
            <div className='DetailPage-inner'>
                <h2>DetailPage</h2>
                <div className="feed">
                    <div className="owner">{feed.owner} : </div>
                    <div className="content">{feed.content}</div>
                </div>
                <Comment_Write p_id={id}
                    readComments = {readComments}
                    setComments = {setComments}
                    writeFunc={createComment}
                />
            </div>
            <div className='DetailPage-inner2'>
               <Detail comments={comments}/>
            </div>
        </div>
    </>
}