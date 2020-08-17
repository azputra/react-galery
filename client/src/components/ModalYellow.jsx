import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function ModalYellow(props) {
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
                    onClick={props.handleCloseModalYellow}
                    type="button"
                    className="close close-x-white"
                    style={{ zIndex: "99" }}
                >
                    <span aria-hidden="true">&times;</span>
                </button>

                <div>
                    <div class="content">
                        <div class="wrapper">
                            <div class="left-content-1" >
                                <div class="left-content">
                                    <div className="row m-0">
                                        <p className="text-left">si malih anak pasar jangkrik</p>
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <div style={{ backgroundColor: "#f6a9dc", width: "100%", height: "50vh", borderRadius: "4vh" }}></div>
                                        </div>
                                        {/* <h1 className="title">BUNGON JEMPA</h1> */}
                                        {/* <p className="nama-pengarang">Di buat oleh pak sutyadi</p> */}
                                        {/* <p className="nama-pengarang">Pada tahun 2019</p> */}
                                    </div>
                                    <div className="row" style={{ margin: "5vh 0 0 0" }}>
                                        <div className="col" style={{ maxWidth: "48%", padding: "0", height: "100%" }}>
                                            <div style={{ backgroundColor: "#f6a9dc", width: "100%", height: "55vh", borderRadius: "4vh" }}></div>
                                        </div>
                                        {/* <h1 className="title">BUNGON JEMPA</h1> */}
                                        {/* <p className="nama-pengarang">Di buat oleh pak sutyadi</p> */}
                                        {/* <p className="nama-pengarang">Pada tahun 2019</p> */}
                                    </div>
                                    <div className="row" style={{ margin: "5vh 0 0 0", display: "flex", justifyContent: "space-between" }}>
                                        <div className="col" style={{ maxWidth: "48%", padding: "0", height: "100%" }}>
                                            <div style={{ backgroundColor: "#fedfc6", width: "100%", height: "40vh", borderRadius: "4vh" }}></div>
                                        </div>
                                        <div className="col" style={{ maxWidth: "48%", padding: "0", height: "100%" }}>
                                            <div style={{ backgroundColor: "#fec55c", width: "100%", height: "40vh", borderRadius: "4vh" }}></div>
                                        </div>
                                        {/* <h1 className="title">BUNGON JEMPA</h1> */}
                                        {/* <p className="nama-pengarang">Di buat oleh pak sutyadi</p> */}
                                        {/* <p className="nama-pengarang">Pada tahun 2019</p> */}
                                    </div>
                                </div>
                            </div>
                            <div class="right-content">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalYellow