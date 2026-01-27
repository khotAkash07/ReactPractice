import {useState} from "react";

function UpdateObjectInState(){
    let [user, setUser] = useState(
        {
            name : "Akash",
            address :{
                city:"Shivpuri",
                pin : 415403
            }
    });

    const handleObjectName=(name)=>{
        setUser({...user, name: name});
    }

    const handleObjectVillage=(name)=>{
        setUser({...user,address:{...user.address, city:name}});
    }
    return (
        <div className="m-53 font-bold">
            <label htmlFor="userName">Enter User Name : </label>
            <input id="userName" name="userName" className="p-2 m-2 border-2 border-black"
                onChange={(e)=>handleObjectName(e.target.value)}
            />
            <br/>
            <label htmlFor="userCity">Enter User City : </label>
            <input id="userName" name="userCity" className="p-2  ml-6 mb-3 border-2 border-black"
                   onChange={(e)=>handleObjectVillage(e.target.value)}
            />
            <hr/>
            <h2>User Details : </h2><br/>
            <h2>User Name : {user.name}</h2>
            <h2>User Village : {user.address.city}</h2>
            <h2>User pin : {user.address.pin}</h2>

        </div>
    );
}

export default UpdateObjectInState;