import React, {useState} from 'react';
import * as api from '../server/server';
import {NavLink} from "react-router-dom";
import  {useHistory} from 'react-router';
import { Link } from 'react-router-dom'

export function Login(props){
    const history = useHistory();
    const [input, setInput] = useState({
        username:'',
        password:','
    });
    const setInputData = (key, data) => {
        setInput({
            ...input,
            [key]: data,
        })
    };
    const login = async () => {
        const token = await api.createToken(input.username, input.password);
        if(token.non_field_errors){
            token.non_field_errors.map((e) => alert(e))
        } else{
            console.log(token);
            localStorage.setItem('token', token);
            localStorage.setItem('username', input.username);
            localStorage.setItem('password', input.password);
            alert("로그인이 완료되었습니다!")
            history.push('/')
        }
    };

    return <>
            <input type="text" onChange={(e)=>setInputData('username',e.target.value)}/>
            <input type="password" onChange={(e)=>setInputData('password',e.target.value)}/>
            <button onClick={login}>login</button>
            <Link to="/signup">Sign_up</Link>
        </>;
}