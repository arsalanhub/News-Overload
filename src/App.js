import './App.css';

import React, { useState } from 'react'
import NavBar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 12;

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/india" element={<News setProgress={setProgress} key="india" pageSize={pageSize} category="india" />} />          
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/education" element={<News setProgress={setProgress} key="education" pageSize={pageSize} category="education" />} />
          <Route exact path="/political" element={<News setProgress={setProgress} key="political" pageSize={pageSize} category="political" />} />
          <Route exact path="/cities" element={<News setProgress={setProgress} key="cities" pageSize={pageSize} category="cities" />} />
          <Route exact path="/" element={<News setProgress={setProgress} key="education" pageSize={pageSize} category="education" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

