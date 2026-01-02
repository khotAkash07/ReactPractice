import {useState} from 'react';

let CheckBoxEvents= function () {

    let subject = ["Java", "Python", "JavaScript", "React", "Spring", "Spring-Boot", "Html", "Css", "Bootstrap"];

    let [tech, setTech] = useState([]);

    let handelChange = (event) =>{
        const {value, checked} = event.target;

        setTech(prevTech => checked ?
        [...prevTech,value] : tech.filter(t => t !== value)
        )
    }

    return(
        <>
            <div className="mt-5 p-4 border rounded bg-gray-50">
            {
                subject.map((item,index) => (
                    <label className="flex gap-7" key={index}>
                        <input type='checkBox' key={index} onChange={handelChange} value={item}/>{item}
                    </label>
                ))
            }
            </div>


                <div className="mt-5 p-4 border rounded bg-gray-50">
                    <h3 className="font-semibold">You Selected:</h3>
                    <ul className="list-disc ml-5">
                        {tech.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

        </>
    )
}

export default CheckBoxEvents