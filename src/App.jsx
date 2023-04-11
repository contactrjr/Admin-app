import { useState } from 'react'
import './App.css'
import Home from './router/Home'
import Login from './router/Login'
import SingleUser from './router/Singleuser'
import List from './router/List'
import NewUser from "./router/Newuser";
import { userInput } from '../src/components/Sourcedata';
import {
  BrowserRouter, Routes, Route 
} from "react-router-dom";

function App() {


  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
              <Route path='/'>
                <Route index element = {<Home/>}/>
                <Route path = 'login' element = {<Login/>} />
                  <Route path='users'> 
                    <Route index element = {<List />} />
                    <Route path=':userid' element = {<SingleUser/>} />
                    <Route path='newuser' element = {<NewUser inputs = {userInput} title = "Add a new user"/>} />
                  </Route>
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
