import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <App/>
       
    </div>
);


another file name is app.js
----------------------------------------
import Top from './components/Top'
import Middle from './components/Middle'
import Footer from './components/Footer'
const App=()=>{
    return(
    <div>
    <Top/>
    <Middle/>
    <Footer/>
</div>
    )
}

export default App
   

adding 3 components create
--------------------------------------

const Top=()=>{
    return(
        
        <div className="top">
           
        <h1>header</h1>
       
        </div>
    )
}
export default Top


const Middle=()=>{
    return(
       <div className="Middle">
         <h1>middle</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        
       </div>
    )
}
export default Middle


const Footer=()=>{
    return(
        <div className="footer">
           
        <h1>copyright@123</h1>
       
        </div>
    )
}
export default Footer


.top{
    width:100%;
    color: antiquewhite;
    background-color: red;
}
h1{
    text-align: center;
   
}
p{
    background-color: aqua;
}
.middle{
    background-color: orange;
}
.footer{
    background-color: black;
    text-align: center;
    color: aliceblue;
}