import Button from "./Button";//내가 만들 Button.js에서 Button을 가져옴
import styles from "./App.module.css";
import {useState} from "react";//useState import

function App() {
  //create react app을 사용하기 때문에 React.useState라고 적어줄 필요 없음 , 그냥 useState라고 해주면 됨
  const [counter,setValue]=useState(0);
  const onClick=()=>setValue((prev)=>prev+1);
  return (
    <div>
      <h1 className={styles.title}>WELCOME BACK!!!</h1>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
