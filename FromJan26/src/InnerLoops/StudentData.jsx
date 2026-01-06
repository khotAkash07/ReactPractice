import CollegeName from "./College.jsx";

const StudentData = () => {
    const info = [
        {
            collegeName: "YC College",
            address: "Islampur, Sangli, MH10",
            student:[
                {
                name: "Akash",
                age: 23,
                marks: 90
            },
                {
                    name: "Akash",
                    age: 23,
                    marks: 90
                },
                {
                    name: "Akash",
                    age: 23,
                    marks: 90
                },
                {
                    name: "Akash",
                    age: 23,
                    marks: 90
                }
            ]
        },
        {
            collegeName: "KBP College",
            address: "Islampur, Sangli, MH10",
            student:[
                {
                name: "Abhi",
                age: 23,
                marks: 90
            },
                {
                    name: "Abhi",
                    age: 23,
                    marks: 90
                }
                ,{
                    name: "Abhi",
                    age: 23,
                    marks: 90
                }
                ,{
                    name: "Abhi",
                    age: 23,
                    marks: 90
                }
            ]
        },
        {
            collegeName: "ZIBACAR College",
            address: "Pune, Sangli, MH12",
            student: [
                {
                name: "Shubham",
                age: 23,
                marks: 90
            },
                {
                    name: "Shubham",
                    age: 23,
                    marks: 90
                },
                {
                    name: "Shubham",
                    age: 23,
                    marks: 90
                },
                {
                    name: "Shubham",
                    age: 23,
                    marks: 90
                }
            ]
        },
        {
            collegeName: "ZIMCA College",
            address: "Pune, Sangli, MH12",
            student:[ {
                name: "digvijay",
                age: 23,
                marks: 90
            },
                {
                    name: "digvijay",
                    age: 23,
                    marks: 90
                },
                {
                    name: "digvijay",
                    age: 23,
                    marks: 90
                },
                {
                    name: "digvijay",
                    age: 23,
                    marks: 90
                }
            ]
        }
    ];

    return (
        <div className="p-8 mb-4 w-screen">
            <CollegeName college={info} />
        </div>
    );
};

export default StudentData;
