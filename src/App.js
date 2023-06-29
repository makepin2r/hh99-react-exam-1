import { useState } from "react";
import './App.css';

function App() {
  const [todo, setTodo] = useState(""); // 인풋에 입력받는 데이터
  const [todos, setTodos] = useState([ "react를 배워봅시다."]); // 투두 리스트 데이터 

    // 인풋 입력값 저장하는 기능
  const handleInputTodo = (e) => setTodo(e.target.value); 

  // 입력값 투두 리스트에 추가하는 기능
  const handleClickAddBtn = () => {
    if (todo === "") {
      alert("할일을 입력해주세요.");
    } else {
      setTodos([...todos, todo]); // 투두 리스트에 추가
      setTodo(""); // 입력폼 초기화
    }
  }

  return (
    <div className="wrap">
      <div className="input-box">
        <input 
          type="text" 
          placeholder="할일을 입력해주세요" 
          value={todo} 
          onChange={handleInputTodo}/>
        <button onClick={handleClickAddBtn}>추가하기</button>
      </div>
      <h1>Todo List</h1>
      <div className="todo-list">
        {todos.map((todo, i) => <div key={i} className="todo-item">{todo}</div>)} {/* 투두 리스트 내용 출력 */}
      </div>
    </div>
  );
}

export default App;
