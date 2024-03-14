import {useState, useContext} from "react";
import {TodoContext, useTodoContext} from "../context/todoContext";

const PersonInfo = () => {
    const alt = useTodoContext();
    const [person, setPerson] = useState(
        {
            name:  "Vacho",
            age: 33
        }
    )
    const changeAge = () => {
        setPerson(prev =>({
                ...prev,
                age: prev.age+1

        }))
    }
    return (
        <>
        <div className="person-content">
           <span>Person name - {person.name}</span>
            <span>Person age - {person.age}</span>
            <button onClick={changeAge}>Change Person</button>
        </div>
            <img src="data:image/jpeg;base64,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" alt={alt}/>
        </>
    )

}
export default PersonInfo;