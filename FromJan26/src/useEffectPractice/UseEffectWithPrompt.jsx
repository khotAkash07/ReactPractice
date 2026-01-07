import {useState} from "react";
import CollegeData from "./CollegePage.jsx";

let UseEffectWithPrompt =()=>{
    let[count, setCount] = useState(0);
    let[data, setData] = useState(0);



    return(
      <>
        <CollegeData count={count} data={data} />
          <button onClick={()=>setCount(count+1)} className="mb-5 mr-10">Count</button>
          <button onClick={()=>setData(data+1)}>Data</button>
      </>
    );
}

export default UseEffectWithPrompt;