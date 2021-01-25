import React, {useState} from 'react';
import * as api from '../server/server';
import {NavLink} from "react-router-dom";

export function Login(props){
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
        }
    };

    return <>
            <input type="text" onChange={(e)=>setInputData('username',e.target.value)}/>
            <input type="password" onChange={(e)=>setInputData('password',e.target.value)}/>
            <button onClick={login}>button</button>
            <button><NavLink to="/signup"/>SingUp</button>
        </>;
}