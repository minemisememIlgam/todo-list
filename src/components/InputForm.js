import { useContext } from "react";
import Context from "./Context";
function InputForm() {
  const {
    setInputForTodo,

    inputForTodo,
    setArrayForTodo,
    arrayForTodo,
  } = useContext(Context);

  const changeText = (event) => {
    event.preventDefault();
    setInputForTodo(event.target.value);
  };

  const fillingArray = () => {
    if (inputForTodo === "") {
      alert("пустое сообщение!");
    } else setArrayForTodo([...arrayForTodo, inputForTodo]);
  };

  return (
    <>
      <form>
        <input onChange={changeText} type="text" placeholder="Add new todo" />
        <button onClick={fillingArray} type="button">
          Add
        </button>
      </form>
    </>
  );
}

export default InputForm;
