import React from "react";
import "../src/App.css";
import ListOfTodo from './components/ListOfTodo';
import AddingTodo from './components/AddingTodo';
import Provider from './context/ProviderWrapper';

function Question2() {
    return (
        <Provider>
            <AddingTodo />
            <ListOfTodo />
        </Provider>
    );
}

export default Question2