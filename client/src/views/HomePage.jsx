import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { animations, AnimateOnChange } from "react-animation";
import { CSSTransition } from "react-transition-group";
import modal from "../assets/modal1.jpeg";
import Background from "./Background";

// 2
import ModalRed from "../components/ModalRed"
import ModalBlue from "../components/ModalBlue"
import ModalBrown from "../components/ModalBrown"
import ModalOrange from "../components/ModalOrange"
import ModalUtama from "../components/ModalUtama"
import ModalYellow from "../components/ModalYellow"
import ModalGreen from "../components/ModalGreen"


function Home(props) {
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [showModal2, setshowModal2] = useState(false);

    // setPainting
    const [modalRed, setModalRed] = useState(false);
    const [modalOrange, setModalOrange] = useState(false);
    const [modalBrown, setModalBrown] = useState(false);
    const [modalBlue, setModalBlue] = useState(false);
    const [modalGreen, setModalGreen] = useState(false);
    const [modalYellow, setModalYellow] = useState(false);

    //setPhoto

    const style = {
        animation:
            "1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running fade-in-up",
    };

    const styleOut = {
        animation:
            "1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running slide-out",
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseModal2 = () => setshowModal2(false);
    const handleShowModal2 = () => setshowModal2(true);

    // tambahin variabel buat setstate
    const handleCloseModalRed = () => setModalRed(false);
    const handleShowModalRed = () => setModalRed(true);

    const handleCloseModalOrange = () => setModalOrange(false);
    const handleShowModalOrange = () => setModalOrange(true);

    const handleCloseModalBrown = () => setModalBrown(false);
    const handleShowModalBrown = () => setModalBrown(true);

    const handleCloseModalYellow = () => setModalYellow(false);
    const handleShowModalYellow = () => setModalYellow(true);

    const handleCloseModalGreen = () => setModalGreen(false);
    const handleShowModalGreen = () => setModalGreen(true);

    const handleCloseModalBlue = () => setModalBlue(false);
    const handleShowModalBlue = () => setModalBlue(true);

    useEffect(() => { }, []);

    //   Background

    return (
        <div>
            <section className="pen">
                <div className="panel top">
                    <h1
                        style={{
                            paddingTop: "40vh",
                            position: "relative",
                            textAlign: "center",
                            fontFamily: "anton",
                            fontSize: "10vh",
                            fontWeight: "bold",
                            marginBottom: "0"
                        }}
                    >
                        DIGIFESTA BI
                    </h1>
                    <h4 style={{
                        position: "relative",
                        textAlign: "center",
                        fontSize: "5vh",
                        fontWeight: "bold",
                    }}>
                        {" "}
                        Bank Indonesia
                    </h4>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div onClick={handleShow} id="btn">
                            <span className="noselect">Klik</span>
                            <div id="circle"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Option */}
            {show !== false ? (
                <ModalUtama
                    handleClose={handleClose}
                    handleShowModalRed={handleShowModalRed}
                    handleShowModalOrange={handleShowModalOrange}
                    handleShowModalBrown={handleShowModalBrown}
                    handleShowModalYellow={handleShowModalYellow}
                    handleShowModalGreen={handleShowModalGreen}
                    handleShowModalBlue={handleShowModalBlue}
                />
            ) : (
                    <div></div>
                )}

            {/* stop copas */}

            {showModal2 !== false ? (
                <div
                    className="modal-container"
                    style={showModal2 ? style : styleOut}
                >
                    <div className="modal2-body">
                        <button
                            onClick={handleCloseModal2}
                            type="button"
                            className="close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="row">
                            <div className="col grid-center cropped">
                                <img className="square" src={modal} />
                                <h2 className="App-link mt-4 m-0 cursor-pointer">
                                    Virtual Photoshoot
                    </h2>
                                <p>lorem ipsum this is a gallery of photo.</p>
                                <div className="flex-center">
                                    <div className="brk-btn">Kiri</div>
                                </div>
                            </div>
                            <div className="col grid-center cropped">
                                <img className="square" src={modal} />
                                <h2 className="mt-4 m-0">LIVE PAINTING</h2>
                                <p>lorem ipsum this is a gallery of painting.</p>
                                <div className="flex-center">
                                    <div className="brk-btn">Kanan</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                    <div></div>
                )}

            {/* abis ngopi show ada 3, ganti modalRed(nama state yg di bikin) */}
            {/* handleClose ganti sama handleCloseModalRed */}

            {/* PaintingRed */}
            {/* 1 */}
            {modalRed !== false ? (
                <ModalRed handleCloseModalRed={handleCloseModalRed} />
            ) : (
                    <div></div>
                )
            }

            {/* Painting Orange */}
            {
                modalOrange !== false ? (
                    <ModalOrange handleCloseModalOrange={handleCloseModalOrange} />
                ) : (
                        <div></div>
                    )
            }

            {/* Painting Brown */}
            {
                modalBrown !== false ? (
                    <ModalBrown handleCloseModalBrown={handleCloseModalBrown} />
                ) : (
                        <div></div>
                    )
            }

            {/* Painting Yellow */}
            {
                modalYellow !== false ? (
                    <ModalYellow handleCloseModalYellow={handleCloseModalYellow} />
                ) : (
                        <div></div>
                    )
            }

            {/* Painting Green */}
            {
                modalGreen !== false ? (
                    <ModalGreen handleCloseModalGreen={handleCloseModalGreen} />
                ) : (
                        <div></div>
                    )
            }

            {/* Painting Blue */}
            {
                modalBlue !== false ? (
                    <ModalBlue handleCloseModalBlue={handleCloseModalBlue} />
                ) : (
                        <div></div>
                    )
            }

            {/* Closing Tag */}
        </div >
    );
}

export default Home;