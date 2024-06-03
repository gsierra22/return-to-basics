import React from "react";
import { useEffect, useState } from "react";

function Body(props){
//const[name, setName]=useState(null);
return(
    <div>
        <h1>Body</h1>
        <h3>{JSON.stringify(props)}</h3>
    </div>
)
}

export default Body