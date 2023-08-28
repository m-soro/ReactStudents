export default function Score({ scores }) {
  console.log(typeof scores);

  return (
    <div className="Score">
      <table role="grid">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.date}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
