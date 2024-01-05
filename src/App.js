import './App.css';
import {ExperienceComponent,AboutComponent, NavBar,HomeComponent, ProjectComponent, ContactComponent} from './components'
import {  Route, Routes } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
function App() {
  const socials = [{destinationLink:'https://github.com/ManojGadam',imageComponent:FaGithub},{destinationLink:"https://www.linkedin.com/in/gadamchetty-manoj-b7420617a/",imageComponent:LuLinkedin}]
  return (
    <>
      <NavBar />  
      <div className='bodyWrapper'>
      <Routes>
        <Route path='/' element={<HomeComponent socials={socials} />} />
        <Route path='/about' element={<AboutComponent />} />
        <Route path='/experience' element={<ExperienceComponent />} />
        <Route path='/projects' element={<ProjectComponent />} />
        <Route path='/contact' element={<ContactComponent />} />
      </Routes>
      </div>
      </>
  )
}

export default App;
