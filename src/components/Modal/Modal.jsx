import { Fragment, useState } from "react";
import "./Modal.css";
import puzzelImage from "../../data/images";
import toast from 'react-hot-toast';


const Modal = ({
    handleClose,
    show
}) => {

    const [tick, setTick] = useState([])
    const handleTick = (id) => {
        if (tick.includes(id)) {
            setTick(tick.filter((i) => i !== id));
        } else {
            setTick([...tick, id]);
        }
    };

    const handleVerify = () => {
        let trueCount = 0;
        for (let i = 0; i < puzzelImage.length; i++) {
            trueCount += puzzelImage[i].verified ? 1 : 0;
        }
        if (tick.length !== trueCount) {
            toast.error("Incorrect captcha. Please try again.");
        } else {
            let isCorrect = true;
            for (let i = 0; i < tick.length; i++) {
                if (!puzzelImage[tick[i] - 1].verified) {
                    isCorrect = false;
                    break;
                }
            }
            if (isCorrect) {
                toast.success("Captcha is correct. User verified.")
            } else {
                toast.error("Incorrect captcha. Please try again.")
            }
        }
    };

    console.log(tick, "every")

    return (
        <Fragment>
            {
                show &&
                (
                    <div style={{ background: "rgba(0, 0, 0, .1)" }} className="modal-overlay">
                        <div className="modal-content">
                            {/* <button onClick={closeModal}>Close Modal</button> */}
                            <div className="top-box">
                                <div>
                                    <p>Select all Squares with</p>
                                    <h3>Cross Walk</h3>
                                    <p>Click verify once there are none left</p>
                                </div>
                            </div>
                            <div className="grid">
                                {
                                    puzzelImage.map((v) =>
                                        <div key={v.id} onClick={() => handleTick(v.id)} >
                                            <img className="img-grid" style={{ border: tick.includes(v.id) ? "4px solid rgb(74,144,226)" : "4px solid white" }} src={v.image} alt={v.id} />
                                        </div>)
                                }
                            </div>
                            <div className="btn-c">
                                <button onClick={handleVerify} className="verify">
                                    verify
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment >
    )
};

export default Modal;