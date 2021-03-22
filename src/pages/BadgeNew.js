import React from 'react';


import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css';
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api';
import ReactLoading from 'react-loading';

class BadgeNew extends React.Component{

    state={
        loading: false,
        error: null,
        form:{
            firstName:'',
            lastName:'',
            email:'',
            jobTitle:'',
            twitter:''
        }}

    handleChange=e=>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit= async e=>{
        e.preventDefault()

        this.setState({loading:true, error:null})

        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false})

            //nos reenvia a la pagina de badges si se hizo el POST correctamente
            this.props.history.push('/badges')

        } catch(error){
            this.setState({loading:false, error:error})
        }
        
    }

    render(){

        if(this.state.loading){
            return(
            <div className="spin-container">
                <ReactLoading type="spin" color="#98ca3f" height="70px" width="70px"/>)
            </div>)
        }
        return(
            <React.Fragment>
              
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName || 'First_Name'}
                            lastName={this.state.form.lastName || 'Last_Name'} 
                            avatar="https://www.gravatar.com/avatar?d=identicon" 
                            job={this.state.form.jobTitle || 'Job_Title'} 
                            email={this.state.form.email || 'Email'}
                            twitter={this.state.form.twitter || 'twitter'}/>
                        </div>
                        <div className="col-6">
                        <h1>New Attendant</h1>
                            <BadgeForm onChange={this.handleChange} 
                                        onSubmit={this.handleSubmit} 
                                        formValues={this.state.form}
                                        error={this.state.error}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;