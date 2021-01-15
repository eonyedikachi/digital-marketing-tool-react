import React ,{useState, useEffect} from 'react'
// import {useSelector} from 'react-redux'
import axios from "axios";



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




    return (
      
        <div  style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>
          <h2 className='editorh2'>View saved template </h2> 
          
          {url.map((url)=>(<div><div className="SIcont">
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
          
         </div> <hr/></div> ) )}
          </div>
    )
}
