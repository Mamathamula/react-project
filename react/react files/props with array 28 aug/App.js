import Comp1 from "./Comp1"
 import Comp2 from "./Comp2"
const App =()=>{
    // Array
    const students=["Janu","Thanu","Anu"]
    // object
    const person={
        name:"Virat",
        place:"Hyderabad",
        pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/220px-Virat_Kohli_in_PMO_New_Delhi.jpg"
    }
    return(
       
        <>
       
       <h1>React</h1>
        <Comp1 students={students}/>
        <Comp2 person={person}/>
       </>
    )
}
   
export default App
   


   
