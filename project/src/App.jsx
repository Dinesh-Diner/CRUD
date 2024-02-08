import React from 'react'
import Home from './components/Home'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Createusers from './components/Createusers'
import Users from './components/Users'
import Editpage from './components/Editpage'


const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Home/>
                <Routes>
                    <Route element={<Createusers/>} path='/'/>
                    <Route element={<Users/>} path='/users'/>
                    <Route element={<Editpage/>} path='/edit/:id'/>
                </Routes>
        
        </BrowserRouter>
    </div>
  )
}

export default App