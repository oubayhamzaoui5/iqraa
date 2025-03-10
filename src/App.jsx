import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import VideoPage from './components/VideoPage/VideoPage';
import Courses from './components/Couses/Couses';
import Navbar from './components/Navbar/Navbar';
import SignUpPage from './components/SignUpPage/SignUpPage';
import Home from "./components/Home/Home"
import "./App.css"

function App() {
  return (
    <>
    <Router>
      <div>
      <Navbar />
      <div className='content'>


        <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/SignUp" element={<SignUpPage />} />

          <Route path="/video" element={<VideoPage />} />
          <Route path="/courses" element={<Courses />} />

        </Routes>
      </div>
      </div>

    </Router>
    </>
  );
}

export default App;
