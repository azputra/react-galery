import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function ModalCoklat(props) {
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
                    onClick={props.handleCloseModalCoklat}
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
                                <h1 className="text-white title-right">Lomba Live Painting Digifestabi 2020</h1>
                                <p className="text-white desc-right">Untuk pertama kalinya, BI menyelenggarakan lomba melukis secara langsung yang dapat diikuti perwakilan pegawai dari seluruh nusantara. Lomba Live Painting Digifestabi 2020 diselenggarakan secara secara virtual di hadapan juri melalui video conference. Para seniman lukis BI hanya diberi waktu 120 menit untuk mulai menyusun hingga mengunggah foto karyanya. Waktu yang singkat terbukti tak menjadi halangan untuk terciptanya sebuah karya yang menggugah, yang mengambil sudut pandang digitalisasi Bank Indonesia, kecintaan pada negeri, atau optimisme di tengah pandemi.</p>
                            </div>
                            <div class="left-content-1" >
                                <div class="left-content">
                                    <p className="text-right">Live Painting</p>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Fitri Maharani Indra - Bank Indonesia</p>
                                            <img className="kotak-img" src={require("../assets/painting/c1.jpg")} alt="" />
                                        </div>
                                    </div>
                                    <div className="row mt-6">
                                        <div className="col" style={{ width: "100%", padding: "0", height: "100%" }}>
                                            <p className="judul">Hirni Melani - Membangkitkan Optimisme</p>
                                            <img className="kotak-img" src={require("../assets/painting/c2.jpg")} alt="" />
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

export default ModalCoklat