import React, { useEffect } from 'react';
import styles from '../css/MyStyle.module.css';
import { useSelector, useDispatch } from 'react-redux'
import Navbar from '../components/Navbar';

function Home(props) {
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    return (
        <div className={styles.homepage}>
            <Navbar/>
            <h1>ngodings</h1>
        </div>
    )
}

export default Home;