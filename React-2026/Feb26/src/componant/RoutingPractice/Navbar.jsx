import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="bg-cyan-300 p-3 flex items-center justify-center gap-9 text-3xl w-full">
                <div className="ml-15 p-0">
                    <h1>Logo</h1>
                </div>
                <div className="w-full text-center">
                    <h1>Spring MVC Project</h1>
                </div>
            </div>
        </>
    )
}

export default Navbar;