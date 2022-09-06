import React from 'react';
import { TodoListContext } from './TodoListContext';


const initialState = {
    todoList: []
};

const actions = {
    ADD_TODO: "ADDING_TODO_ITEM",
    REMOVE_TODO: "REMOVING_TODO_ITEM",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
            return {
                todoList: [
                    ...state.todoList,
                    {
                        id: new Date().valueOf(),
                        label: action.todoItemLabel,
                    }
                ]
            };
        case actions.REMOVE_TODO: {
            const filteredTodoItem = state.todoList.filter(
                (todoItem) => todoItem.id !== action.todoItemId
            );
            return { todoList: filteredTodoItem };
        }
        default:
            return state;
    }
};


const Provider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const value = {
        todoList: state.todoList,
        addTodoItem: (todoItemLabel) => {
            dispatch({ type: actions.ADD_TODO, todoItemLabel });
        },
        removeTodoItem: (todoItemId) => {
            dispatch({ type: actions.REMOVE_TODO, todoItemId });
        }
    };

    return (
        <TodoListContext.Provider value={value}>
            {children}
        </TodoListContext.Provider>
    );
};

export default Provider