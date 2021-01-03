import React from 'react'



const Errror =({touched,message})=>{
    if(!touched){
     return(<div className='form-message invalid'></div>)
    }
    if(message){
        return(<div className='form-message invalid' style={{color:'red'}}>{message}</div>)
    
    }
        return(<div className='form-message invalid'>all-good</div>)
    }
    export default Errror;