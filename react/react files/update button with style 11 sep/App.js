//import Data from './Data.json';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './style.css'; 
import { useState } from 'react';

const App = () => {
  const students = {
    f_name: 'Ajay',
    l_name: 'Kumar',
    place: 'Pulivendula',
    color: 'red'
  };

  const [state, setState] = useState(students);

  const demo = () => {
    setState({
      f_name: "Vijay",
      l_name: 'Rao',
      place: 'Delhi',
      color: 'blue' // Change color when the button is clicked
    });
  };

  return (
    <>
      <h2 style={{ color: state.color }}>
        Hello {state.f_name} {state.l_name}, place is {state.place}
      </h2>
      <button className="btn btn-primary" onClick={demo}>
        Update
      </button>
    </>
  );
};

export default App;
