import "./style.css";
import "./style2.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const handleSubmit = (e) => {
    localStorage.clear();
    navigate("/");
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
    <section id="photo-w">
      <button class="independent-w" onClick={handleSubmit}>Log Out</button>
      <Link class="link-w independent-w-2 independent-w" to="/contactus">Contact Us</Link>
      <div class="main-w">
        <div class="main-left-w">
          <h1 class="sokka1">Sokka<sup>TM</sup></h1>
          <h2 class="sokka2">Watches.</h2>
          <h3 class="sokka3">Immaculate construction.</h3>
        </div>

        <div class="main-right-w">
            <p class="headS-1">
              For over a century, Sokka watches have accompanied explorers and achievers around the world, from the top of the highest mountains to the deepest reaches of the ocean.
            </p>
            <br></br>
            <p class="headS-2">
              Today, Sokka is present at the most prestigious events in golf, sailing, tennis, motor sport, and at equestrian tournaments. Sokka makes a unique and lasting contribution to global culture, science and exploration.
            </p>
        </div>
      </div>
      </section>
      <main>
        <div id="product-head">
            <h2>Our Catalog</h2>
        </div>
        <div id="grid">
            <div class="card">
            </div>
            <div class="card">
            </div>
            <div class="card">
            </div>
            <div class="card">
            </div>
            <div class="card">
            </div>
            <div class="card">
                <div class="time"></div>
            </div>
            <div class="card">
            </div>
            <div class="card">
            </div>
            <div class="card">
            </div>
            <div class="card">
            </div>
            <div class="card">
            </div>
            <div class="card">
            </div>
        </div>
        
    </main>
    </>
  );
};

export default Home;
