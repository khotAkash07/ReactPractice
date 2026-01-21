
import { useFormStatus } from 'react-dom';

let FromSubmission =()=>{

    const handleForm=async ()=>{
        await new Promise(resolve => setTimeout(resolve, 3000));
        console.log("Submitted");
    }
    function CustomForm(){
        const{pending} = useFormStatus();
        console.log(pending);
      return(
          <div className="m-52 border-2 border-gray-200 p-9 bg-yellow-100 shadow-2xl shadow-red-600">
              <input type="text" placeholder="Enter Name " className="border-2 border-black p-3 w-72 rounded-xl text-xl"/><br/><br/>
              <input type="password" placeholder="Enter Password " className="border-2 border-black p-3 w-72 rounded-xl text-xl"/><br/><br/>
              <button type="submit"
                      disabled={pending}
                      className="border-2 border-black p-3 w-62 ml-5 bg-yellow-200 shadow-xl/30 rounded-xl hover:border-cyan-400">{pending?"Submitting...":"Submit"}</button>
          </div>
      )
    }
    return(
        <div>
            <form action={handleForm}>
                <CustomForm />
            </form>
        </div>
    );
}
export default FromSubmission;
