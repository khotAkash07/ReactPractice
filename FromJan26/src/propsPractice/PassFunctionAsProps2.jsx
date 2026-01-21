import Student from "./PassFunctionAsProps.jsx";

let Student2=()=>{

    function abc(){
        alert("Hey Gud mrng");
    }
    return(
        <div className="grid grid-cols-3 gap-x-2">
            <Student abc={abc}  />
            <Student abc={abc}  />
            <Student abc={abc}  />
            <Student abc={abc}  />
            <Student abc={abc}  />
            <Student abc={abc}  />
            <Student abc={abc}  />
            <Student abc={abc}  />
            <Student abc={abc}  />
            <Student abc={abc}  />
            <Student abc={abc}  />

        </div>
    );
}
export default Student2;








