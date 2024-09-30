
import ReactDom from 'react-dom/client'
import pic from'./flower.jpeg'
const pic1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOboyQHPiWCjoPGfAdK6w4Q8IRUEUX2MYPLxATwVWnm3cuuxEslEyulSjLJjEb5EDuptA&usqp=CAU"
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <>
     <h1>images</h1>
     <img src={pic} alt="" width={200} height={200}/>
     <br/>
     <img src={pic1} alt="" width={200} height={200}/>
     <br/>
     <img src="logo192.png" alt=""/>
    </>
);