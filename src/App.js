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
          <Route exact path="/india" element={<News setProgress={setProgress} key="india" pageSize={pageSize} category="India" />} />          
        </Routes>
      </Router>
    </div>
  )
}

export default App

