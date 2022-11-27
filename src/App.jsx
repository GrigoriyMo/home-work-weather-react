import { useState } from 'react'
import logo from './assets/icon.png'
import './App.css'
import Searchlist from './components/Searchlist'  //Компонент содержит компонент формы поиска (и фильтра) и список городов
import CityWeatherPage from './components/CityWeatherPage' //компонент с погодой выбранного города

import { Routes, Route, Outlet, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a >
          <Link to={'/'} >
            <img src={logo} className="logo react" alt="React logo" />
          </Link>
        </a>
      </div>
      <Routes>
        <Route path="/" element={<Searchlist />} />
        <Route path="/weather/:city" element={<CityWeatherPage />} />
      </Routes>

    </div>
  )
}

export default App
