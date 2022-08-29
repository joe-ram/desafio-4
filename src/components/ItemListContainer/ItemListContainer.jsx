import React from "react"
import Counter from "../Counter/Counter";
import './ItemListContainer.css';

export const ItemListContainer = () => {   
   
   function onAdd(count){
      console.log(`Se han seleccionado ${count} productos`)
   }
   return (
      <div>    
         <Counter stock={ 5 } onAdd={onAdd} />
      </div>
   )
}

