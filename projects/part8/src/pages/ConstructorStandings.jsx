import "./../css/Standings.css";

const ConstructorStandings = () => {
  const constructors = [
    { rank: 1, team: "McLaren", engine: "Mercedes", points: 650 },
    { rank: 2, team: "Mercedes", engine: "Mercedes", points: 325 },
    { rank: 3, team: "Ferrari", engine: "Ferrari", points: 298 },
    { rank: 4, team: "Red Bull", engine: "Honda", points: 290 },
    { rank: 5, team: "Williams", engine: "Mercedes", points: 102 },
    { rank: 6, team: "Racing Bulls", engine: "Honda", points: 72 },
    { rank: 7, team: "Aston Martin", engine: "Honda", points: 68 },
    { rank: 8, team: "Kick Sauber", engine: "Ferrari", points: 55 },
    { rank: 9, team: "Haas", engine: "Ferrari", points: 46 },
    { rank: 10, team: "Alpine", engine: "Renault", points: 20 },
  ];

  return (
    <>
      <section className="hero hero--tight">
        <div className="container">
          <h1>Constructors Standings</h1>
          <p className="lede">
            Track the latest points and rankings for the 2025 Formula One
            Constructors Championship.
          </p>
        </div>
      </section>

      <main className="container">
        <h2 className="subhead">Constructors</h2>
        <div className="table-wrap narrow">
          <table className="standings">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Team</th>
                <th scope="col">Engine</th>
                <th scope="col">Points</th>
              </tr>
            </thead>
            <tbody>
              {constructors.map((constructor) => (
                <tr key={constructor.rank}>
                  <td>{constructor.rank}</td>
                  <td>{constructor.team}</td>
                  <td>{constructor.engine}</td>
                  <td>{constructor.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default ConstructorStandings;
