import Button from "./Button";//내가 만들 Button.js에서 Button을 가져옴
import styles from "./App.module.css";
import {useState,useEffect} from "react";//useState,juseEffect import

//페이지를 들어왔을 때 로딩 메세지가 보이고, 코인들의 리스트가 완성되면 로딩 메세지를 숨기고 코인들을 멋진 리스트로 보여줌
function App(){
    const [loading,setLoading]=useState(true);
    const [coins,setCoins]=useState([]);

    useEffect(()=>{
        //fetch함수로 api 호출함. 이 링크는 코인 가격을 쫙 알려주는 api임
        //api를 호출하고 그에 대한 응답을 받은 것을 json으로 변환(.then((response)=>{ return (response.json());};)
        //!!!!!!!!!!!!1.then은 앞의 구문이 성공했을 때, 그 리턴값을 파라미터로 받은 후, 그걸 바탕으로 하는 동작임!!!!!!!!
        fetch("https://api.coinpaprika.com/v1/tickers").then((response)=>{  //우리는 이 json화 된 응답을 state에 넣어 화면에 나타나게 하면 됨!!
            return (response.json()); // 즉 api 호출에 성공하면 그 응답을 파라미터로 받은 후 json형태로 변환
        }).then((json)=>{
                setCoins(json); //coins state 바꾸기, 코인 배열 업데이트 후
                //console.log(coins);
                setLoading(false); //코인 배열 업뎃 후에! loading state 바꾸기!
        }); //그리고 json화에 성공하면 setCoins를 통해서 state를 그 json으로 업데이트(바꿔줌)
    },[]) //useEffect의 arg2가 빈 배열이므로 제일 처음에만 렌더링되고 그 이후로는 다시 렌더링 안 됨
    return(
        <div>
            <h1>The Coins!{loading?"":`(${coins.length})`}</h1>
            {loading?<strong>Loading...</strong>:null}
            <ul>
                {coins.map((coin,index)=> (
                        <li key={index}>
                            {coin.name}
                            ({coin.symbol}):{coin.quotes.USD.price}
                        </li>
                ))}
                </ul>
        </div>
    );
}

export default Coin_Tracker_App;
