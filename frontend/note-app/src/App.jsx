import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import NotesListPage from './pages/NotesListPage'



import { Route, Routes } from "react-router-dom"
import NotePage from './pages/NotePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container dark">
      <div className="app">
      <Header/>
        <Routes>  
          <Route path='/' exact Component={NotesListPage}/>
          <Route path='/note/:id'  Component={NotePage}/>
        </Routes>
      </div>
      
    </div>

    
  )
}

export default App
