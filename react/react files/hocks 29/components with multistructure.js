import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
     <App/>
    </>
       
);

app.js
-------------------------------------------
import Compo1 from './Compo1'

const App=()=>{
    return(
   
    
<>
<Compo1/>
</>
    )
}

export default App


compo1.js
------------------------------------
import Compo2 from './Compo2'
const Compo1=()=>{
    return(
    <>
    
<Compo2/>
    </>
    


    )
}

export default Compo1




compo2.js
-----------------------
const Compo2 =()=>{
    return(
        <>
       <div className="Middle">
         <h1>middle</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        
       </div>
       </>
    )
}
export default Compo2