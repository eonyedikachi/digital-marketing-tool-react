import React ,{useState, useEffect} from 'react'
// import {useSelector} from 'react-redux'
import axios from "axios";
import {Link} from 'react-router-dom'
import img1 from '../Images/emailTemp1.png'
import img2 from '../Images/img1.png'
import img3 from '../Images/img2.png'
import img4 from '../Images/email_template.png'
// import moduleName from '../Images'

export default function CreateemailTem2() {

    const [url, setUrl] = useState([]);
    const Token = localStorage.getItem("Token")
    useEffect(() => {
        axios
          .get("https://martreach.herokuapp.com/api/emailTemplates/designs", {
            headers: {
              Authorization:  `Bearer ${Token}`
                
            },
          })
          .then((response) => {
            setUrl(response.data);
            // console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      console.log(url)

    //   const image1= url[1].img
    // const image2 = url[1].img

    // console.log(url[1].img)

 

    return (
        <div>
          <main className="emailTemp">
        <div className="container">
            <div className="select">
                <h1>Select a starting point for your template</h1>
                <Link to="/dashboard">Cancel</Link>
            </div>
            <section>
                
                <div className="themes">
                    <h2>Email Templates</h2>
                    <div className="featured">
                        <div className="feature-box 1">
                            <Link to="/emailtemp1">
                                <img src={img1} alt=""/>
                            </Link>
                            <p>Theme 1</p>
                        </div>
                        <div className="feature-box 2">
                            <Link to="/emailtemp2">
                                <img src={img2} alt=""/>
                            </Link>
                            <p>Theme 2</p>
                        </div>
                        <div className="feature-box 3">
                            <Link to="/emailtemp3">
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
