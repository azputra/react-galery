import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import modal from "../assets/modal1.jpeg";

function ModalUtamaBrown(props) {
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
                    onClick={props.handleCloseBrown}
                    type="button"
                    className="close close-x"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="row mt-15">
                    <div className="col grid-center cropped">
                        <img className="square cursor-pointer" src={modal} onClick={props.handleShowModalBrown} />
                        <h2
                            style={{ fontFamily: "anton" }}
                            className="text-white mt-4 m-0 cursor-pointer"
                            onClick={props.handleShowModalBrown}
                        >
                            VIRTUAL PHOTOSHOOT
                                </h2>
                        <p className="text-white">
                            lorem ipsum this is a gallery of photo.
                        </p>
                    </div>
                    <div className="col grid-center cropped">
                        <img className="square cursor-pointer" src={modal} onClick={props.handleShowModalCoklat} />
                        <h2 className="mt-4 m-0 text-white cursor-pointer" style={{ fontFamily: "anton" }} onClick={props.handleShowModalCoklat}>LIVE PAINTING</h2>
                        <p className="text-white">
                            lorem ipsum this is a gallery of painting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUtamaBrown