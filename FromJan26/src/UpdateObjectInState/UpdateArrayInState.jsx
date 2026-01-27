import {useState} from "react";

let UpdateArrayInState=()=>{

    let [users, setUsers]=useState(["Akash", "Abhi", "Shubham", "Nilesh", "Prathmesh"]);
    const[name,setName]=useState("");
    let handelUser=()=> {

        let newUsers = [...users];
        newUsers[newUsers.length - 1] = name;
        setUsers(newUsers);
    }

    const[dataDetails, setDataDetails]=useState([
        {name:"Akash",age:23},
        {name:"Abhi",age:24},
        {name:"Shubham",age:29},
        {name:"Nilesh",age:24}
    ]);


    const handleAge=(age)=>{
        let copyArray = [...dataDetails];
        copyArray[copyArray.length-1].age = age;
        setDataDetails([...copyArray]);
    }
    return(
        <div className="m-30">
            <label htmlFor="name">Enter Name : </label>
            <input type="text" id="name" name="name" placeholder="Enter Your Name " onChange={(e)=>setName(e.target.value)}/>
            <button onClick={handelUser}>Update User</button>
            <br/>
            <h2>UserNames are :</h2>
            {
                users.map(
                    (user,index)=>(
                        <div key={index}>{user}</div>
                    )
                )
            }

            <hr className="my-10"/>
            <input type="text" onChange={(e)=>{handleAge(e.target.value)}} id="age"/>
            {
                dataDetails.map((user,index)=>(
                    <div key={index}>{user.name}, {user.age}</div>
                ))
            }
        </div>
    );
}

export default UpdateArrayInState;