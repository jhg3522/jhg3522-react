import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import {TimelinePage} from "./page/TimelinePage";
import Informations from "./components/Info";
import './index.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";
import {Login} from "./page/Login";
import {SignUp} from "./page/Signup";
import {DetailPage} from "./page/DetailPage";


function App(){
  return(
    <div>
        <Header/>
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/Information/"><Informations/></Route>
            <Route path="/TimelinePage/"><TimelinePage/></Route>
            <Route path="/DetailPage/:id"><DetailPage/></Route>
            <Route path="/login/"><Login/></Route>
            <Route path="/signup/"><SignUp/></Route>
            <Route path="/">Not found</Route>
        </Switch>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
