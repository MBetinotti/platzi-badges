import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './styles/Badges.css'
import BadgesList from '../components/BadgesList'
import confLogo from '../images/badge-header.svg'
import api from '../api'
import ReactLoading from 'react-loading';

export default class Badges extends Component {
   
    state={
        loading: true,
        data: undefined,
        error: null
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData= async()=>{
        this.setState({loading:true, error: null})

        try{
            const data = await api.badges.list();

            this.setState({loading: false, data: data})
        } catch(error){
            this.setState({loading: false, error: error})
        }
    }

    render() {

        if(this.state.loading=== true){
            return (
                <div className="spin-container">
                    <ReactLoading type="spin" color="#98ca3f" height="70px" width="70px"/>)
                </div>
            )
        }

        if(this.state.error){
            return(`Error: ${this.state.error.message}`)
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Logo de conferencia platzi" ></img>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data}></BadgesList>
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
