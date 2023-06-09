import { Link, Route, Routes } from "react-router-dom";
import InputSample from "./pages/InputSample/InputSample";
import UserList from "./pages/UserList/UserList";
import MainAside from "./components/Aside/MainAside/MainAside";
import Todo from "./pages/Todo/Todo";
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "awesome-react-icons/lib/cjs/Icon";
import { Global } from "@emotion/react";
import { reset } from "./styles/Global/reset";





function Test1(){
  return(<h1>test1</h1>)
}

function Test2(){
  return(<h1>test2</h1>)
}

function App() {
  return (
    <>
    <Global styles ={reset}/>
    <MainAside />
    <Routes>
      <Route path="/t1" Component={Test1}/>
      <Route path="/t2" Component={Test2}/>
      <Route path="/sample/input/1" Component={InputSample}/>
      <Route path="/users" Component={UserList}/>
      <Route path="/todo" Component={Todo}/>
      
    </Routes>
    </>
  );
}

export default App;
