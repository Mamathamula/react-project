import { BrowserRouter, Routes,Route } from "react-router-dom";
 
function App(){
 
 
 return(
  <>
 <h2>React Router DOM</h2>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<h1>Main Root</h1>}/>
  <Route path="/about" element={<h2>About Us Page</h2>}/>
  <Route path="/courses" element={<h4>Courses</h4>}/>
 </Routes></BrowserRouter>
  </>
 )
}
export default App