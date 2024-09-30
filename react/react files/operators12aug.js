import ReactDOM from "react-dom/client"
var course="operators"
var num1=2
var num2=2
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   <h2>welcome to {course}</h2>
     <h3>number1 is {num1} number2 is{num2}</h3> 
     <h4>total of {num1} and {num2} is {num1+num2}</h4>
    </>
);