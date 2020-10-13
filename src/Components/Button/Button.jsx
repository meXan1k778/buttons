import React from 'react';
import {connect} from 'react-redux'
import { getPosts } from '../../actions/actions';


const Button = ({name, getPosts}) =>{

return <button className="react-btn" type='button'  onClick={()=> getPosts(name)}>{name}</button>
}

const mapDispatchToProps = {
    getPosts
}

export default connect(null,mapDispatchToProps)(Button)