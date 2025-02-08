import './App.css'
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import AboutMe from "./Components/AboutMe"
import Skills from './Components/Skills'
import LeftSide from './Components/LeftSide'
import RightSide from './Components/RightSide'
import Contact from './Components/Contact'
import Project from './Components/Project'
import { Route, Routes } from 'react-router-dom'
import  { useEffect } from 'react';

function App() {
 
  useEffect(() => {
    window.scrollTo(0, 0); 
    console.log("Page reloaded, UI reset.");
  }, []);  

  const handleRefresh = () => {
    window.location.reload(); 
    
  };


  return (
    <>
    <header>
        <button onClick={handleRefresh}>Refresh Page</button> 
     <div>
      <NavBar/>
      <Routes>
<Route path='/home' element={<Home/>}/>
<Route path='aboutMe' element={<AboutMe/>}/>
<Route path='skills' element={<Skills/>}/>
<Route path='projects' element={<Project/>}/>
<Route path='contact' element={<Contact/>}/>

      </Routes>
      


      <Home/>
      <LeftSide/>    
      <AboutMe/>
      <RightSide/>  
     <Skills/>
     <Project/>
     <Contact/>
     <Routes>
 

</Routes>
     </div>
      </header>
     
    </>
  )
}

export default App;
