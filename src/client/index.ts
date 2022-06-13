// TODO: вынести урл сервера в константу которая инициализаруется из переменной окружения 
// почему не ругается ???
interface ClientProps {
    // id: string; // why string?
    limit?: number;
    start?: number;

}

export async function getUserData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    return data;
}

export async function getUserPosts(id: string, limit: number = 3, start: number = 0) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}&_limit=${limit}&_start=${start}`);
    const data = await response.json();
    return data;
}

export async function getAllUserPosts(id: string,  start: number = 0) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}&_start=${start}`);
    const data = await response.json();
    return data;
}

export async function getPost(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
    const data = (await response.json())[0];
    return data;
}

export async function getComments(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    const data = await response.json();
    return data;
}

 
export async function addComment(postid: string, name: string, email: string, text: string) {
    let message = { postid, name, email, text }

    let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postid}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(message)
    });

    let result = await response.json();
    return result;
}


  
//   let result = await response.json();
//   alert(result.message);

