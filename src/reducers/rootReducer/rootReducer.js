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
    //    const source = action.payload.sourceIdx
    //    const dest = action.payload.destIdx
    //     const oldArray = state.posts.slice()
    //     oldArray[source] = state.posts[dest]
    //     oldArray[dest] = state.posts[source]
    //     console.log(oldArray)
    const arr = state.posts.filter((item,index)=> index !== action.payload.sourceIdx)
    arr.splice(action.payload.destIdx, 0, state.posts[action.payload.sourceIdx])
        // const newArray = state.posts.map((item, index)=> {
        //     if(index === action.payload.sourceIdx){
        //         return state.posts[action.payload.destIdx]
        //     }
        //     if(index === action.payload.destIdx){
        //         return state.posts[action.payload.sourceIdx]
        //     }
        //     return item
        // }  )
        
        return {...state, posts: arr}
    }
    return state
}

export default Reducer