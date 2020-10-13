import React from 'react';
import { DeleteOutlined, HeartOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {Draggable} from 'react-beautiful-dnd'
import {deletePost, toggleLike} from '../../actions/actions'

import './post.scss'

const Post = ({data, deletePost, toggleLike, isLiked, i}) => {

const like = isLiked && 'active'
    return <Draggable draggableId={`${data.id}`} index={i}>
        {(provided)=><div 
        className={`container__link ${like}`} 
        {...provided.draggableProps} 
        {...provided.dragHandleProps}
        ref={provided.innerRef}>
            <HeartOutlined onClick={()=> toggleLike(data.id)} />
            <DeleteOutlined onClick={() => deletePost(data.id)}/>
            <a href={data.url} target="blank">{data.title}</a>
            </div>}
        
        </Draggable>
}

const mapStateToProps = (state, {i}) => {
    return {
        isLiked: state.posts[i].isLiked
    }
}

const mapDispatchToProps = {
    deletePost,
    toggleLike
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)