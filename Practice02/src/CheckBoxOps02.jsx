import { useState } from "react";

let OpsCheckBox = (selectedSkills) => {
  let [skills, setSkills] = useState([]);

  let handleChange = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills(skills.concat(event.target.value));
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  let skilllist = ["Java", "Python", "React", "JavaScript", "Spring-boot"];
  return (
    <>
      {skilllist.map((skill) => (
        <div key={skill}>
          <input
            onChange={handleChange}
            type="checkbox"
            id={skill}
            value={skill}
          />
          <label htmlFor={skill}>{skill}</label>
          <br />
        </div>
      ))}
      {/* //   <input onChange={handleChange} type="checkbox" id="java" value="java" />
    //   <label htmlFor="java">Java</label>
    //   <br />
    //   <input
    //     onChange={handleChange}
    //     type="checkbox"
    //     id="Python"
    //     value="Python"
    //   />
    //   <label htmlFor="Python">Python</label>
    //   <br />

    //   <input onChange={handleChange} type="checkbox" id="React" value="React" />
    //   <label htmlFor="React">React</label>
    //   <br />
    //   <input
    //     onChange={handleChange}
    //     type="checkbox"
    //     id="JavaScript"
    //     value="JavaScript"
    //   />
    //   <label htmlFor="JavaScript">JavaScript</label>
    //   <br />
    //   <input
    //     onChange={handleChange}
    //     type="checkbox"
    //     id="Spring-boot"
    //     value="Spring-boot"
    //   />
    //   <label htmlFor="Spring-boot">Spring-boot</label>
    //   <br /> */}

      <h1 className="font-bold mt-5 bg-yellow-300">{skills.join(", ")}</h1>
    </>
  );
};
export default OpsCheckBox;
