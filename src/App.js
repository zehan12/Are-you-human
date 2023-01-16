import { Fragment, useState } from 'react';
import './App.css';
import { TiTick } from "react-icons/ti";
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import { Toaster } from 'react-hot-toast';


function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [selected, setSelected] = useState([]);

  const Loader = () => {
    return (
      <div class="ripple-loader">
        <div></div>
        <div></div>
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    if (email.trim().length === 0) console.log("enter value ")
    if (password.trim().length === 0) console.loc("enter password")
    if (!isHuman) console.log("first verify")

  }


  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      // setIsHuman(true)
      setShowModal(true)
      setLoading(false)
    }, 2000);
  }

  const handleModal = () => {
    setShowModal(!showModal);
  }


  return (

    <Fragment>
      <Header />
      <Modal show={showModal} />
      <main id="main-holder">
        <h1 id="login-header">Login</h1>
        <div id="login-error-msg-holder">
          <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
        </div>
        <form id="login-form" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email-field" class="login-form-field" placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.password)} type="password" name="password" id="password-field" class="login-form-field" placeholder="Password" />


        <div class="captcha-container">
          <div class="captcha-left">
            {
              loading ? <Loader /> :
                isHuman ? <TiTick color='green' size={50} /> :
                  <div onClick={handleClick} style={{ width: "50px", height: "50px", border: "3px solid #C1C1C1" }}></div>
            }
            <div style={{ fontSize: "20px", fontWeight: "300", margin: "0 10px" }}>I' m not a robot</div>
          </div>

          <div class="captcha-right">
            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA logo" />
            <span>reCAPTCHA</span>
            <br />
            <div style={{ display: "flex", fontSize: "13px", textDecoration: "none", marginTop: "-20px" }}>
              <a style={{ textDecoration: "none" }} href="#">Privacy</a>
              <span>-</span>
              <a style={{ textDecoration: "none" }} href="#">Terms</a>
            </div>
          </div>
        </div>
        <input type="submit" onClick={(e) => handleSubmit()} value="Login" id="login-form-submit" />

      </main>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontFamily: "sans-serif",
            fontSize: '14px',
            fontWeight: "500"
          },
        }}
      />

    </Fragment>
  );
}

export default App;
