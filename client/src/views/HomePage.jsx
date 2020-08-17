import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { animations, AnimateOnChange } from "react-animation";
import { CSSTransition } from "react-transition-group";
import modal from "../assets/modal1.jpeg";
import Background from "../components/Background"
// import modal utama
import ModalUtamaYellow from "../components/ModalUtamaYellow"
import ModalUtamaRed from "../components/ModalUtamaRed"
import ModalUtamaGreen from "../components/ModalUtamaGreen"
import ModalUtamaBlue from "../components/ModalUtamaBlue"
import ModalUtamaOrange from "../components/ModalUtamaOrange"
import ModalUtamaBrown from "../components/ModalUtamaBrown"

// Virtual Photoshoot
import ModalRed from "../components/ModalRed"
import ModalBlue from "../components/ModalBlue"
import ModalBrown from "../components/ModalBrown"
import ModalOrange from "../components/ModalOrange"
import ModalYellow from "../components/ModalYellow"
import ModalGreen from "../components/ModalGreen"

// Live Painting
import ModalMerah from "../components/ModalMerah"
import ModalBiru from "../components/ModalBiru"
import ModalCoklat from "../components/ModalCoklat"
import ModalJingga from "../components/ModalJingga"
import ModalKuning from "../components/ModalKuning"
import ModalHijau from "../components/ModalHijau"

// pemenang
import ModalPemenang from "../components/ModalPemenang"


function Home(props) {
    const dispatch = useDispatch();

    // modal utama
    const [ShowYellow, setShowYellow] = useState(false);
    const [ShowRed, setShowRed] = useState(false);
    const [ShowGreen, setShowGreen] = useState(false);
    const [ShowBlue, setShowBlue] = useState(false);
    const [ShowOrange, setShowOrange] = useState(false);
    const [ShowBrown, setShowBrown] = useState(false);

    const [showModal2, setshowModal2] = useState(false);

    // setVirtual Photoshoot
    const [modalRed, setModalRed] = useState(false);
    const [modalOrange, setModalOrange] = useState(false);
    const [modalBrown, setModalBrown] = useState(false);
    const [modalBlue, setModalBlue] = useState(false);
    const [modalGreen, setModalGreen] = useState(false);
    const [modalYellow, setModalYellow] = useState(false);

    // setLivepainting Photoshoot
    const [modalMerah, setModalMerah] = useState(false);
    const [modalJingga, setModalJingga] = useState(false);
    const [modalCoklat, setModalCoklat] = useState(false);
    const [modalBiru, setModalBiru] = useState(false);
    const [modalHijau, setModalHijau] = useState(false);
    const [modalKuning, setModalKuning] = useState(false);

    // set pemenang modal
    const [modalPemenang, setModalPemenang] = useState(false);

    //setPhoto

    const style = {
        animation:
            "1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running fade-in-up",
    };

    const styleOut = {
        animation:
            "1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s 1 normal forwards running slide-out",
    };

    // modal utama
    const handleCloseYellow = () => setShowYellow(false);
    const handleShowYellow = () => setShowYellow(true);

    const handleCloseRed = () => setShowRed(false);
    const handleShowRed = () => setShowRed(true);

    const handleCloseGreen = () => setShowGreen(false);
    const handleShowGreen = () => setShowGreen(true);

    const handleCloseBlue = () => setShowBlue(false);
    const handleShowBlue = () => setShowBlue(true);

    const handleCloseOrange = () => setShowOrange(false);
    const handleShowOrange = () => setShowOrange(true);

    const handleCloseBrown = () => setShowBrown(false);
    const handleShowBrown = () => setShowBrown(true);

    const handleCloseModal2 = () => setshowModal2(false);
    const handleShowModal2 = () => setshowModal2(true);

    // set state Virtual Photoshot
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

    // set state Live Painting
    const handleCloseModalMerah = () => setModalMerah(false);
    const handleShowModalMerah = () => setModalMerah(true);

    const handleCloseModalJingga = () => setModalJingga(false);
    const handleShowModalJingga = () => setModalJingga(true);

    const handleCloseModalCoklat = () => setModalCoklat(false);
    const handleShowModalCoklat = () => setModalCoklat(true);

    const handleCloseModalKuning = () => setModalKuning(false);
    const handleShowModalKuning = () => setModalKuning(true);

    const handleCloseModalHijau = () => setModalHijau(false);
    const handleShowModalHijau = () => setModalHijau(true);

    const handleCloseModalBiru = () => setModalBiru(false);
    const handleShowModalBiru = () => setModalBiru(true);

    // pemenang modal
    const handleClosePemenang = () => setModalPemenang(false);
    const handleShowPemenang = () => setModalPemenang(true);


    useEffect(() => { }, []);


    return (
        <div>
            {/* Background */}
            <Background
                handleShowYellow={handleShowYellow}
                handleShowRed={handleShowRed}
                handleShowGreen={handleShowGreen}
                handleShowBlue={handleShowBlue}
                handleShowOrange={handleShowOrange}
                handleShowBrown={handleShowBrown}
                handleShowPemenang={handleShowPemenang}
            />

            {/* YELLOW */}
            {ShowYellow !== false ? (
                <ModalUtamaYellow
                    handleCloseYellow={handleCloseYellow}
                    handleShowModalYellow={handleShowModalYellow}
                    handleShowModalKuning={handleShowModalKuning}
                />
            ) : (
                    <div></div>
                )}

            {/* RED */}
            {ShowRed !== false ? (
                <ModalUtamaRed
                    handleCloseRed={handleCloseRed}
                    handleShowModalRed={handleShowModalRed}
                    handleShowModalMerah={handleShowModalMerah}
                />
            ) : (
                    <div></div>
                )}

            {/* GREEN */}
            {ShowGreen !== false ? (
                <ModalUtamaGreen
                    handleCloseGreen={handleCloseGreen}
                    handleShowModalGreen={handleShowModalGreen}
                    handleShowModalHijau={handleShowModalHijau}
                />
            ) : (
                    <div></div>
                )}

            {/* BLUE */}
            {ShowBlue !== false ? (
                <ModalUtamaBlue
                    handleCloseBlue={handleCloseBlue}
                    handleShowModalBlue={handleShowModalBlue}
                    handleShowModalBiru={handleShowModalBiru}
                />
            ) : (
                    <div></div>
                )}

            {/* ORANGE */}
            {ShowOrange !== false ? (
                <ModalUtamaOrange
                    handleCloseOrange={handleCloseOrange}
                    handleShowModalOrange={handleShowModalOrange}
                    handleShowModalJingga={handleShowModalJingga}
                />
            ) : (
                    <div></div>
                )}

            {/* BROWN */}
            {ShowBrown !== false ? (
                <ModalUtamaBrown
                    handleCloseBrown={handleCloseBrown}
                    handleShowModalBrown={handleShowModalBrown}
                    handleShowModalCoklat={handleShowModalCoklat}
                />
            ) : (
                    <div></div>
                )}

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
                                <h2 className="App-link mt-4 m-0">
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

            {/* Virtual PhotoshootRed */}
            {
                modalRed !== false ? (
                    <ModalRed handleCloseModalRed={handleCloseModalRed} />
                ) : (
                        <div></div>
                    )
            }

            {/* Virtual Photoshoot Orange */}
            {
                modalOrange !== false ? (
                    <ModalOrange handleCloseModalOrange={handleCloseModalOrange} />
                ) : (
                        <div></div>
                    )
            }

            {/* Virtual Photoshoot Brown */}
            {
                modalBrown !== false ? (
                    <ModalBrown handleCloseModalBrown={handleCloseModalBrown} />
                ) : (
                        <div></div>
                    )
            }

            {/* Virtual Photoshoot Yellow */}
            {
                modalYellow !== false ? (
                    <ModalYellow handleCloseModalYellow={handleCloseModalYellow} />
                ) : (
                        <div></div>
                    )
            }

            {/* Virtual Photoshoot Green */}
            {
                modalGreen !== false ? (
                    <ModalGreen handleCloseModalGreen={handleCloseModalGreen} />
                ) : (
                        <div></div>
                    )
            }

            {/* Virtual Photoshoot Blue */}
            {
                modalBlue !== false ? (
                    <ModalBlue handleCloseModalBlue={handleCloseModalBlue} />
                ) : (
                        <div></div>
                    )
            }

            {/* Live Painting Merah */}
            {
                modalMerah !== false ? (
                    <ModalMerah handleCloseModalMerah={handleCloseModalMerah} />
                ) : (
                        <div></div>
                    )
            }

            {/* Live Painting  Jingga */}
            {
                modalJingga !== false ? (
                    <ModalJingga handleCloseModalJingga={handleCloseModalJingga} />
                ) : (
                        <div></div>
                    )
            }

            {/* Live Painting  Coklat */}
            {
                modalCoklat !== false ? (
                    <ModalCoklat handleCloseModalCoklat={handleCloseModalCoklat} />
                ) : (
                        <div></div>
                    )
            }

            {/* Live Painting  Kuning */}
            {
                modalKuning !== false ? (
                    <ModalKuning handleCloseModalKuning={handleCloseModalKuning} />
                ) : (
                        <div></div>
                    )
            }

            {/* Live Painting  Hijau */}
            {
                modalHijau !== false ? (
                    <ModalHijau handleCloseModalHijau={handleCloseModalHijau} />
                ) : (
                        <div></div>
                    )
            }

            {/* Live Painting  Biru */}
            {
                modalBiru !== false ? (
                    <ModalBiru handleCloseModalBiru={handleCloseModalBiru} />
                ) : (
                        <div></div>
                    )
            }

            {/* List Pemenang */}
            {
                modalPemenang !== false ? (
                    <ModalPemenang handleClosePemenang={handleClosePemenang} />
                ) : (
                        <div></div>
                    )
            }

            {/* Closing Tag */}
        </div >
    );
}

export default Home;