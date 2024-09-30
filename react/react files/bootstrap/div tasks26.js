import ReactDOM from 'react-dom/client';
import Demo from './Demo'
import Login from './Demo1'
import Footer from './Demo2'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Demo/>
        <Login/>
        <Footer/>
    </div>
);
another file


function Demo() {
    return (
        <>
        <div className="header">
            <h1>react</h1>
            <p> welcome to react world
            + Operator: Concatenates strings directly but doesn’t handle spaces well when one of the strings is empty or undefined.
            Template Literals and .trim(): More robust way to combine strings with proper spacing and cleanup of unnecessary spaces.
            </p>
            </div>
        </>
    )
}
 
export default Demo
    
another file
function Login() {
    return (
        <>
           <form className="rounded mx-auto d-block">
                <div class="mb-3">
                    {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="user id"/>
                        
                </div>
                <div class="mb-3">
                    {/* <label for="exampleInputPassword1" class="form-label">Password</label> */}
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password"/>
                </div>
                <button type="submit" class="btn btn-primary mb-3">Submit</button>
            </form>
        </>
    );
}
export default Login

another file


function Footer(){
    return(
        <>
       <div>
            <h1 className="text-center bg-black text-warning  mb-3">footer</h1>
            </div>
        </>
    );
}
export default Footer


css file

h1{
    text-align: center;
    color:red;
}
.form-control{
    width:300px;
    text-align: center;
 margin-left: 500px;
  
}

.header{
    background-color: blue;
}
form{
    background-color: aqua;
    text-align: center;
}




