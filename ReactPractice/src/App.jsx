import Home from "./ForRouting/Home.jsx";
import About from "./ForRouting/About.jsx";
import {Route, Routes} from "react-router";

const App=()=>{
    return (
        <>cd
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;