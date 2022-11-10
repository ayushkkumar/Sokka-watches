import "./style.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResponse = await axios.post("http://localhost:8000/contactus", {
      email,
      query,
      name,
    });
    if (apiResponse.data.status == 200) {
      alert("query sent successfully");
      navigate("/");
    }
  };
  return (
    <>
      <div class="main-w">
        <div class="main-left-w">
          <h1 class="sokka1">Sokka<sup>TM</sup></h1>
          <h2 class="sokka2">Watches.</h2>
          <h3 class="sokka3">Immaculate construction.</h3>
        </div>

        <div class="main-right-w">
          <form class="form-w" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your query! Thank you :)"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSubmit}>Send message</button>
            <br></br>
            <br></br>
            <Link class="link-w" to="/">Login Here</Link>  
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
