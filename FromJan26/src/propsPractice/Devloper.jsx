import Employees from "./Employee.jsx";

let Developers = () => {

    let emps = [
        {
            id:1,
            name: "Employee 1",
            salary: 50000,
        },
        {
            id:2,
            name: "Employee 2",
            salary: 60000,
        },
        {
            id:3,
            name: "Employee 3",
            salary: 70000,
        },
        {
            id:4,
            name: "Employee 4",
            salary: 80000,
        }
    ];
    return (
        <>
            <Employees employee={emps} />
        </>
    );
};

export default Developers;