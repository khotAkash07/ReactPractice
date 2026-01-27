let Child01=({setUser})=>{

    return(
        <div>
            <input type="text" onChange={e=>setUser(e.target.value)} className="h-12 w-40 p-4 bg-blue-500"/><br/>
            <button className="bg-yellow-200 p-4 w-fit mt-4 mb-5">AddUser</button>
        </div>
    )
}
export default Child01;