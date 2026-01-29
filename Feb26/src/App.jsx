import HandlerRout from "./componants/DemoForRouting/HandlerRout.jsx";
import {Routes, Route} from "react-router";
import Home from "./componants/DemoForRouting/Home.jsx";
import About from "./componants/DemoForRouting/About.jsx";

function App() {

  return (
    <>
        <h1>Welcome!</h1>
        <HandlerRout />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}

export default App
