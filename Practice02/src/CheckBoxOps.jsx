import { useState } from "react";

let Skills = () => {
  let [skill, setSkill] = useState([]);

  function handleChange(event) {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkill(skill.concat(event.target.value));
    } else {
      setSkill(skill.filter((target) => target !== event.target.value));
    }
  }
  return (
    <>
      <input
        onChange={handleChange}
        type="checkbox"
        id="java"
        value="java ,"
        className="mr-7"
      />
      <label htmlFor="java">Java</label>
      <br />
      <input
        onChange={handleChange}
        type="checkbox"
        id="python"
        value="python,"
        className="mr-7"
      />
      <label htmlFor="python">python</label>
      <br />
      <input
        onChange={handleChange}
        type="checkbox"
        id="php"
        value="php,"
        className="mr-7"
      />
      <label htmlFor="php">php</label>
      <br />
      <input
        onChange={handleChange}
        type="checkbox"
        id="react"
        value="react,"
        className="mr-7"
      />
      <label htmlFor="react">react</label>
      <br />
      <input
        onChange={handleChange}
        type="checkbox"
        id="spring"
        value="spring,"
        className="mr-7"
      />
      <label htmlFor="spring">spring</label>

      <h1 className="mt-10">{skill}</h1>
    </>
  );
};

export default Skills;
