import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//npm i react-router-dom@5.3.0를 해주고 해야 함
//Link는 브라우저 새로 고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트임
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      {" "}
      {/*react-app 측에서 미리 제공하는 컴포넌트임*/}
      <Switch>
        {" "}
        {/*Swtich는 라우트를 찾는 역할. route는 url에서 https://domain:portnumber/...에서 /...부분을 의미함 */}
        {/*라우트를 찾으면 컴포넌트를 렌더링함, React Router는 다이나믹(동적) url 을 지원해줌-다이나믹: url에 변수를 넣을 수 있다는 의미 */}
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          {" "}
          {/*근데 이 route가 path="/" 라우트 밑에 있으면 /movie해도 실행 안 됨. 루트 라우트 위에 있어야 함 */}
          {/*React Router는 다이나믹(동적) url 을 지원해줌-다이나믹: url에 변수를 넣을 수 있다는 의미 , 
        주의할 점: path="/movie/:id" 이렇게 나타내야 함. : 없이 그냥 path="/movie/id" 이렇게 해버리면 그냥 스트링 그대로 url을 쳐야 함*/}
          <Detail />
        </Route>
        <Route path="/">
          {" "}
          {/*루트 라우터가 젤 밑에 있어야 함!!!!!!!!- 텀프하다가 이거 몰라서 엄청 헤맴*/}
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
