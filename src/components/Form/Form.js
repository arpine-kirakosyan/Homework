import { useState, memo, useRef } from "react";
import { useTodoContext } from "../../context/todoContext";
import { useOnMount } from '../../hooks/useOnMount';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const Form = () => {
  const [id, setId] = useState("");
  const [text, setText] = useState("");

  const textRef = useRef();

  const setOutsideClick = useOutsideClick(() => setText('clicked outside'));

  useOnMount(() => {
    setOutsideClick(textRef.current);
  });

  return (
    <>
      <form>
        <input value={id} onChange={(e) => setId(e.target.value)} type="number" />
        <input ref={textRef} value={text} onChange={(e) => setText(e.target.value)} type="text" />
      </form>
    </>
  );
};

export default Form;
