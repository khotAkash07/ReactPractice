import Student from "./PassFunctionAsProps.jsx";
import {useRef} from "react";

let Student2=()=>{

    let inputRef = useRef(null);

    let handleRef=()=>{
        inputRef.current.value = "AkashKhot";
        inputRef.current.focus();
        inputRef.current.style.borderColor = "red";
        inputRef.current.style.fontSize = "large";
    }
    return(<div className="ml-40">
       <Student ref={inputRef}/>
        <button onClick={handleRef} className="btn btn-primary bg-black text-white px-5 py-4 rounded-2xl mt-4">ChangeField</button>
    </div>)
    // function abc(){
    //     alert("Hey Gud mrng");
    // }
    // return(
    //     <div className="grid grid-cols-3 gap-x-2">
    //         <Student abc={abc}  />
    //         <Student abc={abc}  />
    //         <Student abc={abc}  />
    //         <Student abc={abc}  />
    //         <Student abc={abc}  />
    //         <Student abc={abc}  />
    //         <Student abc={abc}  />
    //         <Student abc={abc}  />
    //         <Student abc={abc}  />
    //         <Student abc={abc}  />
    //         <Student abc={abc}  />
    //
    //     </div>
    // );
}
export default Student2;








