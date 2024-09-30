import reactDOM from 'react-dom/client';
const students=['mamatha','anil','hanvika','pavan']

const root=reactDOM.createRoot(document.getElementById('root'));
root.render(
<>
   {students}<br/>
   <ol>
    <li> {students[0]}</li>
    <li> {students[1]}</li>
    <li> {students[2]}</li>
   </ol>
</>
);