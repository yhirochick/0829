// Resources
// JSONPlaceholder comes with a set of 6 common resources:

// /posts	100 posts
// /comments	500 comments
// /albums	100 albums
// /photos	5000 photos
// /todos	200 todos
// /users	10 users
// Note: resources have relations. For example: posts have many comments, albums have many photos, ... see below for routes examples.

const baseURL = "https://jsonplaceholder.typicode.com/";

export function posts() {
    const url = baseURL + "posts";
    return fetch(url).then(usersResp => usersResp.json());
}

export function comments() {
    const url = baseURL + "comments";
    return fetch(url).then(usersResp => usersResp.json());
}

export function albums() {
    const url = baseURL + "albums";
    return fetch(url).then(usersResp => usersResp.json());
}

export function photos() {
    const url = baseURL + "photos";
    return fetch(url).then(usersResp => usersResp.json());
} 

export function todos() {
    const url = baseURL + "posts";
    return fetch(url).then(usersResp => usersResp.json());
}

export function users() {
    const url = baseURL + "users";
    return fetch(url).then(usersResp => usersResp.json());
}

