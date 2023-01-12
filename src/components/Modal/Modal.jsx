import { Fragment } from "react";
import "./Modal.css"

const Modal = ({
    handleClose,
    show
}) => {

    const puzzelImage = [
        {
            name: "Cars",
            images: [
                {
                    is: true,
                    image: ""
                },
                {
                    is: false,
                    image: ""
                },
                {
                    is: true,
                },
                {
                    is: true,
                    image: ""
                },
                {
                    is:false,
                    image:""
                },
                {
                    is:false,
                    image:""
                }
            ]
        }
    ]

    console.log(puzzelImage[0])

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
                                    <h3>Bridge</h3>
                                    <p>if There are none then move foreward</p>
                                </div>

                            </div>
                            <div>

                            </div>
                            <div className="btn-c">
                                <button className="verify">
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