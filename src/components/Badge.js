import React from 'react';
import './styles/badge.css'
import ConfLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'

class Badge extends React.Component{
    render(){
        return(
            <div className="badge_container">
                <div className="badge_header">
                    <img src={ConfLogo} alt="confLogo"></img>
                </div>
                <div className="badge_body-title">
                    <Gravatar email={this.props.email} alt="avatar"></Gravatar>
                    <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                </div>
                <div className="badge_body-content">
                    <h3>{this.props.job}</h3>
                    <p>@{this.props.twitter}</p>
                </div>
                <div className="badge_footer">
                    #PlatziConf
                </div>
            </div>
        )
    }
}

export default Badge;