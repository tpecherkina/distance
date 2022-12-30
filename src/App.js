import React, {useState} from 'react';
import './App.css';
import ListSteps from './components/Steps';
import StepsForm from './components/Form'

 function App() {
  let[items, setItems] = useState([]);

  //let updatedArr = items.sort(function(a, b) {
  //  return new Date(b.date) - new Date(a.date);  
   // })
   
  let newItem;
  const addStep = (date, distance) => {
  const findElem = items.findIndex(itm => itm.dateItem === date);
  if(date && findElem >= 0) {
    let newItems = [...items];
    newItems[findElem].distanceItem = Number(distance) + Number(newItems[findElem].distanceItem); 
    setItems(newItems)
  }
  else if(date && findElem < 0) {
    newItem = {
       itemId: date,
       dateItem: date,
       distanceItem: distance
    }
     let updatedItems = [...items, newItem];
     let sortedItems = updatedItems.sort(function(a, b) {
      return new Date(b.dateItem) - new Date(a.dateItem);  
      }
      )
    
    setItems(sortedItems)
  }
  }


  const removeItem = (itemId) => {
     setItems([...items.filter((elem) => elem.itemId !== itemId)]);
  }


  return (
    <main>
   <StepsForm addStep={addStep}/>
   <ul className="list">
   {items.map(item => {
    return(
   <ListSteps key = {item.itemId} item={item} removeItem={removeItem}>
   </ListSteps>
  )
  })
  }
  </ul>
   </main>
  );
}
export default App