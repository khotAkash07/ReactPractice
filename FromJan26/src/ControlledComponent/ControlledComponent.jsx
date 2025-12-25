import {useState} from "react";

let FromSubmit = () => {

    let [name, setName] = useState('***')
    let [Age, setAge] = useState('**')

    let updateState = (e) =>{
        e.preventDefault();
        setName(e.target.name.value);
        setAge(e.target.age.value);
    }
    return(
      <>
          <form className='mx-52 mt-42 bg-red-300 p-5 w-1/3 rounded shadow-xl/40' onSubmit={updateState}>
              <label htmlFor="name">Enter Your name :</label>
              <input type="text" name='name' id='name' placeholder='Enetr Your Name'
                     className='h-9 w-59 ml-2 text-black bg-green-300 shadow-xl/30'/><br/>
              <label htmlFor="age">Enter Your Age :</label>
              <input type="number" name='age' id='age' placeholder='Enetr Your Age'
                     className='h-9 w-59 ml-5 mt-10 text-black bg-green-300 shadow-xl/30' /><br/>

              <button type="submit" className='bg-blue-300 rounded mt-5 w-50 h-8 ml-40 shadow-xl/20'>Submit</button>
          </form>

          <div className="text-center">
                <h1>{name}</h1>
                <h1>{Age}</h1>
          </div>
      </>
    );
}

export default FromSubmit;





















