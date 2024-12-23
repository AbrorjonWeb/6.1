import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <div className="header">
          <img className="logo" src={logo} alt="" />
          <ul>
            <li>
              <a href="">Product</a>
            </li>
            <li>
              <a href="">Template</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
          </ul>
          <div className="sign">
            <button>Sign In</button>
            <button>Start Free</button>
          </div>
        </div>
        <div className="main">
          <div className="main_text">
            <h1>Managing business payments has never been easier</h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything.
            </p>
            <div>
              <button>Our Process</button>
              <button></button>
              <p>See How It Works</p>
            </div>
          </div>
          <div className="main_input">
            <h6>Get Started for Free</h6>
            <label htmlFor="">
              <input
                type="text"
                name="email"
                id=""
                placeholder="Email Address"
              />
              <input
                type="password"
                name="password"
                id=""
                placeholder="Password"
              />
            </label>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
