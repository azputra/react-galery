import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function ModalBiru(props) {
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
            <div className="modal-body-red">
                <button
                    onClick={props.handleCloseModalBiru}
                    type="button"
                    className="close close-x-white"
                    style={{ zIndex: "99" }}
                >
                    <span aria-hidden="true">&times;</span>
                </button>

                <div>
                    <div class="content">
                        <div class="wrapper-painting">
                            <div class="right-content">
                            </div>
                            <div class="left-content-1" >
                                <div class="left-content">
                                    <div className="row m-0">
                                        {/* <p className="text-left">si malih anak pasar jangkrik</p> */}
                                        {/* <div class="content-item" id="item1"></div> */}
                                        <div className="col">
                                            <div style={{ backgroundColor: "#f6a9dc", height: "55vh", width: "70vh", borderRadius: "4vh" }}></div>
                                        </div>

                                        <div className="col">
                                            <div style={{ backgroundColor: "#f6a9dc", height: "55vh", width: "70vh", borderRadius: "4vh" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBiru