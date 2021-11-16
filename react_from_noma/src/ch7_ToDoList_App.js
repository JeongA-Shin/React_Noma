import Button from "./Button";//내가 만들 Button.js에서 Button을 가져옴
import styles from "./App.module.css";
import {useState,useEffect} from "react";//useState,juseEffect import


function App() {
    const[toDo,setToDo]=useState("");
    const [toDos,setToDos]=useState([]); //array 변수 선언하듯이 array도 state로 가능
    //다시 한 번 말하지만 c++ 같은 코드에서 int num=0; int arr=[] 이런 식으로 선언하는 과정을 리액트에서는 useState(초깃값);으로 해준느 거임

    const onChange=(event)=>{
        setToDo(event.target.value);//toDo state를 입력값으로 업데이트
    }

    const onSubmit=(event)=>{
      event.preventDefault();
      if(toDo==""){
        return;
      }
      //헷갈리지 말자. setToDos는 toDo's'에 대한 modifier이고
      setToDos((currentArray)=>{//기존의 state를 바탕으로 state를 새로 업데이트 함//현재까지의 투두 배열에 새로운 state값을 추가함
        return( [toDo, ...currentArray]);//즉 이러면 새로운 state값에 기존의ㅣ 배열이 추가되어 toDos라는 배열 state안에 담기는 거임
      })
      //setToDo는 그냥 toDo에 대한 modifier임
      //toDos=""; //이런 식으로 state 직접 수정은 절대로 불가능!!! 반드시 modifier 함수를 통해서 가능하다!!
      setToDo("");//제출되면 toDo를 비움. 즉 입력칸이 비워지도록 한다///그냥 state값 업데이트
    
    }

  return (
    <div>
      <h1>My To Dos... {toDos.length}</h1>
        {/* input태그에는 입력 이벤트가 발생하듯이, form 태그에는 submit 이벤트가 발생함- 따라서 이에 따른 이벤트 리스너(콜백함수)가 필요함 */}
        <form onSubmit={onSubmit} >
          {/* 입력 태그의 VALUE는 화면에 뭘 보여줄지 결정하는 속성. 즉 toDo의 내용을 입력칸(화면)에 보여줌 */}
            <input value={toDo} onChange={onChange} type="text" placeholder="write your to do list..."/>
            <button>Add To Do</button> {/* 이렇게 form 태그로 묶여있으면 button, input란을 모두 태그 하나가 동작해도 동작할 수 있도록 한다. 
            즉 button에 따로 속성을 주지 않아도 버튼을 누르면 form의 onSubmit가 동작한다*/ }
        </form>
        <hr /> 
          <ul>
            {toDos.map((item, index) => {
              return(<li key={index}>{item}</li>);
              //같은 component의 list를 render할 때, key라는 props를 넣어줘야 함. 그래야 list의 각 요소들을 구분함
            })}
          </ul>
        {/* hr태그는 수평선을 그리는 태그 */}
        {/*JSX에서 JS 쓰려면 중괄호 반드시 필요 */}
    </div>
  );
}

export default To_Do_list_App;
