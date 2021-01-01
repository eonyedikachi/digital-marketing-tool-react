import {Send_info} from '../actions/types';

const initialState ={
  registered_users:[
    {
      Test:"test"
    }
  ]
}

 const reducer=(state=initialState , action)=>{
  switch (action.type) {
  case Send_info:
    return{
      ...state,
      registered_users:[action.payload,...state.registered_users]
    }
      default:
         return state;
  }
}
export default reducer;