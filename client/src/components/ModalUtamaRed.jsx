import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import modal from "../assets/modal1.jpeg";
import painting from "../assets/Biru_gde agus_14346_kita semua bisa.jpg";

function ModalUtamaRed(props) {
    const style = {
        animation:
            "1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running fade-in-up",
    };
    const dispatch = useDispatch()
    return (
        <div
            className="modal-container"
            style={style}
        >
            <div className="modal-body">
                <button
                    onClick={props.handleCloseRed}
                    type="button"
                    className="close close-x"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="row mt-15">
                    <div className="col grid-center cropped">
                        <img className="square cursor-pointer" src={modal} onClick={props.handleShowModalRed} />
                        <h2
                            className="text-white mt-2_5 cursor-pointer text-title"
                            onClick={props.handleShowModalRed}
                        >
                            VIRTUAL PHOTOSHOOT
                        </h2>
                    </div>
                    <div className="col grid-center cropped">
                        <img className="square cursor-pointer" src={painting} onClick={props.handleShowModalMerah} />
                        <h2 className="mt-2_5 text-white cursor-pointer text-title" onClick={props.handleShowModalMerah} >LIVE PAINTING</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUtamaRed