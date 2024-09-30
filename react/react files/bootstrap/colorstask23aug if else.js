
import ReactDOM from "react-dom/client"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
var data=prompt("enter your colors")
var c=['bg-danger','bg-sucess','bg-info'];
var result
if(data==="red"){
    result=c[0]
}else if(data==="green"){
    result=c[1]
}else if(data==="yellow"){
    result=c[2]
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
  
       <h1 className={result}>bootstrap</h1>
       
      
    

</>
);