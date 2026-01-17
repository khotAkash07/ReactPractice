let UncontrolledComponentDemo=()=>{

    function handleForm(event){
        event.preventDefault();
        let fname = document.querySelector("#fname").value;
        let lname = document.querySelector("#lname").value;
        console.log("handleForm", fname, lname);
    }
    return(
        <div>
            <form action="" onSubmit={handleForm} className="mx-52"><br/>
                <input type="text" name="firstName" id="fname" placeholder="First Name" className="bg-black h-10 w-52 mb-4 text-white p-2"/><br/>
                <input type="text" name="lName" id="lname" placeholder="Last Name" className="bg-black h-10 w-52 text-white p-2"/><br/>
                <button className="bg-yellow-300 p-2 mt-2" >Register</button>
            </form>
        </div>
    );
}
export default UncontrolledComponentDemo;