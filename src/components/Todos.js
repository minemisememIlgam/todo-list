import { useContext } from "react";
import Context from "./Context";
import { useReducer } from "react";
function Todos() {
  const { inputForTodo, arrayForTodo, setArrayForTodo, dateForTodo } =
    useContext(Context);
  console.log(arrayForTodo);
  const now = Date.now(); // получаем текущую дату и время в виде количества миллисекунд

  // можно использовать объект Date для форматирования даты и времени по своему усмотрению
  const date = new Date(now);
  const formattedDate =
    date.toLocaleDateString(); /*Эта строка кода определяет, что происходит при диспетчеризации действия типа DELETE в редьюсере.

      ...state создает новый объект, содержащий все свойства и значения из текущего состояния state. Таким образом, мы создаем новый объект, который является копией текущего состояния.
      
      Затем мы обновляем свойство arrayForTodo в этом новом объекте. Мы используем метод массива filter, чтобы удалить элемент из массива arrayForTodo, указанный в action.payload.
      
      Метод filter создает новый массив, содержащий только те элементы, которые прошли условие, указанное в переданной ему функции. В данном случае мы хотим оставить только те элементы, индекс которых не соответствует action.payload.
      
      В итоге, эта строка кода возвращает новый объект состояния, который имеет обновленное свойство arrayForTodo, где удален нужный элемент. В данном контексте _ используется для игнорирования первого аргумента (элемента массива), а index используется для получения индекса текущего элемента в массиве.

Функция filter принимает в качестве аргумента колбэк-функцию, которая будет выполнена для каждого элемента массива. Эта функция должна вернуть булевое значение, которое будет определять, останется ли элемент в новом массиве, который будет создан после фильтрации.

Таким образом, в данном случае мы хотим удалить элемент с определенным индексом, переданным через payload в объекте action. Мы используем _ для игнорирования первого аргумента (элемента массива), поскольку он нам не нужен в этом случае. А index мы используем для того, чтобы сравнить его с индексом, переданным через payload. Если они не совпадают, то элемент будет сохранен в новом массиве, а если совпадают, то элемент будет удален из него. */

  /* const initialState = {
    arrayForTodo
  };
*/
  const editInArray = (index, newValue) => {
    const newArray = [...arrayForTodo];
    newArray.splice(index, 1, newValue);
    setArrayForTodo(newArray);
  };
  const deletesFromArray = (index) => {
    const newArray = [...arrayForTodo];
    newArray.splice(index, 1);
    setArrayForTodo(newArray);
  }; /*БОЛЕЕ МНЕ ПОНЯТНЫЙ КОД БЕЗ РЕДЮСЕРА
  
  
  просто функция получающая на входе индекс и создающая новый массив идентичный arrayForTodo
  сплайс удаляет из нового массива элемент с заданным индексом, а 1 говорит сколько элементов надо удалить
  то есть только один элемент равный индексу
  после мы с помощью setArrayForTodo мы мередаем новый массив в качестве
  значения для arrayForTodo который используется для отрисовки мапом
  


  
  
  */

  /*    return {
          ...state,
          arrayForTodo: state.arrayForTodo.filter(
            (_, index) => index !== action.payload
          )
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { arrayForTodo });

  const deleteFromArray = (index) => {
    dispatch({ type: "DELETE", payload: index });
  };
*/

  /* function reducer(state, action) {
    switch (action.type) {
      case "DELETE" */ return (
    <div>
      {arrayForTodo.map((todos, index) => (
        <ul className="todo-list" key={index}>
          <li>
            <span>
              {todos}
              <p>Дата создания: {formattedDate}</p>
              <p>Выполнить до: {dateForTodo} </p>
            </span>
            <div>
              <button onClick={() => editInArray(index, inputForTodo)}>
                Edit
              </button>

              <button onClick={() => deletesFromArray(index)}>Delete</button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Todos;
