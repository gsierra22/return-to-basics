import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


function Input(props){
//const[name, setName]=useState(null);
const[newTask, setNewTask]=useState({
    tasks:''
});

const updateNewTask=(event)=>{
   setNewTask({...newTask, tasks: event.target.value});
}

const addTask = ()=>{
    axios.post('/list', newTask).then((response)=>{
        console.log('post:', response.data);
        props.getList()
    }).catch((err)=>{
        console.log(err)
        alert('Post error')
    })
}
return(
    <div>
        <h1>Create New Task</h1>
        <input type="text" placeholder="name" onChange={(event)=>updateNewTask(event)}></input>
        <button onClick={addTask}>Add task</button>
    </div>
)
}

export default Input