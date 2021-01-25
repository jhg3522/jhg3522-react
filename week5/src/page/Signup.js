import React,{useState} from 'react';
import * as api from '../server/server';

export function SignUp(props) {
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
        const token = await api.createUser(input.username, input.email, input.password);
        if(token.non_field_errors){
            token.non_field_errors.map((e) => alert(e))
        } else{
            alert("회원가입이 완료되었습니다!")
        }
    }

    return <>
        이메일 : <input type="text" onChange={(e) => setInputData('email',e.target.value)}/>
        아이디 : <input type="text" onChange={(e) => setInputData('username',e.target.value)}/>
        비밀번호 : <input type="password" onChange={(e) => setInputData('password',e.target.value)}/>
        <button onClick={signup}>회원가입</button>
    </>;
}