import React from 'react';
import Button from '../Button/Button'

import './button.scss'

const Buttons = () => {

    const btns = ['Frontend', 'ReactJS','VueJS', 'Angular']

    const elements = btns.map(item => <Button name={item} key={item}/>)

    return elements
          
}

export default Buttons