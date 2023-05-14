import './App.css';
import { useState } from 'react';
window.document.title = 'Tareas';

//Crea una aplicación de tareas donde se puedan agregar y eliminar tareas.

const Tarea = ({ titulo, onDelete }) => {
  return (
    <div>
      <h3>{titulo}</h3>
      <button onClick={onDelete}>Eliminar Tarea</button>
    </div>
  );
};

export default function ListaTarea(){

  const [tareas, setTareas] = useState([]);
  const [inputValue, setInputValue] = useState('');

  //Para agregar una tarea
  const AgregarTarea = () => {
    if (inputValue) {
      setTareas([...tareas, inputValue]);
      setInputValue('');
    }
  };
  //Para borrar una tarea
  const BorrarTarea = (index) => {
    const nuevaTarea = [...tareas];
    nuevaTarea.splice(index, 1);
    setTareas(nuevaTarea);
  };

  return (
    <div>
      <h2>Lista de tareas</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={AgregarTarea}>Agregar tarea</button>
      {tareas.map((tarea, index) => (
        <Tarea
          key={tarea}
          titulo={tarea}
          onDelete={() => BorrarTarea(index)}
        />
      ))}
    </div>
  );
}


