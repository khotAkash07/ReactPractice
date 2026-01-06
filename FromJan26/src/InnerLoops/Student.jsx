let Student = ({stud}) =>{
    return(
        <>
            {
                stud.map((e,index)=>(
                    <div key={index} className="bg-green-400 rounded-2xl p-4 mt-3 shadow-md shadow-red-600">
                        <h3>Name : {e.name}</h3>
                        <h3>Marks : {e.marks}</h3>
                        <h3>Age : {e.age}</h3>
                    </div>
                ))
            }
        </>
    )
}

export default Student;