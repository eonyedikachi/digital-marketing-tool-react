
export const Send_info="Send_info";
export const Log_in="Log_in";
export const show_it="show_it";

       
export const SignUp= values =>{
    return{
     type: Send_info,
    payload: values
    };
}

export const isLoggedin= ()=>{
    return{
     type: Log_in
    };
}

export const show= ()=>{
    return{
     type: show_it
    };
}