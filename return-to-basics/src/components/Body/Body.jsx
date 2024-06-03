import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

function Body(props){
//const[name, setName]=useState(null);
return(
    <div>
        <h1>Body</h1>
        <h3>{JSON.stringify(props)}</h3>
        <ItemList list={props.list}/>
    </div>
)
}

export default Body