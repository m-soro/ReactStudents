import Score from "./Score";
export default function Student({ studentData }) {
  return (
    <div className="Student">
      {studentData.map((data, index) => (
        <article key={index}>
          <summary className="Card">
            <h1>{data.name}</h1>
            <img src={data.image} alt={data.name} />
          </summary>
          <details>
            <p>{data.bio}</p>
            <Score scores={data.scores} />
            <button className="outline">contact</button>
          </details>
        </article>
      ))}
    </div>
  );
}
