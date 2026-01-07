import Student from "./Student.jsx";

let CollegeName = ({ college }) => {
    return (
        <div className="grid grid-cols-3 gap-6 place-items-center">
            {
                college.map((col, index) => (
                    <div
                        key={index}
                        className="bg-cyan-300 p-4 rounded-2xl w-full text-white shadow-xl"
                    >
                        <h2 className="text-center text-black font-bold">College Name : {col.collegeName}</h2>
                        <h2 className="text-center text-black font-bold">College Address : {col.address}</h2>
                        <Student stud={col.student} />
                    </div>
                ))
            }
        </div>
    );
};

export default CollegeName;
