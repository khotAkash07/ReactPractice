import {Routes, Route } from 'react-router-dom'
import Home from "./Home.jsx";
import ViewCourse from "./ViewCourse.jsx";
import AddCourse from "./AddCourse.jsx";
import PageForError from "./PageForError.jsx";

const RoutingManager = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/viewCourse" element={<ViewCourse />} />
                <Route path="/addCourse" element={<AddCourse />} />
                <Route path="/*" element={<PageForError />} />
            </Routes>
        </>
    );
}

export default RoutingManager;