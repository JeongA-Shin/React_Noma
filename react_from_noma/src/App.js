import Button from "./Button";//내가 만들 Button.js에서 Button을 가져옴
import styles from "./App.module.css";
import {useState,useEffect} from "react";//useState,juseEffect import

function App() {
  //create react app을 사용하기 때문에 React.useState라고 적어줄 필요 없음 , 그냥 useState라고 해주면 됨
  const [counter,setValue]=useState(0);
  const[keyword,setKeyword]=useState("");

  const onClick=()=>setValue((prev)=>prev+1);
  console.log("I run all the time");
  useEffect(()=>{
    console.log("call the API");
  },[]);

  const iRunOnlyOnce=()=>{
    console.log("I run only once");
  }
  useEffect(iRunOnlyOnce,[]);//useEffect는 첫 번째 인자가 제일 처음에만,최초의 렌더링일 때만 렌더링되고 이후로는 더이상 렌더링되지 않도록 한다
  
  const onChange=(event)=>{//입력이 발생하면 event로 그 입력값을 받아온다!!!]
    //그리고 입력값을 keyword 변수에 저장함
    setKeyword(event.target.value)
  }
  return (
    <div>
      <h1 className={styles.title}>WELCOME BACK!!!</h1>
      <input  value={keyword} onChange={onChange} type="text" placeholder="Search here"/>
       {/*!!onChange는 그냥 props 이름 {}안에 들어간 onChange가 (콜백)함수이름 */}
       {/*value는 입력창에 보여지게 하는 속성 */}
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
