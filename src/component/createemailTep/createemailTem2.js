import React from 'react';
import {Link} from 'react-router-dom'
import img1 from '../Images/emailTemp1.png'
import img2 from '../Images/emailTemp.png'
import img3 from '../Images/emailTemp2.png'
import img4 from '../Images/email_template.png'
// import moduleName from '../Images'

export default function createemailTem2() {
    return (
        <div>
          <main className="emailTemp">
        <div className="container">
            <div className="select">
                <h1>Select a starting point for your template</h1>
                <Link to="./email_templates.html">Cancel</Link>
            </div>
            <section>
                
                <div className="themes">
                    <h2>Email Templates</h2>
                    <div className="featured">
                        <div className="feature-box 1">
                            <Link to="/Templateeditor">
                                <img src={img1} alt=""/>
                            </Link>
                            <p>Theme 1</p>
                        </div>
                        <div className="feature-box 2">
                            <Link to="/Templateeditor">
                                <img src={img2} alt=""/>
                            </Link>
                            <p>Theme 2</p>
                        </div>
                        <div className="feature-box 3">
                            <Link to="/Templateeditor">
                                <img src={img3} alt=""/>
                            </Link>
                            <p>Theme 3</p>
                        </div>
                        <div className="feature-box 4">
                            <Link to="/Templateeditor">
                                <img src={img4} alt=""/>
                            </Link>
                            <p>Theme 4</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>  
        </div>
    )
}
