import React, {useState,useEffect, useRef} from 'react'
import axios from "axios"

export default function Selectaud() {


    const checkboxref= useRef()
    const [audience, setAudience] = useState([]);
    const [audienceid, setAudienceid] = useState([]);
    const [inputvalue, setInputvalue] = useState(checkboxref);

    const Token = localStorage.getItem("Token");
    const groupid = localStorage.getItem("groupid");

    useEffect(() => {
        axios
          .get("https://martreach.herokuapp.com/api/audience", {
            headers: {
              Authorization:
                `Bearer ${Token}`,
            },
          })
          .then((response) => {
            setAudience(response.data);
            console.log(response.data);

           
            
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  
      

   const groupname = localStorage.getItem("groupname")
    return (
        <>
         <div  style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>
            <h3 style={{textAlign:"center",margin: "2rem 20px",color:"#8c30f5"}}>Select Subscribrts for {groupname} group </h3>
           <div className="selectbtn">
           <button type="button" class="btn sendtoall" 

                onClick={()=> console.log(inputvalue.current.value) }
        //    onClick={()=>  axios({
        //     method: 'post',
        //     url: `https://martreach.herokuapp.com/api/subscriberGroup/assignGroup/${inputvalue.current.value}/${groupid}`,
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${Token}`,
        //     },
        //     data:{
        //       name:""
        //     }
        //   })
        //   .then((response) => {
        //     alert("SAVED SUCCESSFULLY")
            
            
      
        //   })
        //   .catch((err) => {
        //   alert("NOT SAVED")

        //   })}
           >Select marked Subscribers</button>
           </div>
            <div classNam="audiencecont">
               <div className="audienceheading row ">
                <div className="col-md-1" ><h6>NO</h6></div>
                <div className="col-md-4" ><h6>Email</h6></div>
                <div className="col-md-2" ><h6>Firstname</h6></div>
                <div className="col-md-2" ><h6>Lastname</h6></div>
                <div className="col-md-2" ><h6>Phone no</h6></div>
                <div className="col-md-1" ><h6>Select</h6></div>
                
            </div>
{audience.map((audience)=>(   <div className="row audiienceinfo">
            <div className="col-md-1" ><h6>{audience.id}</h6></div>
            <div className="col-md-4" ><h6>{audience.email}</h6></div>
            <div className="col-md-2" ><h6>{audience.firstName}</h6></div>
            <div className="col-md-2" ><h6>{audience.lastName}</h6></div>
            <div className="col-md-2" ><h6>{audience.tel}</h6></div>
            <div className="col-md-1" ><input onClick={()=>setInputvalue(checkboxref)} ref={checkboxref} type="checkbox" value={audience.id}/></div>
            </div>))}
            </div>


        </div>
        </>
    )
}
