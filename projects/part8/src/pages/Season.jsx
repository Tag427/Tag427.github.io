import { Link } from "react-router-dom";
import "./../css/Season.css";

const Season = () => {
  const schedule = [
    { round: 1, date: "16 Mar, 2025", gp: "Australian GP", location: "Melbourne", slug: "melbourne" },
    { round: 2, date: "23 Mar, 2025", gp: "Chinese GP", location: "Shanghai", slug: "shanghai" },
    { round: 3, date: "6 Apr, 2025", gp: "Japanese GP", location: "Suzuka", slug: "suzuka" },
    { round: 4, date: "13 Apr, 2025", gp: "Bahrain GP", location: "Bahrain", slug: "bahrain" },
    { round: 5, date: "20 Apr, 2025", gp: "Saudi Arabian GP", location: "Jeddah", slug: "jeddah" },
    { round: 6, date: "4 May, 2025", gp: "Miami GP", location: "Miami", slug: "miami" },
    { round: 7, date: "18 May, 2025", gp: "Emilia Romagna GP", location: "Imola", slug: null },
    { round: 8, date: "25 May, 2025", gp: "Monaco GP", location: "Monaco", slug: null },
    { round: 9, date: "1 Jun, 2025", gp: "Spanish GP", location: "Barcelona", slug: null },
    { round: 10, date: "15 Jun, 2025", gp: "Canadian GP", location: "Montreal", slug: null },
    { round: 11, date: "29 Jun, 2025", gp: "Austrian GP", location: "Red Bull Ring", slug: null },
    { round: 12, date: "6 Jul, 2025", gp: "British GP", location: "Silverstone", slug: null },
    { round: 13, date: "27 Jul, 2025", gp: "Belgian GP", location: "Spa", slug: null },
    { round: 14, date: "3 Aug, 2025", gp: "Hungarian GP", location: "Hungaroring", slug: null },
    { round: 15, date: "31 Aug, 2025", gp: "Dutch GP", location: "Zandvoort", slug: null },
    { round: 16, date: "7 Sep, 2025", gp: "Italian GP", location: "Monza", slug: null },
    { round: 17, date: "21 Sep, 2025", gp: "Azerbaijan GP", location: "Baku", slug: null },
    { round: 18, date: "5 Oct, 2025", gp: "Singapore GP", location: "Marina Bay", slug: null },
    { round: 19, date: "19 Oct, 2025", gp: "United States GP", location: "COTA", slug: null },
    { round: 20, date: "26 Oct, 2025", gp: "Mexican GP", location: "Mexico City", slug: null },
    { round: 21, date: "9 Nov, 2025", gp: "Brazilian GP", location: "Sao Paulo", slug: null },
    { round: 22, date: "22 Nov, 2025", gp: "Las Vegas GP", location: "Las Vegas", slug: null },
    { round: 23, date: "30 Nov, 2025", gp: "Qatar GP", location: "Doha", slug: null },
    { round: 24, date: "7 Dec, 2025", gp: "Abu Dhabi GP", location: "Yas Marina", slug: null },
  ];

  return (
    <>
      <section className="hero hero--tight">
        <div className="container">
          <h1>2025 Formula 1 Season Schedule</h1>
          <p className="lede">
            All 24 races of the 2025 FIA Formula One World Championship. Dates,
            locations, and quick links to race details – all in one place.
          </p>
        </div>
      </section>

      <main className="container">
        <div className="table-wrap">
          <table className="schedule">
            <thead>
              <tr>
                <th scope="col">Round</th>
                <th scope="col">Date</th>
                <th scope="col">Grand Prix</th>
                <th scope="col">Location</th>
                <th scope="col">More Details</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((race) => (
                <tr key={race.round}>
                  <td>{race.round}</td>
                  <td>{race.date}</td>
                  <td>{race.gp}</td>
                  <td>{race.location}</td>
                  <td>
                    {race.slug ? (
                      <Link to={`/circuit/${race.slug}`}>View</Link>
                    ) : (
                      <span>View</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Season;
