import { useState } from "react";

let RedioButtonOps = () => {
  let [gender, setGender] = useState("");
  let [city, setCity] = useState("");
  let HandalState = (event) => {
    console.log(event.target.value, event.target.checked);

    if (event.target.checked) {
      setGender(event.target.value);
    } else {
      setGender("");
    }
  };

  return (
    <>
      <input
        onChange={HandalState}
        type="radio"
        name="radio"
        id="Male"
        value="Male"
        className="ml-10 mb-6"
      />
      <label htmlFor="Male" className="ml-2 mb-6">
        Male
      </label>
      <input
        onChange={HandalState}
        type="radio"
        name="radio"
        id="Female"
        value="Female"
        className="ml-10 mb-6"
      />
      <label htmlFor="Female" className="ml-2 mb-6">
        Female
      </label>

      <h1 className="ml-10 mb-6 font-bold">Gender is = {gender}</h1>

      <h1 className="ml-10 font-bold">City is = {city}</h1>
      <select
        onChange={(e) => setCity(e.target.value)}
        className="mt-5 ml-10 mb-6 p-2 rounded-md h-10 w-35 bg-green-300"
      >
        <option value="">-Select City-</option>
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Banglore">Banglore</option>
        <option value="Hydrabad">Hydrabad</option>
      </select>
    </>
  );
};

export default RedioButtonOps;
