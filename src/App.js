import { useState } from 'react';
import './App.css';
import { TiTick } from "react-icons/ti";
import Modal from './components/Modal/Modal';

function App() {

  const [loading, setLoading] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [showModal, setShowModal] = useState(false)

  const Loader = () => {
    return (
      <div class="ripple-loader">
        <div></div>
        <div></div>
      </div>
    )
  }

  const handleClick = () => {
    setLoading(true);

    setShowModal(true)
    setTimeout(() => {
      setIsHuman(true)
      setLoading(false)
    }, 5000);
  }

  const handleModal = () => {
    setShowModal(!showModal);
  }


  return (
    <div className="App">

      <Modal show={showModal} />

      <h1>Login Form</h1>
      <label>email</label>
      <input type="text" />
      <br />
      <label>Password</label>
      <input type="password" />
      <div>
        <p>Are you a human ?</p>
      </div>



      <div style={{ height: "6rem", width: "30rem", margin: "0 auto", border: "1px solid #C1C1C1", display: "flex", justifyContent: "space-between", gap: "10px", alignItems: "center", padding: "14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {
            loading ? <Loader /> :
              isHuman ? <TiTick color='green' size={50} /> :
                <div onClick={handleClick} style={{ width: "50px", height: "50px", border: "3px solid #C1C1C1" }}></div>

          }
          <div style={{ fontSize: "20px", fontWeight: "600" }}>I' m not a robot</div>
        </div>

        <div style={{ width: "100px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <img height="50%" width="50%" src="https://www.gstatic.com/recaptcha/api2/logo_48.png" />
          <span>reCAPTCHA</span>
          <br />
          <div style={{ display: "flex", fontSize: "13px", textDecoration: "none", marginTop: "-20px" }}>
            <a style={{ textDecoration: "none" }} href="#">Privacy</a>
            <span>-</span>
            <a style={{ textDecoration: "none" }} href="#">Terms</a>
          </div>
        </div>

      </div>

      <button>Submit</button>

    </div>
  );
}

export default App;
