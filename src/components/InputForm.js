import { useContext } from "react";
import Context from "./Context";
function InputForm() {
  const {
    setInputForTodo,

    inputForTodo,
    setArrayForTodo,
    arrayForTodo,
    dateForTodo,
    setDateForTodo,
  } = useContext(Context);

  const changeDate = (event) => {
    setDateForTodo(event.target.value);
  };
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
        <input
          onChange={changeDate}
          type="date"
          placeholder="До когда вам это нужно"
        />
        <button onClick={fillingArray} type="button">
          Add
        </button>
      </form>
    </>
  );
}

export default InputForm;
