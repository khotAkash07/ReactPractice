let Employees = ({employee}) =>{
        return (
            <>
                {employee.map((item, index) => (
                    <h1 key={index} className='mt-4'>
                        Developer id is = {item.id}<br/>
                        Developer name is = {item.name}<br/>
                        Developer salary is = {item.salary}<br/>
                    </h1>
                ))}
            </>
        )
}
export default Employees;