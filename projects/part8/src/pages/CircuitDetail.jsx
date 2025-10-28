import { useParams } from "react-router-dom";
import "./../css/CircuitDetail.css";

const CircuitDetail = () => {
  const { slug } = useParams();

  const circuitData = {
    melbourne: {
      name: "Melbourne Grand Prix Circuit",
      location: "Melbourne, Australia • Albert Park",
      imgSrc: "/images/melbourne2.avif",
      overview:
        "A fast, semi-permanent street circuit around Melbourne's Albert Park, it features a smooth surface, flowing chicanes, and long DRS zones that create high average speeds. Heavy braking into tight corners provides prime overtaking opportunities, while the parkland backdrop and mix of straights and technical sections make it a challenging and distinctive venue.",
      facts: {
        length: "5.278 km",
        distance: "58 laps • 306.124 km",
        corners: "14",
        elevation: "~10 m",
        direction: "Clockwise",
        firstGP: "1996",
        lapRecord: "1:19.813 - Charles Leclerc (2024)",
      },
      drsZones: [
        "Zone 1 - Start/Finish straight • Detection before T13",
        "Zone 2 - Lakeside straight • Detection after T2",
        "Zone 3 - Back straight • Detection before T9",
      ],
      schedule: [
        { session: "Practice 1", time: "Fri - 13:30" },
        { session: "Practice 2", time: "Fri - 17:00" },
        { session: "Practice 3", time: "Sat - 12:30" },
        { session: "Qualifying", time: "Sat - 16:00" },
        { session: "Race", time: "Sun - 15:00" },
      ],
    },
    shanghai: {
      name: "Shanghai International Circuit",
      location: "Shanghai, China",
      imgSrc: "/images/shanghai.jpg",
      overview:
        "A modern Hermann Tilke design, the Shanghai International Circuit is best known for its distinctive snail-shaped first sector and one of the longest straights in Formula 1. The track blends technical low-speed corners with high-speed sweepers, testing both aerodynamic efficiency and braking stability. Its mix of challenges makes it a true all-rounder for drivers and teams.",
      facts: {
        length: "5.451 km",
        distance: "56 laps • 305.066 km",
        corners: "16",
        elevation: "~29 m",
        direction: "Clockwise",
        firstGP: "2004",
        lapRecord: "1:30.641 - Oscar Piastri (2025)",
      },
      drsZones: [
        "Zone 1 - Back straight • Detection before Turn 12",
        "Zone 2 - Start/Finish straight • Detection before Turn 16",
      ],
      schedule: [
        { session: "Practice 1", time: "Fri - 11:30" },
        { session: "Practice 2", time: "Fri - 15:00" },
        { session: "Practice 3", time: "Sat - 12:00" },
        { session: "Qualifying", time: "Sat - 15:00" },
        { session: "Race", time: "Sun - 14:00" },
      ],
    },
    suzuka: {
      name: "Suzuka Circuit",
      location: "Suzuka, Japan",
      imgSrc: "/images/suzuka.webp",
      overview:
        "Suzuka is one of Formula 1's most iconic circuits, famous for its unique figure-eight layout and challenging flow. Fast corners like 130R and the sweeping 'S Curves' demand precision and bravery, while its technical middle sector rewards balance and rhythm. With rich history and passionate fans, Suzuka is regarded as a true test of driver skill and one of the sport's classic venues.",
      facts: {
        length: "5.807 km",
        distance: "53 laps • 307.471 km",
        corners: "18",
        elevation: "~40 m",
        direction: "Clockwise",
        firstGP: "1987",
        lapRecord: "1:30.983 - Lewis Hamilton (2019)",
      },
      drsZones: ["Zone 1 - Start/Finish straight • Detection before Turn 16"],
      schedule: [
        { session: "Practice 1", time: "Fri - 11:30" },
        { session: "Practice 2", time: "Fri - 15:00" },
        { session: "Practice 3", time: "Sat - 12:00" },
        { session: "Qualifying", time: "Sat - 15:00" },
        { session: "Race", time: "Sun - 14:00" },
      ],
    },
    bahrain: {
      name: "Bahrain International Circuit",
      location: "Sakhir, Bahrain",
      imgSrc: "/images/bahrain.jpg",
      overview:
        "A modern desert venue defined by heavy braking zones and long straights, Bahrain rewards traction and top speed. The stop-start layout creates multiple overtaking opportunities—especially into Turns 1, 4, and 11—while abrasive asphalt, wind, and shifting temperatures add strategy wrinkles for tyres and cooling. Night races under the lights make it a dramatic season staple.",
      facts: {
        length: "5.412 km",
        distance: "57 laps • 308.484 km",
        corners: "15",
        elevation: "~11 m",
        direction: "Clockwise",
        firstGP: "2004",
        lapRecord: "1:31.447 - Pedro de la Rosa (2005)",
      },
      drsZones: [
        "Zone 1 - Start/Finish straight • Detection before T14",
        "Zone 2 - T3 to T4 straight • Detection after T1",
        "Zone 3 - Between T10 and T11 • Detection after T9",
      ],
      schedule: [
        { session: "Practice 1", time: "Fri - 11:30" },
        { session: "Practice 2", time: "Fri - 15:00" },
        { session: "Practice 3", time: "Sat - 12:00" },
        { session: "Qualifying", time: "Sat - 15:00" },
        { session: "Race", time: "Sun - 14:00" },
      ],
    },
    jeddah: {
      name: "Jeddah Corniche Circuit",
      location: "Jeddah, Saudi Arabia",
      imgSrc: "/images/jeddah.jpg",
      overview:
        "One of the fastest street circuits in Formula 1, Jeddah strings together long, flowing, high-speed sweeps hemmed by close walls. The lap rewards commitment and aerodynamic efficiency, with brave side-by-side moves possible into the heavy-braking finales. Night conditions and coastal winds add an extra layer of challenge.",
      facts: {
        length: "6.174 km",
        distance: "50 laps • 308.700 km",
        corners: "27",
        elevation: "~10 m",
        direction: "Counter-clockwise",
        firstGP: "2021",
        lapRecord: "1:30.734 - Lewis Hamilton (2021)",
      },
      drsZones: [
        "Zone 1 - Start/Finish straight • Detection near T27",
        "Zone 2 - Between T20-T22 • Detection before T17",
        "Zone 3 - Between T25-T27 • Detection after T22",
      ],
      schedule: [
        { session: "Practice 1", time: "Fri - 11:30" },
        { session: "Practice 2", time: "Fri - 15:00" },
        { session: "Practice 3", time: "Sat - 12:00" },
        { session: "Qualifying", time: "Sat - 15:00" },
        { session: "Race", time: "Sun - 14:00" },
      ],
    },
    miami: {
      name: "Miami International Autodrome",
      location: "Miami, USA",
      imgSrc: "/images/miami3.avif",
      overview:
        "A fast, anti-clockwise temporary circuit wrapped around Hard Rock Stadium. Miami blends long full-throttle runs with a tight, technical stadium section and a heavy-braking hairpin at Turn 17. Mostly flat with some engineered elevation over the T14-T15 chicane, it rewards top-speed efficiency, traction, and confidence under braking.",
      facts: {
        length: "5.412 km",
        distance: "57 laps • 308.326 km",
        corners: "19",
        elevation: "~7 m",
        direction: "Anti-clockwise",
        firstGP: "2022",
        lapRecord: "1:29.708 - Max Verstappen (2023)",
      },
      drsZones: [
        "Zone 1 - T9 to T11 run • Detection 90 m after T8",
        "Zone 2 - Back straight to T17 • Detection 70 m after T16",
        "Zone 3 - Start/Finish straight • Detection 15 m after T17",
      ],
      schedule: [
        { session: "Practice 1", time: "Fri - 11:30" },
        { session: "Practice 2", time: "Fri - 15:00" },
        { session: "Practice 3", time: "Sat - 12:00" },
        { session: "Qualifying", time: "Sat - 15:00" },
        { session: "Race", time: "Sun - 14:00" },
      ],
    },
  };

  const circuit = circuitData[slug];

  if (!circuit) {
    return (
      <main className="container">
        <h1>Circuit not found</h1>
      </main>
    );
  }

  return (
    <>
      <section className="hero hero--tight">
        <div className="container">
          <h1>{circuit.name}</h1>
          <p className="lede">{circuit.location}</p>
        </div>
      </section>

      <main className="container">
        <section className="track-layout">
          <div className="track-left">
            <figure className="track-media">
              <img src={circuit.imgSrc} alt={`${circuit.name} map`} />
            </figure>

            <section className="track-overview">
              <h2>Overview</h2>
              <p className="muted">{circuit.overview}</p>
            </section>
          </div>

          <aside className="track-facts">
            <h2>Key Facts</h2>
            <ul className="fact-list">
              <li>
                <span className="k">Circuit Length</span>
                <span className="v">{circuit.facts.length}</span>
              </li>
              <li>
                <span className="k">Race Distance</span>
                <span className="v">{circuit.facts.distance}</span>
              </li>
              <li>
                <span className="k">Corners</span>
                <span className="v">{circuit.facts.corners}</span>
              </li>
              <li>
                <span className="k">Elevation Change</span>
                <span className="v">{circuit.facts.elevation}</span>
              </li>
              <li>
                <span className="k">Direction</span>
                <span className="v">{circuit.facts.direction}</span>
              </li>
              <li>
                <span className="k">First GP</span>
                <span className="v">{circuit.facts.firstGP}</span>
              </li>
              <li>
                <span className="k">Lap Record (F1)</span>
                <span className="v">{circuit.facts.lapRecord}</span>
              </li>
            </ul>

            <h3>DRS Zones</h3>
            <ul className="drs-list">
              {circuit.drsZones.map((zone, index) => (
                <li key={index}>{zone}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="track-section">
          <h2>Weekend Schedule</h2>
          <div className="table-wrap">
            <table className="schedule">
              <thead>
                <tr>
                  <th>Session</th>
                  <th>Local Time</th>
                </tr>
              </thead>
              <tbody>
                {circuit.schedule.map((item, index) => (
                  <tr key={index}>
                    <td>{item.session}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
};

export default CircuitDetail;
