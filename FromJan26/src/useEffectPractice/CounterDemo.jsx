import {useEffect, useState} from "react";

let UseEffectPractice=()=>{

    let[count, setCount] = useState(0);
    let[data, setData] = useState(0);

    function showOnce(){
        console.log("This is function");
    }

    useEffect(()=>{
        showOnce();
    },[])

    return(
        <>
            <div className="bg-yellow-200 p-5">
                <h1>Count : {count} And Data : {data}</h1>

                <button className="bg-red-300 px-4 rounded-xl" onClick={()=>{setCount(count+1)}}>Click</button>
                <button className="bg-red-300 px-4 rounded-xl ml-3"  onClick={()=>setData(data+1)}>ClickHere</button>
            </div>
        </>
    );
};

export default UseEffectPractice;