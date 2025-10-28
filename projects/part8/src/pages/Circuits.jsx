import CircuitCard from "../components/CircuitCard";
import circuitsData from "../data/circuits.json";
import "./../css/Circuits.css";

const Circuits = () => {
  return (
    <>
      <section className="hero hero--tight">
        <div className="container">
          <h1>Circuits</h1>
          <p className="lede">
            Explore the 2025 Formula One circuits - from historic tracks to the
            newest additions on the calendar.
          </p>
        </div>
      </section>

      <main className="container">
        <section className="circuits-grid" aria-label="Circuit cards">
          {circuitsData.map((circuit) => (
            <CircuitCard
              key={circuit._id}
              name={circuit.name}
              location={circuit.location}
              imgName={circuit.img_name}
              slug={circuit.slug}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Circuits;
