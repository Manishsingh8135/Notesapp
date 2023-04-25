import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import NotesListPage from './pages/NotesListPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>+
      <Header/>
      <NotesListPage/>
    </>
  )
}

export default App
