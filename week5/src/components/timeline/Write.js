import React, { useState } from "react";
import './Write.css'


export function Write(props) {
    const [inputs, setInputs] = useState({
        owner: "",
        content: "",
    });

    const  {owner, content} = inputs

    const onChangeInput = e => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };


    const postBtn = () => {
        props.writeFunc(inputs.owner, inputs.content);
        setInputs({
            owner: '',
            content: ''
        })
    };

    return (
        <>
            <div className='Write'>
                <input  name="owner" type = "text"  value={inputs.owner} onChange={onChangeInput}/>
                <textarea  name="content" value={inputs.content} onChange={onChangeInput}/>
                <button  onClick={postBtn}>POST</button>
            </div>
        </>
    );
}