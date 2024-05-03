import './App.css';
import Home from './home';
import Navbar from './navbar';
import Footer from './footer';
import QuemSomos from './quemsomos';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function  App() { 
 return ( 
 <div className="App"> 
 <Navbar /> 
 <BrowserRouter> 
 <Routes> 
 <Route path='/' element={<Home />} /> 
 <Route path='/quem' element={<QuemSomos />} /> 
 </Routes> 
 </BrowserRouter> 
 <Footer /> 
 </div> );} 
 
export default App; 