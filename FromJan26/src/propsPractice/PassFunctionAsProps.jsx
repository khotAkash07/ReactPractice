let Student=(props)=>{

    return(
        <div>
            {/* eslint-disable-next-line react-hooks/refs */}
            <input ref={props.ref} type="text" className="border-2 border-black p-4 mt-8"/>
        </div>
    );
}

export default Student;