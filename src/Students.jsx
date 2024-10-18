const { grade, score } = { grade: "7", score: "99" };

function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>Grade : {grade} </h3>
      <p>score : {score} </p>
    </div>
  );
}