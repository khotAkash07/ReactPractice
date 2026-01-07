import {useState} from "react";
import CollegeData from "./CollegePage.jsx";

let UseEffectWithPrompt =()=>{
    let[count, setCount] = useState(0);
    let[data, setData] = useState(0);



    return(
      <div className="bg-yellow-200 px-50 py-10">
        <CollegeData count={count} data={data} />
          <button onClick={()=>setCount(count+1)} className="mt-10 mr-10 bg-red-400 shadow-xl/20 p-2 rounded-xl">Count</button>
          <button onClick={()=>setData(data+1)}className="mr-10 bg-red-400 p-2 shadow-xl/20 rounded-xl" >Data</button>
      </div>
    );
}

export default UseEffectWithPrompt;