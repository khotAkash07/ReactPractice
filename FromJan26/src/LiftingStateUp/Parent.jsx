import {useState} from "react";
import Child01 from "./Child01.jsx";
import Child02 from "./Child02.jsx";

let Parent=()=>{
    const[user, setUser] = useState("");

    return(
        <>
            <Child01 setUser={setUser}/>
            <hr />
            <Child02 user={user} />
        </>
    );
}
export default Parent