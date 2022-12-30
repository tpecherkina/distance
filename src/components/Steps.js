import '../App.css';
import React from 'react';

function Steps({item, removeItem}) {
  return (
    <li className="list_item" >
    <div className="item_date">{item.dateItem}</div>
    <div className="item_distance">{item.distanceItem}</div>
    <button className="item_delete" onClick={()=> removeItem(item.itemId)}>x</button>
    </li>
  );
}

export default Steps;