import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import modal from "../assets/modal1.jpeg";

function ModalUtamaYellow(props) {
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
                    onClick={props.handleCloseYellow}
                    type="button"
                    className="close close-x"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="row mt-15">
                    <div className="col grid-center cropped">
                        <img className="square" src={modal} />
                        <h2
                            style={{ fontFamily: "anton" }}
                            className="text-white mt-4 m-0"
                        >
                            VIRTUAL PHOTOSHOOT
                                </h2>
                        <p className="text-white">
                            lorem ipsum this is a gallery of photo.
                                </p>
                        <div className="flex-center">
                            {/* ketiga yang mau di klik kasih onClick handleShowModalRed*/}
                            <div className="kotak-kecil bg-red m-0_5 cursor-pointer" onClick={props.handleShowModalRed} />
                            <div className="kotak-kecil bg-orange m-0_5 cursor-pointer" onClick={props.handleShowModalOrange} />
                            <div className="kotak-kecil bg-brown m-0_5 cursor-pointer" onClick={props.handleShowModalBrown} />
                            <div className="kotak-kecil bg-yellow m-0_5 cursor-pointer" onClick={props.handleShowModalYellow} />
                            <div className="kotak-kecil bg-color m-0_5 cursor-pointer" onClick={props.handleShowModalGreen} />
                            <div className="kotak-kecil bg-blue m-0_5 cursor-pointer" onClick={props.handleShowModalBlue} />
                        </div>
                    </div>
                    <div className="col grid-center cropped">
                        <img className="square" src={modal} />
                        <h2 className="mt-4 m-0 text-white" style={{ fontFamily: "anton", }} >LIVE PAINTING</h2>
                        <p className="text-white">
                            lorem ipsum this is a gallery of painting.
                                </p>
                        <div className="flex-center">
                            <div className="kotak-kecil bg-red m-0_5 cursor-pointer" onClick={props.handleShowModalMerah} />
                            <div className="kotak-kecil bg-orange m-0_5 cursor-pointer" onClick={props.handleShowModalJingga} />
                            <div className="kotak-kecil bg-brown m-0_5 cursor-pointer" onClick={props.handleShowModalCoklat} />
                            <div className="kotak-kecil bg-yellow m-0_5 cursor-pointer" onClick={props.handleShowModalKuning} />
                            <div className="kotak-kecil bg-color m-0_5 cursor-pointer" onClick={props.handleShowModalHijau} />
                            <div className="kotak-kecil bg-blue m-0_5 cursor-pointer" onClick={props.handleShowModalBiru} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUtamaYellow