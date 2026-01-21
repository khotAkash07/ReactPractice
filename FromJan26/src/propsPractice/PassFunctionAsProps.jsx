let Student=({abc})=>{


    return(
        <div className="p-2 grid grid-cols-2 gap-x-2">
            <button onClick={abc}
                    className="btn btn-primary bg-black text-white border-2 border-solid  px-5 py-3 rounded-lg hover:shadow-xl/20 hover:border-cyan-500">
                Click here
            </button>
        </div>
    );
}

export default Student;