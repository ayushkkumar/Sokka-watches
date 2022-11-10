import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResponse = await axios.post("http://localhost:8000/login", {
      email,
      password,
    });
    if (apiResponse.data.status == 200) {
      localStorage.setItem("token", "secToken");
      navigate("/home");
    }
    else{
      alert("Credentials incorrect");
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
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSubmit}>Login</button>
                <br></br>
                <br></br>
                <Link class="link-w" to="/signup">New here? Create an account!</Link>
                <br></br>
                <br></br>
                <Link class="link-w" to="/contactus">Contact Us</Link>
            </form>
            
        </div>
    </div>
    </>
  );
};

export default Login;
