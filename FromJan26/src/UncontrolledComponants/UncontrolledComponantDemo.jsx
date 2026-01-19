let UncontrolledComponentDemo=()=>{

    function handleForm(event){
        event.preventDefault();
        console.log("handleForm");
    }
    return(
        <div>
            <form action="" onSubmit={handleForm}><br/>
                <input type="text" name="firstName" id="fname" placeholder="First Name"/><br/>
                <input type="text" name="lName" id="lname" placeholder="Last Name"/><br/>
                <button>Register Here</button>
            </form>
        </div>
    );

}

export default UncontrolledComponentDemo;