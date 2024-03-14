import {useTodoContext} from "../context/todoContext";
import {useState, memo} from "react";

const TodoList = () => {
    const [activeStateId, setActiveStateId] = useState(contextTodo.todos);
    const [id, setId] =useState(null)
    const [todoColor, setTodoColor] =useState("red")
    const contextTodo = useTodoContext();
    const changeColor = (id) => {
        contextTodo.todos.map(item =>{
            // if(item.id === id){
            //
            // }
        })

    }

    return(
        <div>
            { contextTodo.todos.map(item =>
                <div key={item.id} className="todolist" style={{backgroundColor: todoColor}} >
                        <span>{item.id}</span>
                        <p>{item.title}</p>
                       <button  onClick={() => { setTodoColor("green")}}></button>
            </div>)}
        </div>



    )

}
export default  memo(TodoList);