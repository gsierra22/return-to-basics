import React from "react";
import { useEffect, useState } from "react";
import Item from "../Item/Item";

function ItemList(props){
//const[name, setName]=useState(null);
return(
    <div>
        <h1>ItemList</h1>
        <h3>{JSON.stringify(props)}</h3>
        <Item/>
    </div>
)
}

export default ItemList