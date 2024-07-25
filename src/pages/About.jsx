import aboutHero from "../assets/images/about-hero.png";

function About() {
  return (
    <>
      <main className="about-container">
        <img src={aboutHero} />
        <div className="main-text">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="call-to-action">
          <h2>Your destination is waiting. Your van is ready.</h2>
          <button>Explore our vans</button>
        </div>
      </main>
    </>
  );
}

export default About;
