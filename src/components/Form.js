import '../App.css';
import React, {useState} from 'react';

function StepsForm({addStep}) {
  const[date, setDate] = useState('');
  const[distance, setDistance] = useState('')

  const changeDate = (evt) => {
    setDate(evt.target.value);
  }
 
  const changeDistance = (evt) => {
   setDistance(evt.target.value);
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addStep(date, distance);
    setDate('');
    setDistance('');   
  }

  return (
    <form className="steps" onSubmit={handleSubmit} >
    <div className="date add">
    <div className="date_steps">Дата(ДД.ММ.ГГ)</div>
    <input type="date" className="date_input" value={date} onChange={changeDate}></input>
    </div>
    <div className="distance add">
    <div className="distance_steps">Пройдено км</div>
    <input type="number" value={distance} step="0.01" onChange={changeDistance} className="distance_input"></input>
    </div>
    <button className="add button_add">Добавить</button>
    </form>
  );
}

export default StepsForm;