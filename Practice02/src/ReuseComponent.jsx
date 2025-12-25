let PlayerData = ({ data }) => {
  return (
    <div className="flex justify-center">
      <div className="p-4 mt-6 w-100 bg-red-300 shadow-xl/40">
        <h1>Player Id : {data.id} </h1>
        <h1>Player Name : {data.name} </h1>
        <h1>Player Runs : {data.runs} </h1>
      </div>
    </div>
  );
};

export default PlayerData;
