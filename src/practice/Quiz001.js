import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {  
  //const / let [변수명, set함수명] = useState(초기값);
  let [count, setCount] = useState(0);

  return (
    <div className="App">

      <button onClick={() => {
        setCount(count + 2);
      }}>짝수 출력</button><span> {count}</span>
      
    </div>
  );
}

export default App;
