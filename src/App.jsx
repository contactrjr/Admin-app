import { useContext, useState } from 'react'
import './App.css'
import Home from './router/Home'
import Login from './router/Login'
import SingleUser from './router/Singleuser'
import List from './router/List'
import NewUser from "./router/Newuser";
import { userInput } from '../src/components/Sourcedata';
import {
  BrowserRouter, Routes, Route, Navigate 
} from "react-router-dom";
import { AuthContext } from './context/Authcontext';


function App() {

//const activeUser = true;

const {activeUser} = useContext(AuthContext);

console.log("activeuser", activeUser);

const CheckUser = ({children}) =>{
  return activeUser? children : <Navigate to="/login" />
}

  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
              <Route path='/'>
                <Route index element = {<CheckUser><Home/></CheckUser>}/>
                <Route path = 'login' element = {<Login/>} />
                  <Route path='users'> 
                    <Route index element = {<CheckUser><List /></CheckUser>} />
                    <Route path=':userid' element = {<CheckUser><SingleUser/></CheckUser>} />
                    <Route path='newuser' element = {<CheckUser><NewUser inputs = {userInput} title = "Add a new user"/></CheckUser>} />
                  </Route>
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
