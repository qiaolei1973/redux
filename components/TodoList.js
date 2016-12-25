import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    <Todo
                        key={todo.id}
                        {...todo}
                        onclick={() => onTodoClick(todo.id)}
                        />
                })
            }
        </ul>
    )
};

export default TodoList