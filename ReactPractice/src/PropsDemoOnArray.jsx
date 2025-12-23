function Students({ student  }) {
  return (
    <>
      {student.map((names, index) => (
        <ol>
          <li key={index}>{names}</li>
        </ol>
      ))}
    </>
  );
}

function TakeJSXAsProps({ children }) {
  return <>{children}</>;
}
export default Students;
export { TakeJSXAsProps };
