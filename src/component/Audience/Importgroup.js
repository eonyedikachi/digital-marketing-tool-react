import React from 'react'
// import './Audiencepage.css'
import {Link} from 'react-router-dom'

export default function Importgroup() {
    return (
        <div style={{width: '100%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>
          <section>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <Link className="nav-link " id="view-contact-tab" data-toggle="tab" to="/dashboard/Audiencepage/" role="tab"
                  aria-controls="view-contact " aria-selected="false">View Contact</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" id="import-tab" data-toggle="tab" to="#import" role="tab" aria-controls="import"
                  aria-selected="false">Import Contacts</Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" id="manage-tab" data-toggle="tab" to="/dashboard/Audiencepage/Creategroup" role="tab" aria-controls="manage"
                  aria-selected="false">Groups</Link>
              </li>
            </ul>

          </section>
            
        </div>
    )
}
