import React from 'react';
import { Link } from 'react-router-dom'

import astro from '../images/astronauts.svg'
import logo from '../images/platziconf-logo.svg'
import './styles/Home.css'


function Home(){
    return(
        <React.Fragment>
            <div className="Home__container">
                <div className="Home__title">
                    <img src={logo} alt="platzi logo"/>
                    <h2>Badge Managment System</h2>
                    <Link className="btn btn-primary boton" to="/badges">Start</Link>
                </div>
                <div className="imgContainer">
                    <img src={astro} alt="astrounautas"/> 
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;