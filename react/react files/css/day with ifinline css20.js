
import ReactDom from 'react-dom/client'
let obj=new Date()
let hours=obj.getHours()
let result
let clr={}
if(hours<12){
     result="good morning"
     clr.color="oranged"
}
 else if(hours>=12 && hours<=15){
    result="good aftnoon"
     clr.color="green"
}else {
    result="good evening"
     clr.color="red"
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <>
     <h1 style={clr}>{result}</h1>
    </>
);