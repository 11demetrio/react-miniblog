import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProviderFac } from './context/AuthContextFaculdade';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import CreatePost from './pages/CreatePost/CreatePost.js';
import LogComponent from './pages/Log/LogComponent.js';

const firebaseConfig = {
  apiKey: "AIzaSyDDuK_NbSyOC6n9-dV-uXlNxnHxXLiUN-0",
  authDomain: "blogandre-e8f14.firebaseapp.com",
  projectId: "blogandre-e8f14",
  storageBucket: "blogandre-e8f14.appspot.com",
  messagingSenderId: "228801341291",
  appId: "1:228801341291:web:ab4db21ad136e259de0e2e",
  measurementId: "G-29Y69JSL3L"
};

function App() {
  return (
    <div className="App">
      <h1> Miniblog React </h1>
      <AuthProviderFac>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/post/create' element={<CreatePost />} />
            </Routes>
          </div>
          <Footer />
          <LogComponent />
        </BrowserRouter>
      </AuthProviderFac>
    </div>
  );
}

export default App;
