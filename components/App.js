import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import Footer from "./Footer"


const App = () => {
    return(
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    )
};

import React from 'react'

const component = (props) => {
    return(
        <div>
            {children}
        </div>
    )
}

export default component