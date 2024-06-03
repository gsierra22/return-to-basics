import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Item(props){
//const[name, setName]=useState(null);
const completeTask = ()=> {
    axios.put(`/list/${props.item.id}`).then((response)=>{
        console.log('delete r', response);
        props.getList();
    }).catch((err)=>{
        alert('delete error');
        console.log(err)
    })
}

const deleteTask = () =>{
    axios.delete(`/list/${props.item.id}`).then((response)=>{
        console.log('delete r', response);
        props.getList();
    }).catch((err)=>{
        alert('delete error');
        console.log(err)
    })
}
return(
    <div>
        <h1>{props.item.tasks}</h1>
        {
            props.item.task_completed?
            <p>Completed</p>:
            <p><button onClick={completeTask}>Complete Task</button></p>
        }
        <button onClick={deleteTask}>Delete</button>
    </div>
)
}

export default Item