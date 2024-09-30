import { BrowserRouter, Routes,Route, Link } from "react-router-dom";
 import About from "./About";
 import Courses from "./Courses";
function App(){
 
 
 return(
  <>
 <h2>React Router DOM</h2>
 <BrowserRouter>
 {/* <a href="/">Home</a>
 <a href="/About">About us</a>
 <a href="/Courses">Courses</a> */}
 <Link to="/">Home</Link>
 <Link to="/About">About us</Link>
 <Link to="/Courses">Courses</Link>
 <Routes>
  <Route path="/" element={<h1>Main Root</h1>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/courses" element={<Courses/>}/>
 </Routes></BrowserRouter>
  </>
 )
}
export default App