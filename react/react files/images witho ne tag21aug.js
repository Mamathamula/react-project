
import ReactDom from 'react-dom/client'
import pic from './a2.jpg'
import pic1 from'./wrong.png'
let uid=prompt("enter user id")
let pwd=prompt("enter password")
let result
if(uid==="react" && pwd==="mouritech"){
result=pic
}else{
     result=pic1
}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <>
     <img src={result} alt='' width={200}/>
    
    </>
);