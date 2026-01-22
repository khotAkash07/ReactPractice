import {useTransition} from "react";
import loadingGif2 from "../image/LoadingGif02.gif";

let DataLoadHandle=()=>{

    const [isPending, startTransition] = useTransition(false);
   function handleButton(){
       startTransition(async ()=>{
           await new Promise(resolve => setTimeout(resolve, 6000))
           }
       );
    }
    return(
        <div className="m-52">
            <h2>This is useTransition Effect Demo</h2>

            {
                isPending?
                    <img style={{ width:"70px"}} src={loadingGif2}  alt="Image Load"/>:
                    <button disabled={isPending}
                            className="p-3 bg-black text-white text-l rounded-xl m-5" onClick={handleButton}>
                        {
                            isPending?"Loading...":"Click here"
                        }
                    </button>
            }

        </div>
    );
}
export default DataLoadHandle;