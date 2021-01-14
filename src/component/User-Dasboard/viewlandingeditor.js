import React ,{useState, useEffect} from 'react'
// import {useSelector} from 'react-redux'
import axios from "axios";



export default function Viewlandingeditor() {

    const Token = localStorage.getItem("Token");

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

// 



    return (
      
        <div  style={{width: '60%', backgroundColor: '#F4F5F7', margin: 'auto', minHeight: '100vh'}}>
          <h2 className='editorh2'>View saved template </h2> 
          
          {url.map((url)=>(<div><div className="SIcont">
          <div className='viewedit'>
               <img src={url.image}/>
            </div> 
          <button>Delete</button>
          
         </div> <hr/></div> ) )}
          </div>
    )
}
