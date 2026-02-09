import { useNavigate} from "react-router-dom";

export default function Sidebar(){

    const navigate = useNavigate();
    return(
        <>
            <div className="fixed bg-cyan-700 border-none [&>select>option]:text-white text-white w-1/6 h-screen p-4 flex flex-col items-center justify-baseline gap-10  text-2xl">
                <h1>This is side bar</h1>
                <select
                    className="bg-cyan-700 text-white p-2 rounded-md outline-none border-none transition-all cursor-pointer"
                    onChange={(e) => { navigate(e.target.value) }}
                >
                    <option value="/addCourse" selected>Add Course</option>
                    <option value="/viewCourse">View Courses</option>
                </select>
            </div>
        </>
    );
}