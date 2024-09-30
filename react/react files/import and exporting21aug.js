
import ReactDom from 'react-dom/client'
import course,{place,age} from './data'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <>
   <h1>single value importing and exporting</h1> 
    <h1>{course}</h1>
    <h1>{place}</h1>
    <h1>{age}</h1>
    </>
);


another file create in data.js file
let course="java script"
let place="hyderbad"
let age=23
export default course
export {place,age}