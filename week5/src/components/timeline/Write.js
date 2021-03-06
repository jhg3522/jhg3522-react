import React, { useState } from "react";
import './Write.css'


export function Write(props) {
    const [inputs, setInputs] = useState({
        content: "",
    });

    const onChangeInput = e => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };


    const postBtn = () => {
        props.writeFunc(inputs.content);
        setInputs({
            content: '',
        })
    };

    return (
        <>
            <div className='Write'>
                <textarea  name="content"   value={inputs.content} onChange={onChangeInput}/>
                <button  onClick={postBtn}>POST</button>
            </div>
        </>
    );
}