const initilaState = {
    posts: [],
    isLoading: false
}

const Reducer = (state = initilaState, action) => {
    if(action.type === 'FETCH_POST'){
        return {...state, isLoading: true }
    }
    if(action.type === 'PUT_DATA'){
       
        return {...state, posts: [...state.posts, action.payload], isLoading: false}
    }
    if(action.type === 'DELETE'){
        const newArray = state.posts.filter(item => item.id !== action.payload)
        return {...state, posts: newArray }
    }
    if(action.type === 'LIKE'){
        const newArray = state.posts.map(item => item.id === action.payload ? {...item, isLiked: !item.isLiked} : item)
        return {...state, posts: newArray}
    }
    if(action.type === "SORT"){
   
    const arr = state.posts.filter((item,index)=> index !== action.payload.sourceIdx)
    arr.splice(action.payload.destIdx, 0, state.posts[action.payload.sourceIdx])
    
        return {...state, posts: arr}
    }
    return state
}

export default Reducer