import React from 'react'
import {Home ,Addtask ,Importanttask , CompleteTask, InCompleteTask} from './AllComponenets'
import { BrowserRouter,Routes,Route} from 'react-router-dom'


export default function App() {
  return (
    <div  >
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/addtask'  element={<Addtask/>} />
        <Route path='/'  element={<Importanttask/>} />
        <Route path='/'  element={<CompleteTask/>} />
        <Route path='/'  element={<InCompleteTask/>} />
      

      </Routes>

      
      </BrowserRouter>
      

    </div>
  )
}
