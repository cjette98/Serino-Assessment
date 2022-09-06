import React from 'react'
import { TodoListContext } from '../context/TodoListContext'


const AddingTodo = () => {
    const [inputValue, setInputValue] = React.useState("");
    const { addTodoItem } = React.useContext(TodoListContext);

    const handleOnclick = () => {
        addTodoItem(inputValue);
        setInputValue("");
    }


    return (
        <div className="App">
            <input
                type="text"
                value={inputValue}
                placeholder={"Add Task Here"}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button
                onClick={handleOnclick}
            >
                Add
            </button>
        </div>
    )
}

export default AddingTodo