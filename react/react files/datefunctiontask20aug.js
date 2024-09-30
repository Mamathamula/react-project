
import ReactDom from 'react-dom/client'
let obj=new Date()
let hours=obj.getHours()
let result
if(hours<12){
     result="good morning"
}
 else if(hours>=12 && hours<=15){
    result="good aftnoon"
}else {
    result="good evening"
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <>
     <h1>{result}</h1>
    </>
);