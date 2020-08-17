import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Background(props) {
    const style = {
        animation:
            "1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running fade-in-up",
    };
    const dispatch = useDispatch()
    return (
        <div className="container">
            <div className="title-container">
                <div className="title-item">
                    <img src={require("../assets/logo digifestabi.png")} width="500" alt="" />
                </div>
                <div className="desc-item">
                    <p style={{ fontFamily: "Montserrat" }}>Inovasi lahir dari sebuah kebutuhan. Meski diwarnai pandemi, bukan berarti produktivitas terhenti di 2020.
                    Memperingati HUT BI ke-67 dan HUT RI ke-75, Bank Indonesia tetap menyelenggarakan Festival Talenta Bank Indonesia (Festabi), dalam bentuk virtual. Digifestabi 2020 menghadirkan berbagai inovasi kegiatan berbasis teknologi virtual, termasuk lomba-lomba di bidang seni. Pemanfaatan infrastruktur digital pun ternyata memberi nilai tambah; kegiatan kini tak hanya milik pegawai di Kantor Pusat, namun mampu melibatkan seluruh keluarga besar Bank Indonesia di kantor perwakilan, baik dalam maupun luar negeri.
                    Hilangnya batasa wilayah ini merupakan suatu langkah awal pencapaian visi BI menjadi “The First & Best Central Bank 4.0”.</p>
                </div>
                <div className="button-winner">
                    <button onClick={props.handleShowPemenang}>
                        Lihat Pemenang
                    </button>
                    {/* <a href="http://www.google.com"><img src="./assets/icon/emoji_events-24px.svg" alt="" /></a> */}
                </div>
            </div>

            <div className="content-container">
                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>


                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div className="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div className="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>
            </div>
            <div class="logo-container">
                <div class="logo-bi">
                    <img id="logo-bi" src={require("../assets/LOGO UTUH BIRU.jpeg")} alt="" />
                </div>
                <div class="logo-ipebi">
                    <img id="logo-ipebi" style={{ height: "11.8vh" }} src={require("../assets/LOGO IPEBI Print A4-01.jpeg")} alt="" />
                </div>
            </div>
        </div >
    )
}

export default Background