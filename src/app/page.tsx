'use client'

import { useState } from "react";

export default function Fun(){
const [count, setCount]= useState(0)

return(
<>
   <button onClick={()=>{setCount(count+1)}}>click me</button>
   <div><h1>{count}</h1></div>
</>

);

}
