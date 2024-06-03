import React from "react";
import { useEffect, useState } from "react";

function Item(props){
//const[name, setName]=useState(null);
return(
    <div>
        <h1>Item</h1>
        <h3>{JSON.stringify(props)}</h3>
    </div>
)
}

export default Item