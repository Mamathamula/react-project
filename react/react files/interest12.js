import reactDOM from 'react-dom/client';
var principle =prompt("enter principle amout")
var rate =prompt("enter rate")
const root=reactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <table align='center' border='1px'>
        <tr>
        <td>principle amount</td>
        <td>rate of interest</td>
        <td>intrrest amount</td>
        </tr>
        <tr>
        <td>{principle}</td>
        <td>{rate}</td>
        <td>{principle*rate/100}</td>
        </tr>
    </table>
</>
);