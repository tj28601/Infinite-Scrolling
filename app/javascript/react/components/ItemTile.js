import React from 'react';

const ItemTile = props => {


  return(
    <div>
      <li key={props.id}>{props.title} | {props.published}</li>
    </div>
  )
}   

export default ItemTile;
