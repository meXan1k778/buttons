export const FETCH_POST = "FETCH_POST";
export const PUT_DATA = "PUT_DATA";

const getPosts = (name) =>{
    return {
        type: FETCH_POST,
        payload: name
    }
}

const putPost = (data) =>{
    return {
        type: PUT_DATA,
        payload: data
    }
}

const deletePost = (id) =>{
    return {
        type: 'DELETE',
        payload: id
    }
}

const toggleLike = (title) => {
    return {
        type: 'LIKE',
        payload: title
    }
}

const sortPosts = (data) => {
    return {
        type: "SORT",
        payload: data
    }
}

export {
    getPosts,
    putPost,
    deletePost,
    toggleLike,
    sortPosts
}