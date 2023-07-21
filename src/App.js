import React,{useReducer, useRef, useCallback} from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function createBulkTodos(){
  const array = [];
  for(let i = 1; i <= 2500; i++){
    array.push({
      id: i,
      text: `todo ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT': //새로 추가 
      return todos.concat(action.todo);

    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);

    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked }: todo);
    default:
      return todos;
  }
}

const App = () =>{
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501); //ref 사용해서 변수 담기 
  
  const onInsert = useCallback(text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch({type: 'INSERT', todo});
      nextId.current += 1; 
    },[]
  )
  
  const onRemove = useCallback(id => { 
      dispatch({type: 'REMOVE', id});
    }, []
  )

    //왜 값 하나만 바꾸는데 map을 사용하였는가? 
    //*삼항연산자와 함께 작성. 배열에서 변화가 필요한 원소만 업데이트, 나머지는 그대로 
  const onToggle = useCallback(id => {
    dispatch({type: 'TOGGLE', id});
    }, []
  )

  return <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  </TodoTemplate>;
};

export default App;
