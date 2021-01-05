
import React from 'react'
import {Link} from 'react-router-dom'
import Stickynote from '../Images/post-it.svg'

export default function Userdasbord3() {
    return (
        
    <div className="user-profile position-fixed" style={{backgroundColor: '#fff', height: '100vh', width: '20%'}}>

    <div className="container">
      <div style={{display: 'flex', justifyContent: 'flex-end', padding: 10, fontSize: 10}}>
        <Link to="./index.html" onclick="signOut()" style={{border: '1px solid #01081e', borderRadius: 4, color: '#8c30f5', padding: 3}} >
Sign Out</Link>

      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', color: '#c4c4c4'}}>
        <img src="images/caricature1.svg" id="profilePic" alt="image" height={100} width={100} style={{borderRadius: '50%'}} />

        <h3 id="usersname111">Malik Mukhtar</h3>

      </div>
      <div className="position-relative" style={{display: 'flex', justifyContent: 'space-evenly', padding: 10, color: '#c4c4c4'}}>

       <Link style={{color: '#8c30f5'}} to="/">
Messages
          <i style={{fontSize: '1.5rem', position: 'relative'}} className="far fa-comment-alt">
<span className="notify"
              id="notif"></span></i>
        </Link>
      </div>
      <div className="w-100 my-4" style={{height: 30}}>
        <img src={Stickynote} className="float-right mr-4" style={{width: 30, height: '100%', cursor: 'pointer'}} alt="post-it" />

      </div>
      {/* <!-- Sticky Note --> */}
      <div className="sticky-note p-2 m-auto overflow-auto" id="stickyNote" style={{display: 'none'}} contentEditable="true" onkeyup="saveNote()">
      </div>
    </div>
  </div>
    )
}
