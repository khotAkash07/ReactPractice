import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";

let RoutingHandler=()=>{
    return(
      <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

          <Routes>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
          </Routes>
      </>
    );
}
export default RoutingHandler;