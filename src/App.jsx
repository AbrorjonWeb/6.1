import { useState } from "react";
import logo from "./assets/logo.svg";
import play from "./assets/logos.svg";
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
              <button>See How It Works</button>
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
        <div className="trust">
          <h6>Trusted By Over 100+ Startups and freelance business</h6>
          <img src="" alt="" />
          <h3>Believing neglected so so allowance</h3>
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
          </p>
          <button>We so opinion friends me message as delight.</button>
        </div>
        <div className="cards">
          <div>
            <h6 className="title_card">Led Ask Possible Mistress</h6>
            <p className="text_card">
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div>
            <h6 className="title_card">Led Ask Possible Mistress</h6>
            <p className="text_card">
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
          <div>
            <h6 className="title_card">Led Ask Possible Mistress</h6>
            <p className="text_card">
              Connection has put impossible own apartments boisterous. At
              jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
