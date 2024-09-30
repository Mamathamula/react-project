import Compo1 from "./Compo1"
import Compo2 from "./Compo2"
const App =()=>{
    let name1="prabhas"
    let name2="Mahesh"
     let pic1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHw3K2kWLEl_kEDJ3tY-ElYj-NXqnmVqEo7Q&s"
     let pic2="https://static.toiimg.com/thumb/imgsize-23456,msid-110533878,width-600,resizemode-4/110533878.jpg"
   return(
      
       <>
      
      <h1>React</h1>
       <Compo1 name={name1} pic={pic1}/>
       <Compo2 name={name2} pic={pic2}/>
      </>
   )
}
  
export default App
   


   
