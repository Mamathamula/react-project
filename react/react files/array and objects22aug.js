
import ReactDOM from "react-dom/client"
import person,{students,emp} from "./data"
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <h2>Data values -importing & exporting </h2>
  <h1>{person.name}</h1>
  <h1>{students[1]}</h1>
  <h1>{emp[0].fname}</h1>
   
</>
)
;


const person={
    name:"Thanu",
    place:"Hyderabad",
    age:23
}
const students=["Jahnavi","sunil","nagaveni","mallikarjuna"]
const emp=[
    {
        id:1,
        fname:"Janu",
        email:"janu@gmail.com"
    },
    {
        id:2,
        fname:"anu",
        email:"anu@gmail.com"
    },
    {
        id:3,
        fname:"tanu",
        email:"tanu@gmail.com"
    }
]
export default person
export {students,emp}
 
