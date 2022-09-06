import React from 'react'
import { TodoListContext } from '../context/TodoListContext';

const ListOfTodo = () => {
    const { todoList, removeTodoItem } = React.useContext(
        TodoListContext
    );
    return (
        <ul className="list">
            {todoList.map(({ id, label }) => (
                <li key={id} >
                    {label}
                    <button
                        className="delete"
                        onClick={() => removeTodoItem(id)}
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default ListOfTodo