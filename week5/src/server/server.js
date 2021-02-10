const token = window.localStorage.getItem('token');

export async function createFeed(content) {
    const result = await fetch('https://react-js-sample-api.kmuwink.net/feed/', {
        method: 'post',
        headers: {
            Authorization: "Token " + token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content,
        }),
    });
    console.log(result);
    window.location.reload();
}

export async function createComment(id, content) {
    const result = await fetch(`https://react-js-sample-api.kmuwink.net/feed/${id}/comment/`, {
        method: 'post',
        headers: {
            Authorization: "Token " + token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content,
        }),
    });
    console.log(result);
    window.location.reload();
}

export async function readFeeds() {
    const readResult = await fetch('https://react-js-sample-api.kmuwink.net/feed/',{
        method:'get',
        headers: {
            Authorization: "Token " + token,
        }
    })
    const readJson = await readResult.json();
    return readJson.reverse();
}

export async function readFeed(id) {
    const readResult = await fetch(`https://react-js-sample-api.kmuwink.net/feed/${id}/`,{
        method:'get',
        headers: {
            Authorization: "Token " + token,
        }
    })
    return await readResult.json();
}

export async function readComments(id) {
    const readResult = await fetch(`https://react-js-sample-api.kmuwink.net/feed/${id}/comment/`,{
        method:'get',
        headers: {
            Authorization: "Token " + token,
        }
    })
    return await readResult.json();
}

export async function createToken(username,password){
    const res = await fetch('https://react-js-sample-api.kmuwink.net/api-token-auth/',{
        method: 'post',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        }),
    });
    return await res.json();
}

export async function createUser(username, email, password) {
    const res = await fetch('https://react-js-sample-api.kmuwink.net/user/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            email,
            password,
        })
    });
    return await res.json();
}
export async function readUser() {
    const readResult = await fetch('https://react-js-sample-api.kmuwink.net/user/',{
        method:'get'
    })
    const readJson = await readResult.json();
    return {
        username: readJson.username,
        email: readJson.email,
    };
}