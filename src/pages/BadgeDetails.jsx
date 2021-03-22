import React from 'react';
import {Link} from 'react-router-dom'
import ReactLoading from 'react-loading';

import api from '../api'
import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

import header from '../images/platziconf-logo.svg'
import './styles/BadgeDetails.css'

class BadgeDetails extends React.Component{

    state={
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen:false
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData= async e => {
        this.setState({loading: true, error: null})

        try{
            const data= await api.badges.read(this.props.match.params.badgeId)

            this.setState({loading:false, data:data})
        } catch(error){
            this.setState({loading:false, error: error})
        }
    }

    handleOpenModal=(e)=>{
        this.setState({modalIsOpen:true})
    }

    handleCloseModal=(e)=>{
        this.setState({modalIsOpen:false})
    }

    handleDelete = async e =>{
        this.setState({loading:true, error:null})

        try{
            await api.badges.remove(this.props.match.params.badgeId)

            this.setState({loading: false})
            this.props.history.push('/badges')
        } catch (error){
            this.setState({loading:false, error:error})
        }
    }

    render(){

        if(this.state.loading){
            return(
                <div className="spin-container">
                    <ReactLoading type="spin" color="#98ca3f" height="70px" width="70px"/>)
                </div>
            )
        }

        if(this.state.error){
            return(this.state.error.message)
        }
        return(
            <React.Fragment>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={header} alt="logo de la conferencia"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>{this.state.data.firstName} {this.state.data.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.data.firstName}
                            lastName={this.state.data.lastName} 
                            avatar={this.state.data.avatarURL} 
                            job={this.state.data.jobTitle} 
                            email={this.state.data.email}
                            twitter={this.state.data.twitter}
                            ></Badge>
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div className="BadgeDetails__buttons">
                                <div>
                                    <Link className="btn btn-primary " to={`/badges/${this.state.data.id}/edit`}>Edit</Link>
                                </div>
                                <div>
                                    <button onClick={this.handleOpenModal} className="btn btn-danger">Delete</button>
                                    <DeleteBadgeModal 
                                    isOpen={this.state.modalIsOpen} 
                                    onClose={this.handleCloseModal}
                                    onDelete={this.handleDelete} >Texto del Modal</DeleteBadgeModal>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            
            </React.Fragment>
        )

    }
    
}

export default BadgeDetails;