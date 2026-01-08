'use client'

import { useState } from "react";

export default function Fun(){
const [count, setCount]= useState(0)

return(
<>
   <div className="p-8 flex flex-col items-center gap-4">
  <h1 className="text-4xl font-mono">{count}</h1>
  
  <button 
    onClick={() => setCount(count + 1)}
    className="px-4 py-2 border border-gray-400 bg-gray-100 hover:bg-gray-200 rounded"
  >
    Click me
  </button>
</div>
</>

);

}
