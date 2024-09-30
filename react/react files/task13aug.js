import reactDOM from 'react-dom/client';
let uid=prompt("enter used id")
let pwd=prompt("enter password")
let result;
if(uid==="mouritech"&& pwd==="mamatha"){
    result="authorised"
}else{
    result="unauthorised"
}
const root=reactDOM.createRoot(document.getElementById('root'));
root.render(
<>
   <h1>{result}</h1>
</>
);