import React from 'react';


export async function createFeed(name, body) {
    const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            owner: name,
            content: body,
        }),
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}

export async function readFeeds(){
    const readResult = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/',{
        method: 'get',
    });
    const readJson = await readResult.json();
    const propsData = readJson.map(read =>{
        return {
            name: read.owner,
            body: read.content
        }
    });
    return propsData.reverse();
}

export async function createToken(id,pw){
    const res = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/api-token-auth/',{
        method: 'post',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: id,
            password: pw,
        })
    });
    return await res.json();
    }

export async function createUser(id, email, pw) {
    const res = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/user/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: id,
            email: email,
            password: pw,
        })
    });
    return await res.json();
}
