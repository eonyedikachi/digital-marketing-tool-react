import React ,{useState, useEffect} from 'react'
// import {useSelector} from 'react-redux'
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)



export default function Viewlandingeditor() {

    const Token = localStorage.getItem("Token")
    const firstName = localStorage.getItem("firstName")
    const lastName = localStorage.getItem("lastName")
    const email = localStorage.getItem("email")

    const [url, setUrl] = useState([]);
    
  useEffect(() => {
    axios
      .get("https://martreach.herokuapp.com/api/emailTemplates", {
        headers: {
          Authorization:  `Bearer ${Token}`
            
        },
      })
      .then((response) => {
        setUrl(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(`${url[0].id}`)


  function refreshPage() {
    window.location.reload(true);
  }

    return (
      
        <div  style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>
          <h2 className='editorh2' style={{textAlign:"center"}}>View saved template </h2> 

                <div className=" container templateconn">
                    <div className="row" style={{height: "50vh"}}>
                       {url.map((url)=>( <div id="one" className="imggg col-lg-3 col-lg-3">
                            <img src={url.image} alt=""/>
                        <div className='iconss'  style={{display:"flex"}}>
                        <i className="fas fa-trash deletetemp"
                        onClick={()=>Swal.fire({
                          title: 'Are you sure?',
                          text: "You won't be able to revert this!",
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                          if (result.isConfirmed) {

                            axios({
                              method: 'delete',
                              url: `https://martreach.herokuapp.com/api/emailTemplates/${url.id}`,
                              headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${Token}`,
                              }
                            })
                            

                            Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                            )


                          }
                        })}


                        
                        ></i>
                       <a  href={url.pdf}> <i className="fas fa-download downloadtemp"></i></a>
                        <i 
                        
                         onClick={()=> {
               
                axios({
                      method: 'post',
                      url: 'https://martreach.herokuapp.com/api/emailTemplates/testMail',
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${Token}`,
                      },
                      data:  {
                        senderName: firstName ,
                        email: email,
                        html: url.html
                      }
                       
                    })
                    .then((response) => {
                     
                      Swal.fire(
                        'Success',
                        'SAMPLE TEST SENT PLEASE CHECK YOUR MAIL',
                        'success'
                      )
                      
                
                    })
                    .catch((err) => {
                    alert("SENDING UNSUCCESSFUL")
                    });
                
                           
                        }}
                        
                        
                        className="fas fa-mail-bulk sendtemp"></i>
                        </div>
                        </div>))}
                        <div>


                        </div>
                      </div>
                      </div>
          
          {/* {url.map((url)=>(<div><div className="SIcont">
          <div className='viewedit'>
               <img src={url.image}/>
            </div> 
          <button onClick={()=> {if(window.confirm('Delete the item?'))(
            axios({
              method: 'delete',
              url: `https://martreach.herokuapp.com/api/emailTemplates/${url.id}`,
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Token}`,
              }
            })
           

          )}}>Delete</button>

          <a className="Dpdf" href={url.pdf}>Download pdf</a>
          <button onClick={()=> {
 
  axios({
        method: 'post',
        url: 'https://martreach.herokuapp.com/api/emailTemplates/testMail',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Token}`,
        },
        data:  {
          senderName: firstName ,
          email: email,
          html: url.html
        }
         
      })
      .then((response) => {
        alert('SAMPLE TEST SENT PLEASE CHECK YOUR MAIL')
        
  
      })
      .catch((err) => {
      alert("SENDING UNSUCCESSFUL")
      });
  
             
          }} className="teste">Test email</button>
          
         </div> <hr/></div> ) )} */}
          </div>
    )
}
