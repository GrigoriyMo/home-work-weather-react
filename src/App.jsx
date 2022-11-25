import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Searchlist from './components/Searchlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    <Searchlist/>
    </div>
  )
}

export default App
