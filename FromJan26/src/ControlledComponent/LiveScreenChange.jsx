import {useState} from "react";

let ChangeData = () =>{
    let [data, setData] = useState("");

    let handleChange = (event) =>{
            setData(event.target.value);
    };
    return(
        <div className="flex flex-col gap-4 ml-50 mt-30">
            <label htmlFor='search' className="ml-2">Enter What you want to search</label>
            <input id='search' name='search' onKeyUp={handleChange} className="bg-yellow-200 shadow-2xl p-2 w-1/5" />
            <button className='p-3 w-1/6 bg-red-300 shadow-xl' onClick={()=>{
                setData("")
                document.getElementById("search").value = "";
            }}>Clear</button>

            <h1>{data}</h1>
        </div>
    );
};
export default ChangeData;