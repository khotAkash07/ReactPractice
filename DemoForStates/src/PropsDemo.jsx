let College = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

function Students({ students }) {
  return (
    <>
      <h2>
        Name : {students.name} <br />
        Age : {students.age} <br />
        mail : {students.mail}
      </h2>
    </>
  );
}

function ArrayOfStudents({ students }) {
  return (
    <>
      {students.map((student, index) => (
        <ul>
          <li key={index}>{student}</li>
        </ul>
      ))}
    </>
  );
}
export default College;
export { Students, ArrayOfStudents };
