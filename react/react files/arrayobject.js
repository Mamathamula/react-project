import reactDOM from 'react-dom/client';
const person={
    name:"mamatha",
    place:"hyderbad",
    age:22
}

const root=reactDOM.createRoot(document.getElementById('root'));
root.render(
<>
   <h1>{person.name}</h1>
</>
);