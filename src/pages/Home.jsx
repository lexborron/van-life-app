import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <main>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="btn orange-btn home-cta">
          Find your van
        </Link>
      </main>
    </div>
  );
}

export default Home;
