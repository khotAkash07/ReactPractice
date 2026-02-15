export default function AddCourse() {
    return (
        <div className="w-full flex items-center justify-center bg-gray-400">
            <form className="bg-white p-6 rounded-lg shadow-md w-1/3">

                <h2 className="text-xl font-semibold text-center mb-4">
                    Add New Course
                </h2>
                <div className="flex flex-col mb-4">
                    <label htmlFor="courseName" className="mb-1 font-medium">
                        Course Name
                    </label>
                    <input
                        type="text"
                        id="courseName"
                        placeholder="Enter course name"
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                >
                    Add Course
                </button>
            </form>
        </div>
    );
}
