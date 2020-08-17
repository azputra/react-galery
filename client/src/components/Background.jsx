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
        <div class="container">
            <div class="title-container">
                <div class="title-item">THIS IS TITLE</div>
                <div class="desc-item">THIS IS DESCRIPTION</div>
                <div class="logo">THIS IS LOGO</div>
            </div>

            <div class="content-container">
                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    {/* <img src={require("../assets/img/3.4.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    {/* <img src={require("../assets/img/3.5.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    {/* <img src={require("../assets/img/3.6.jpg")} alt="" /> */}
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    {/* <img src={require("../assets/img/3.4.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    {/* <img src={require("../assets/img/3.5.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    {/* <img src={require("../assets/img/3.6.jpg")} alt="" /> */}
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>


                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    {/* <img src={require("../assets/img/3.4.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    {/* <img src={require("../assets/img/3.5.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    {/* <img src={require("../assets/img/3.6.jpg")} alt="" /> */}
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    {/* <img src={require("../assets/img/3.4.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    {/* <img src={require("../assets/img/3.5.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    {/* <img src={require("../assets/img/3.6.jpg")} alt="" /> */}
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    {/* <img src={require("../assets/img/3.4.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    {/* <img src={require("../assets/img/3.5.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    {/* <img src={require("../assets/img/3.6.jpg")} alt="" /> */}
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/1.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/1.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/1.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/1.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/1.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/1.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/2.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/2.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/2.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/2.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/2.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/2.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/3.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/3.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/3.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    {/* <img src={require("../assets/img/3.4.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    {/* <img src={require("../assets/img/3.5.jpg")} alt="" /> */}
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    {/* <img src={require("../assets/img/3.6.jpg")} alt="" /> */}
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/4.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/4.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/4.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/4.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/4.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/4.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/5.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/5.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/5.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/5.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/5.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/5.6.jpg")} alt="" />
                </div>

                <div class="content-item cursor-pointer" id="content-1" onClick={props.handleShowYellow}>
                    <img src={require("../assets/img/6.1.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-2" onClick={props.handleShowRed}>
                    <img src={require("../assets/img/6.2.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-3" onClick={props.handleShowGreen}>
                    <img src={require("../assets/img/6.3.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-4" onClick={props.handleShowBlue}>
                    <img src={require("../assets/img/6.4.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-5" onClick={props.handleShowOrange}>
                    <img src={require("../assets/img/6.5.jpg")} alt="" />
                </div>
                <div class="content-item cursor-pointer" id="content-6" onClick={props.handleShowBrown}>
                    <img src={require("../assets/img/6.6.jpg")} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Background