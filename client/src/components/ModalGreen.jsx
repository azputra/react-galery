import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function ModalGreen(props) {
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
                    onClick={props.handleCloseModalGreen}
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
                                    <p className="text-left">Virtual Photoshoot</p>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Julianor</p>
                                            <img className="kotak-img" src={require("../assets/img/5.1.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Julianor</p>
                                            <img className="kotak-img" src={require("../assets/img/5.2.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Julianor</p>
                                            <img className="kotak-img" src={require("../assets/img/5.3.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Mardian Adiwirma</p>
                                            <img className="kotak-img" src={require("../assets/img/5.4.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Mardian Adiwirma</p>
                                            <img className="kotak-img" src={require("../assets/img/5.5.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Mardian Adiwirma</p>
                                            <img className="kotak-img" src={require("../assets/img/5.6.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Budianto</p>
                                            <img className="kotak-img" src={require("../assets/img/5.7.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Budianto</p>
                                            <img className="kotak-img" src={require("../assets/img/5.8.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Budianto</p>
                                            <img className="kotak-img" src={require("../assets/img/5.9.jpg")} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right-content">
                                <h1 className="text-white title-right">Lomba Virtual Photoshoot Digifestabi 2020 </h1>
                                <p className="text-white desc-right">Virtual Photoshoot merupakan suatu inovasi di bidang fotografi dengan cara melakukan pengambilan hasil karya foto melalui video conference. Lomba Virtual Photoshoot Digifestabi 2020 memberi pengalaman baru bagi talenta-talenta fotografi Bank Indonesia. Alih-alih sesi foto secara live, para fotografer membidikkan kameranya ke laptop dan mengarahkan model yang berada di sisi lain layar. Mengambil tema “Generasi Muda Indonesia sebagai Inspirasi Transformasi Digital”, para fotografer BI telah mampu menunjukkan kebolehannya dengan menghasilkan foto-foto berkualitas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalGreen