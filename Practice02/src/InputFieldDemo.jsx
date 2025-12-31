import { useState } from "react";
function InputField() {
  let [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-6 mt-16">
      <input
        type="text"
        placeholder="Enter your text here"
        className="p-4 bg-green-400 w-[400px] rounded-md shadow-[0px_20px_30px_-10px_rgb(38,57,77)]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <input
        type="text"
        value={value}
        className="p-4 bg-green-300 w-[400px] rounded-md shadow-[0px_20px_30px_-10px_rgb(38,57,77)]"
      />

      <button
        className="p-4 bg-yellow-400 w-[200px] rounded-lg text-blue-500 shadow-[0px_20px_30px_-10px_rgb(38,57,77)]"
        onClick={() => setValue("")}
      >
        clear
      </button>
    </div>
  );
}

export default InputField;
