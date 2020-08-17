import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function ModalBlue(props) {
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
            <div className="modal-bodyPainting">
                <button
                    onClick={props.handleCloseModalBlue}
                    type="button"
                    className="close close-x"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="wrapper">
                    <div className="right-content">1</div>
                    <div className="left-content-1">
                        <h3>judul</h3>
                        <div className="left-content">
                            <div className="content-item" id="item1">
                                img
                    </div>
                            <div className="content-item" id="item2">
                                img
                    </div>
                            <div className="content-item" id="item3">
                                img
                    </div>
                        </div>
                        <h3>scroll</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBlue