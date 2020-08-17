import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function ModalPemenang(props) {
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
                    onClick={props.handleClosePemenang}
                    type="button"
                    className="close close-x-white"
                    style={{ zIndex: "99" }}
                >
                    <span aria-hidden="true">&times;</span>
                </button>

                <div>
                    <div class="content">
                        <div class="wrapper-pemenang">
                            <div class="left-content-1" >
                                <div class="left-content">
                                    <p className="text-left">Virtual Photoshoot</p>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Juara 1 - Afriezal Raeshandhi</p>
                                            <img className="kotak-img" src={require("../assets/img/1.2.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Juara 2 - Afriezal Raeshandhi</p>
                                            <img className="kotak-img" src={require("../assets/img/1.1.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Juara 3 - Afriezal Raeshandhi</p>
                                            <img className="kotak-img" src={require("../assets/img/1.3.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Juara 4 - Annisa Noor Andriani</p>
                                            <img className="kotak-img" src={require("../assets/img/2.7.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Juara 5 - Ihsan W. Prabawa</p>
                                            <img className="kotak-img" src={require("../assets/img/1.6.jpg")} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="left-content-1" >
                                <div class="left-content">
                                    <p className="text-right">Live Painting</p>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Juara 1 - Gde Agus Dwijaya</p>
                                            <img className="kotak-img" src={require("../assets/painting/b2.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Juara 2 - Vrendy Luis</p>
                                            <img className="kotak-img" src={require("../assets/painting/b3.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Juara 3 - YudhYa Pratidna Rosady</p>
                                            <img className="kotak-img" src={require("../assets/painting/h3.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Juara Hiburan 1 - Halda Khasanah Putri</p>
                                            <img className="kotak-img" src={require("../assets/painting/h1.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Juara Hiburan 2 - Fitri Maharani Indra</p>
                                            <img className="kotak-img" src={require("../assets/painting/c1.jpg")} alt="" />
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

export default ModalPemenang