
import ReactDOM from 'react-dom/client'
var obj=new Date()
var h=obj.getHours()
let result;
let a;
let b;
if(h<12)
{
  result="good morning"
}else if(h>=12 && h<=17){
   a="good afternoon"
}else{
   b="good evening"
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1 style={{color:"green"}}>{result}</h1>
    <h1 style={{color:"orange"}}>{a}</h1>
    <h1 style={{color:"red"}}>{b}</h1>
  </>
);
 
