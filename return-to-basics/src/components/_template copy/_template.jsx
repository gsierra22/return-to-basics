import React from "react";
import { useEffect, useState } from "react";

function _template(props){
//const[name, setName]=useState(null);
return(
    <div>
        <h1>_template</h1>
        <h3>{JSON.stringify(props)}</h3>
    </div>
)
}

export default _template