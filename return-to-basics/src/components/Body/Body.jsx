import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Input from "../Input/Input";

function Body(props){
//const[name, setName]=useState(null);
return(
    <div>
        <h1>To Do List</h1>
        <Input getList={props.getList}/>
        <ItemList list={props.list} getList={props.getList}/>
    </div>
)
}

export default Body