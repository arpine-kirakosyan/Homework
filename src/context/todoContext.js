import React, {memo, useEffect} from 'react';
import {useState, createContext, useContext} from "react";

export const TodoContext = React.createContext(null);


const TodoProvider = ({children}) => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => setTodos(res))
            .catch(err => console.log(err))
    }, [])


    return (
      <TodoContext.Provider value={{todos, setTodos}}>
          {children}
      </TodoContext.Provider>
    )

}
export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;