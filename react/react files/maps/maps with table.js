import { useState } from "react";

const App = () => {
    const arr = ['a', 'b', 'c', 'd'];

    return (
        <>
            <h1>React App</h1>
            <table border="1" width="200px">
                <tbody>
                    {arr.map((x) => (
                        <tr>
                            <td>{x}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default App;
