import React, { useState } from "react";

import './Commnet_Write.css'


export function Comment_Write(props) {
    const [inputs, setInputs] = useState({
        content: '',
    });

    const onChangeInput = e => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };


    const postBtn = () => {
        props.writeFunc(props.p_id,inputs.content);
        setInputs({
            content: ''
        })
    };

    return (
        <>
            <div className='Comment_Write'>
                <textarea  name="content" value={inputs.content} onChange={onChangeInput}/>
                <button  onClick={postBtn}>POST</button>
            </div>
        </>
    );
}