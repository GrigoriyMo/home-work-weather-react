import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Search from './components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    <Search/>
    </div>
  )
}

export default App
