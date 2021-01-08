import React from 'react'
import Pic1 from '../Images/emailTemp1.png';
import './emailtem1.css'
import {Link} from 'react-router-dom'

export default function CreateemailTemp1() {
    return (
        <div className='savedlp' style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>
        <div className="temp-main">
            <div className="templates">
                <h1>Email Templates</h1>
                <Link to="/selectTemp">Create Template</Link>
            </div>
            <section className="email_temp">
                <div className="search">
                    <input type="text" name="search" id="search" placeholder="Search saved templates"/>
                    <button id="searchBtn" onclick="search()"><i className="fas fa-search"></i></button>
                    {/* <button id="cancelBtn" onclick="cancel()"><i className="fas fa-times"></i></button> */}
                </div>
                <div className="template_list" id="templateList">
                    <div className="temp">
                        <div className="description">
                            <div className="image">
                                <img src={Pic1} alt=""/>
                            </div>
                            <div className="info">
                                <button id="templateName" className="template-name" onclick="editEmail()">Sample
                                    Template</button>
                                <p><span>Last edited</span> today</p>
                                <p>by <span>MartReach</span></p>
                            </div>
                        </div>
                        <div className="edit">
                            <button id="editBtn" onclick="editEmail()">Edit</button>
                            <button onclick="this.remove()">Delete</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    )
}
