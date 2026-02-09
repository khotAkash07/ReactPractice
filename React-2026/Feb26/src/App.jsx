import RoutingManager from "./componant/RoutingPractice/RoutingManager.jsx";
import Sidebar from "./componant/RoutingPractice/Sidebar.jsx";
import Navbar from "./componant/RoutingPractice/Navbar.jsx";

export default function App() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            {/* This wrapper ensures Sidebar and Content are side-by-side */}
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <RoutingManager />
            </div>
        </div>
    )
}