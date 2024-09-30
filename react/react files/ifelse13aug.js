import reactDOM from 'react-dom/client';
let marks=prompt("enter the marks")
let result;
if(marks<=35){
    result="failed"
}else{
    result="passed"
}
const root=reactDOM.createRoot(document.getElementById('root'));
root.render(
<>
   <h1>{result}</h1>
</>
);