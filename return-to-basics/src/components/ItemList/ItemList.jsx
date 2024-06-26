import React from "react";
import { useEffect, useState } from "react";
import Item from "../Item/Item";

function ItemList(props){
//const[name, setName]=useState(null);
return(
    <div>
        <h1>ItemList</h1>
        {
            props.list.map(item=>(
                <Item item={item} getList={props.getList}/>
            ))
        }
    </div>
)
}

export default ItemList