import Button from "./Button";//내가 만들 Button.js에서 Button을 가져옴
import styles from "./App.module.css";
import {useState,useEffect} from "react";//useState,juseEffect import


function Hello(){
  useEffect(()=>{//처음에 컴포넌트가 만들어질 때 호출됨
    console.log("I'm created");
    //clean up function: component가 destroy 될 때 뭔가 해줄 수 있게 해줌
    return ()=>console.log("I'm destroyed");// destroy될 떄 불러올 내용
    //useEffect는 해당 컴포넌트가 destory 될 때 return 값을 리턴한다.
  },[])
  return(
    <div>
      <h1>Hello</h1>
    </div>
  );
}

function App() {
  //create react app을 사용하기 때문에 React.useState라고 적어줄 필요 없음 , 그냥 useState라고 해주면 됨
  const [counter,setValue]=useState(0);
  const[keyword,setKeyword]=useState("");
  const[showing, setShowing]=useState(false);

  const onClick=()=>setValue((prev)=>prev+1);
  const onClick2=()=>setShowing((prev)=>!prev);
  console.log("I run all the time");
  useEffect(()=>{
    console.log("call the API");
  },[]);

  const onChange=(event)=>{//입력이 발생하면 event로 그 입력값을 받아온다!!!]
    //그리고 입력값을 keyword 변수에 저장함
    setKeyword(event.target.value)
  }

  const iRunOnlyOnce=()=>{
    console.log("I run only once");
  }
  useEffect(iRunOnlyOnce,[]);//useEffect는 첫 번째 인자가 제일 처음에만,최초의 렌더링일 때만 렌더링되고 이후로는 더이상 렌더링되지 않도록 한다

  //이렇게 useEffect의 두 번째 인자에 []안에 state(변수)를 넣으면 그 state에 변화가 있을 때만 useState의 첫 번째 인자가 렌더링됨
  //즉 특정한 state가 업데이트 될 때만 어떤 코드를 실행하고 싶을 때
  useEffect(()=>{
    if(keyword!==""&&keyword.length>5){
      console.log("I run when 'keyword' changes");
    }
  },[keyword]);

  useEffect(()=>{
    console.log("I run when 'counter' changes");
  },[counter]);

  //두 조건(시점)을 합칠 수도 있음, 조건을 여러 개 둘 수도 있음
  useEffect(()=>{
    console.log("I run when 'counter'&'counter' changes");
  },[keyword,counter]);

  return (
    <div>
      <h1 className={styles.title}>WELCOME BACK!!!</h1>
      <input  value={keyword} onChange={onChange} type="text" placeholder="Search here"/>
       {/*!!onChange는 그냥 props 이름 {}안에 들어간 onChange가 (콜백)함수이름 */}
       {/*value는 입력창에 보여지게 함. 즉 value 덕분에 화면의 입력창과 state 및 입력값이 연결되는 것임 */}
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      {showing?<Hello/>:null}
      <button onClick={onClick2}>{showing?"Hide":"Show"}</button>
    </div>
  );
}

export default App;
