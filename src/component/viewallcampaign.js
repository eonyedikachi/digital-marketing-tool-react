import React, {useState, useEffect} from 'react'
// import './Audiencepage.css'
import {useHistory} from 'react-router'
import {Link} from 'react-router-dom'
import './layout/Header.css';
import {Modal} from 'react-bootstrap';
import Formfield from './FormField'
import { Formik, } from 'formik';
import axios from 'axios';
import {useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


export default function Viewallcampaign() {

    const Token = localStorage.getItem("Token");
    const [campaignid, setCampaignid] = useState([]);
    const [showedit, setShowedit] = useState(false);
    const [campaign, setCampaign] = useState([]);
    useEffect(() => {
        axios
          .get("https://martreach.herokuapp.com/api/campaign", {
            headers: {
              Authorization:  `Bearer ${Token}`
                
            },
          })
          .then((response) => {
            setCampaign(response.data);
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  
    return (
        <div style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}} className="campaign">
          <h4 style={{textAlign:'center', paddingTop:"1rem", color:'#8c30f5'}}>List of all campaigns</h4>
          {campaign.map((campaign)=>(<div className="grouplist row">
      <div className="col-md-8" >
      <ul>
      <li><i class="fas fa-users"></i>{campaign.name}</li>
      </ul>
      </div>
      <div className="col-md-4">
      <i
      onClick={()=> {if(window.confirm('Delete the item?'))(
        axios({
          method: 'delete',
          url: `https://martreach.herokuapp.com/api/campaign/${campaign.id}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          }
        })
        .then((response) => {
          Swal.fire(
            'Success',
            'You have successfully deleted this campaign',
            'success'
          )
        })
       

      )}}
      
      className="fas fa-trash-alt groupdelete"></i>
   <i className="fas fa-user-edit groupedit"
  onClick={()=>(setShowedit(!showedit), setCampaignid(campaign.id))}

  ></i><i class="fas fa-rocket launch" onClick={()=>
    axios({
        method: 'post',
        url: `https://martreach.herokuapp.com/api/campaign/sendCampaign/${campaign.id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        }
      }).then((response) => {
        Swal.fire(
          'Success',
          'You have successfully launched this campaign',
          'success'
        )
    })
  
  }></i>
      </div>
  </div>))}

        </div>
    )
}
