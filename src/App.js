import React,{useState, useRef, useCallback} from 'react';
import TodoTemplate from './component/TodoTemplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function createBulkTodos(){
  const array = [];
  for(let i = 0; i <= 2500; i++){
    array.push({
      id: i,
      text: `todo ${i}`,
      checked: false
    })
    return array;
  }
}
const App = () =>{
  const [todos, setTodos] = useState([
    {id:1, text: '탕화쿵푸 마라탕 먹기', checked:false},
    {id:2, text: '고바삭 순살 먹기', checked:false},
    {id:3, text: '고수 추가한 쌀국수먹기', checked:false},
    {id:4, text: '아아 벤티사이즈 들이키기', checked:true}
  ]);

  const nextId = useRef(4); //ref 사용해서 변수 담기 
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; 
    },
    [todos]
  )
  
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]
  )

    //왜 값 하나만 바꾸는데 map을 사용하였는가? 
    //*삼항연산자와 함께 작성. 배열에서 변화가 필요한 원소만 업데이트, 나머지는 그대로 
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id? {...todo, checked: !todo.checked} : todo), [todos]
      )

    }
  )

  return <TodoTemplate>
    <TodoInsert onInsert={onInsert}/>
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  </TodoTemplate>;
};

export default App;
