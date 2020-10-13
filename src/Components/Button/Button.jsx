import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getPosts } from '../../actions/actions';


// eslint-disable-next-line no-shadow
const Button = ({name, getPosts}) =>{

return <button className="react-btn" type='button'  onClick={()=> getPosts(name)}>{name}</button>
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    getPosts
}

export default connect(null,mapDispatchToProps)(Button)