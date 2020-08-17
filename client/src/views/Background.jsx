import React, { useEffect, useState } from 'react';
import myStyle from '../css/MyStyle.module.css';
// import { useSelector, useDispatch } from 'react-redux'
// import Navbar from '../components/Navbar';
import { Grid, Row, Col } from 'react-bootstrap';
import one from '../assets/satu.jpeg';
import two from '../assets/dua.jpeg';
import three from '../assets/tiga.jpeg';
// import { animations } from 'react-animation'


function Background() {
    return (
        <div className="container-background tes">
            <div className="row m-0">
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
            </div>
            <div className="row m-0">
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
            </div>
            <div className="row m-0">
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
            </div>
            <div className="row m-0">
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
            </div>
            <div className="row m-0">
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
            </div>
            <div className="row m-0">
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
            </div>
            <div className="row m-0">
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
                <div className="col p-0 cropped"><img src={three} /></div>
                <div className="col p-0 cropped"><img src={one} /></div>
                <div className="col p-0 cropped"><img src={two} /></div>
            </div>
        </div>
    );
}

export default Background;