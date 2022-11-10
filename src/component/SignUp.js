import "./style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResponse = await axios.post("http://localhost:8000/signup", {
      email,
      password,
      name,
    });
    if (apiResponse.data.status == 200) {
      navigate("/");
    }
    else{
      alert("Something went wrong!");
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
                    type="password"
                    placeholder="Create password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Full name"
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={handleSubmit}>Create account</button>
                <br></br>
                <br></br>
                <Link class="link-w" to="/">Login Here</Link>
            </form>
            
        </div>
    </div>
    </>
  );
};

export default Signup;
