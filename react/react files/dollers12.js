import reactDOM from 'react-dom/client';
let doller=prompt("enter doller amount")

let result=doller*83.48

const root=reactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <table align='center' border='1px'>
        <tr>
        <td>doller</td>
        <td>indian amount</td>
       
        </tr>
        <tr>
       
        <td>{doller}</td>
        <td>{result}</td>
        </tr>
    </table>
</>
);