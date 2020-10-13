import React from 'react';
import {connect} from 'react-redux';
import {DragDropContext,Droppable} from 'react-beautiful-dnd';
import {Spin} from 'antd'
import 'antd/dist/antd.css';
import PropTypes from 'prop-types'
import {sortPosts} from '../../actions/actions'


import Post from '../Post/Post'

// eslint-disable-next-line no-shadow
const Posts =({posts, isLoading, sortPosts}) => {

    const onDragEnd = (result) =>{
        if(!result.destination) return
        sortPosts({sourceIdx: result.source.index, destIdx: result.destination.index })
        
    }
    
    const elements = posts.map((item, i) => <Post data={item} i={i} key={item.id}/>)
    const spinner = isLoading ? <Spin/> : null
return <>
            <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable-1">
                {(provided)=>{
                    return <div {...provided.droppableProps} ref={provided.innerRef}>
                                        {elements}
                                        {spinner}
                                {provided.placeholder}
                            </div>
                            
                }  
                }
            </Droppable>
            </DragDropContext>
        
            
        </>
}

Posts.defaultProps = {
    posts: []
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    sortPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state)=> {
return {
    posts: state.posts,
    isLoading: state.isLoading
    }
}

const mapDispatchToProps = {
    sortPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)