import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function ModalRed(props) {
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
                    onClick={props.handleCloseModalRed}
                    type="button"
                    className="close close-x-black"
                    style={{ zIndex: "99" }}
                >
                    <span aria-hidden="true">&times;</span>
                </button>

                <div>
                    <div class="content">
                        <div class="wrapper">
                            <div class="left-content-1" >
                                <div class="left-content">
                                    <div class="content-item" id="item1">
                                        <img
                                            src="./assets/img/BIRU_AYUNINGTYAS_17136_KPwBI KALTARA_MERAJUT ASA IBU PERTIWI.JPG"
                                            alt=""
                                        />
                                    </div>
                                    <div class="content-item" id="item2">
                                        <img
                                            src="./assets/img/Biru_gde agus_14346_kita semua bisa.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div class="content-item" id="item3">
                                        <img
                                            src="./assets/img/BIRU_VRENDY LUIS_102296_DEKS_UPAYA BI DI TENGAH PANDEMI DEMI KEHIDUPAN YANG HARMONI.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div class="content-item" id="item3">
                                        <img
                                            src="./assets/img/BIRU_VRENDY LUIS_102296_DEKS_UPAYA BI DI TENGAH PANDEMI DEMI KEHIDUPAN YANG HARMONI.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div class="content-item" id="item3">
                                        <img
                                            src="./assets/img/BIRU_VRENDY LUIS_102296_DEKS_UPAYA BI DI TENGAH PANDEMI DEMI KEHIDUPAN YANG HARMONI.jpg"
                                            alt=""
                                        />
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

export default ModalRed