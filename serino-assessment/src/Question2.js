import React from "react";
import "../src/App.css";
import { AddingTodo, ListOfTodo } from './components';
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