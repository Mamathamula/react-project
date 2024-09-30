
import ReactDOM from "react-dom/client"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import pic from'./f1.jpg'
import pic1 from'./flower.jpeg'
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
   <div className="container">
    <div className="row">
    <div className="col-md-6 bg-info">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>
          Lorem Ipsum has been the industry's standard dummy text ever since the .<br></br> 
          when an unknown printer took a galley of type and scrambled it to make a  .<br></br>
          specimen book. It has survived not only five centuries, but also the leap into .<br></br>
          electronic typesetting, remaining essentially unchanged.</p></div>
    <div className="col-md-6 bg-warning">
        <h3 className="text-light text-center">list items</h3>
        <ol>
            <li>html</li>
            <li>css</li>
            <li>java script</li>
            
        </ol>
    </div>
    </div>
    <div className="row mt-2">
    <div className="col-md-12 bg-danger border ">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into .
          electronic typesetting, remaining essentially unchanged.</p>
    </div>
    </div>
    <div className="row mt-2">
        <div className="col-md-4  border border-warning border-2  p-1">
            <img src={pic} alt="" className="img-fluid" width={500} /></div>
        <div className="col-md-4 bg-info  border border-warning border-2 p-1"> 
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          Lorem Ipsum has been the industry's standard dummy text ever since 
          electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <div className="col-md-4 border border-warning border-2 p-1">
            <img src={pic1} alt="" className="img-fluid" width={500} /></div>
    </div>
   </div>

</>
);