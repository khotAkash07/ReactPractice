import {useEffect} from "react";

let CollegeData =({count,data})=>{

    function runOnce(){
        console.log("This is Run Once... ");
    }

    useEffect(()=>{
        runOnce();
    },[]);

    return(
        <>
            <h1>Count : {count}</h1>
            <h1>Data : {data}</h1>
        </>
    );
}

export default CollegeData;