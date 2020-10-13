import React from 'react';
import {Provider} from 'react-redux'
import store from '../../store/store'
import Buttons from '../Buttons/Buttons'
import Posts from '../Posts/Posts'

import './app.scss'

const App = () => {

    return <>
                <Provider store={store}>
                    <div className="container">
                        <Buttons/>
                        <Posts/>
                    </div>  
                </Provider>
            </>
            
}

export default App