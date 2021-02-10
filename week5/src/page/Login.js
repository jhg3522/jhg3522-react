import React, {useState} from 'react';
import * as api from '../server/server';
import { Link } from 'react-router-dom'
import './Login.css'
import {useHistory} from "react-router";

export function Login(props){
    const history = useHistory();
    const [input, setInput] = useState({
        username:'',
        password:'',
    });

    const setInputData = (key, data) => {
        setInput({
            ...input,
            [key]: data,
        })
    };

    const login = async () => {
        const response = await api.createToken(input.username, input.password);
        if(response.non_field_errors){
            response.non_field_errors.map((e) => alert(e))
        } else{
            console.log(response)
            localStorage.setItem('token', response.token);
            localStorage.setItem('username', input.username);
            alert("로그인이 완료되었습니다!")
            history.push('/');
        }
    };

    return <>
            <div className="login-form">
                <p>아이디 : </p><input type="text" onChange={(e)=>setInputData('username',e.target.value)}/>
                <p>비밀번호 : </p><input type="password" onChange={(e)=>setInputData('password',e.target.value)}/>
                <div className="btn-wrap">
                    <button className="btn" onClick={login}>login</button>
                    <div className="sign"><Link to="/signup">Sign_up</Link></div>
                </div>
            </div>
        </>;
}