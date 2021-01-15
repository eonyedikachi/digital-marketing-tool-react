import React from 'react';
import logos from './Images/MartReach logo dark.png'
import './Mailbox.css'

export default function Mailbox() {
    return (
        <div className='cmbody' style={{backgroundColor:"#f1e4ff"}} >
        <div className='cmimagecon'>
        <img src={logos} style={{width:"300px", marginLeft:"35%", marginTop:"4%"}}/>
        </div>
        <div className='cmiconcon' >
        <i class="fas fa-envelope"></i>
        <h3>please check your mail</h3>
        <p>We’ve sent an email to you with a link to confirm your account.</p>
        </div>
        
            
        
    
            
        </div>
    )
}
