import {useState, memo} from "react";
import {useTodoContext} from "../../context/todoContext";

const Form = () => {

    const contextToDoList = useTodoContext();

    const[id, setId] = useState("");
    const[text, setText] = useState("");


    const changeTodo =(e) =>{
        e.preventDefault();

        contextToDoList.todos.map(item => {

            if(item.id === {id}){
                console.log(item.title);

            }
            else {

                console.log("ffd")
            }
        })
    }
    return(

        <>
            <form>
            <input value = {id} onChange = {(e) => setId(e.target.value)} type="number"/>
            <input value = {text} onChange = {(e) => setText(e.target.value)} type="text"/>
            <button onClick={  (e) => changeTodo(e) }>Change</button>
            </form>
        </>
    )
}
export default Form