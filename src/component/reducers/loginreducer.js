import {Log_in} from '../actions/types';

// const initialState ={
//   islogged:[
//     {
//       islogged:false
//     }
//   ]
// }

 const reducer=(state=false , action)=>{
  switch (action.type) {
  case Log_in:
    return !state
      default:
         return state;
  }
}
export default reducer;