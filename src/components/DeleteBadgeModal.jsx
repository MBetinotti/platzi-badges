import React from 'react'
import Modal from './Modal'

export default function DeleteBadgeModal(props) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
           <div>
             <h1>Are you sure?</h1>
            <p>You are about to delete this badge.</p>  
            <div>
                <button className="btn btn-danger mr-4" onClick={props.onDelete}>Delete</button>
                <button className="btn btn-primary" onClick={props.onClose}>Cancel</button>
            </div>
           </div>
            
        </Modal>
    )
}
