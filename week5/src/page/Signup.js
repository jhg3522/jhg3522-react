import React,{useState} from 'react';
import * as api from '../server/server';
import {useHistory} from "react-router";
import './Signup.css'

export function SignUp(props) {
    const history = useHistory();
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
    });
    const setInputData = (key, data) => {
        setInput({
            ...input,
            [key]: data,
        })
    };
    const signup = async() => {
        if (input.username && input.email && input.password){
            const token = await api.createUser(input.username, input.email, input.password);
            alert("회원가입이 완료되었습니다!")
            console.log(token);
            history.push('/')
        }
        else{
            alert("입력정보를 확인하세요")
        }

    }

    return <>
        <div className="signup-form">
            <p>이메일 : </p><input type="text" onChange={(e) => setInputData('email',e.target.value)}/>
            <p>아이디 : </p><input type="text" onChange={(e) => setInputData('username',e.target.value)}/>
            <p>비밀번호 : </p><input type="password" onChange={(e) => setInputData('password',e.target.value)}/>
            <button onClick={signup}><p>회원가입</p></button>
        </div>
    </>;
}