import {useRef} from 'react'
import styles from "../useRefDemo.module.css";

let UseRefDemo=()=>{

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const hobbiesRef = useRef(null);
    const toggleRef = useRef(null);

    function handleRef(){
        nameRef.current.value = "";
        ageRef.current.value = "";
        hobbiesRef.current.value = "";
        nameRef.current.focus();
    }

    function handleToggle(){
        if(toggleRef.current.style.display === "none"){
            toggleRef.current.style.display = "table";
        }else{
            toggleRef.current.style.display = "none";
        }

    }
    return(
        <div className={styles.container}>
            <button onClick={handleToggle} className="bg-black text-white p-2 rounded-xl mt-1">toggle</button>
        <h1 className="font-bold mx-52 underline">useRef Practice</h1>
            <table className="w-full h-92" ref={toggleRef}>
                <tbody>
                     <tr>
                         <td><label htmlFor="fname">Enter Your name</label></td>
                         <td><input ref={nameRef} type="text" name="fname" id="fname" placeholder="Enter your name" /></td>
                     </tr>
                     <tr>
                         <td><label htmlFor="age">Enter Your Age</label></td>
                         <td><input ref={ageRef} type="text" name="age" id="age" placeholder="Enter your Age" /></td>
                     </tr>
                     <tr>
                         <td><label htmlFor="hob">Enter Your Hobbies</label></td>
                         <td><input ref={hobbiesRef} type="text" name="hob" id="hob" placeholder="Enter your Hobbie" /></td>
                     </tr>
                    <tr>
                        <td colSpan="2" >
                             <button className="ml-80 text-center max-h-20 mt-4 px-5 py-2 bg-yellow-200 rounded-2xl" onClick={handleRef}>Clear</button>
                        </td>
                    </tr>
                </tbody>
            </table>





        </div>
    );
};

export default UseRefDemo;