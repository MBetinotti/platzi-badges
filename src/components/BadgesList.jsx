import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './styles/BadgesList.css'
import Gravatar from './Gravatar'

export default function BadgesList (props) {

    const [query,setQuery] = useState('')

    const filteredBadges = props.badges.filter(badge=>{
       return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })

    if(filteredBadges.length === 0){
        return(
            
            <div>
                <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                value={query}
                onChange={(e)=>{setQuery(e.target.value)}}/>
            </div>
                <h3>No Badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">Creat new badge</Link>
            </div>
        )
    }

    return (
        <div>
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" className="form-control"
                value={query}
                onChange={(e)=>{setQuery(e.target.value)}}/>
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge)=>{
                    
                    return(

                        
                        <li key={badge.id} className="Badge__li-container">
                            <Link to={`badges/${badge.id}`} className="text-reset text-decoration-none badge-link">
                            <Gravatar email={badge.email} alt="avatar"></Gravatar>
                            <div className="Badge__list-body">
                                <p className="Badge__title">{badge.firstName} {badge.lastName}</p>
                                <p className="Badge__body-twitter"><span></span> @{badge.twitter}</p>
                                <p className="Badge__body-job">{badge.jobTitle}</p>
                            </div>
                            </Link>
                            
                        </li>
                        
                    )
                })}
            </ul>
        </div>
    )
}
