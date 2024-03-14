import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TodoContext from "./context/todoContext";
import TodoProvider from "./context/todoContext";
 import {RouterProvider} from "react-router-dom";
 import {MAIN_ROUTS, router} from "./routes";
 import {Provider} from "react-redux";
 import {store} from "./redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <TodoProvider>
        <RouterProvider router = {router} />
    </TodoProvider>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
