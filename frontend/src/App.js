import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home  from './pages/Home';
import Header from './components/Header'
import About from './pages/About';
import Messages from './pages/Messages';
import NewMessage from './pages/NewMessage';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <Header/>
      <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/new' element={<NewMessage/>}/>
       </Routes>
      </div>
      <Footer/>
    </Router>
    <ToastContainer/>
     
    </>
  );
}

export default App;
