import axios from 'axios';
export const Send_info="Send_info";

       
export const SignUp= values =>{
    return{
     type: Send_info,
    payload: values
    };
}