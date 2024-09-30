import ReactDOM from "react-dom/client"
import Demo from'./Demo'
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
   <Demo/>
</>
);
      
     another js file in demo.js 

function Demo(){
    return(
<>
        <h1>hello</h1>
<p>paragraph</p>
</>
    )
}
export default Demo