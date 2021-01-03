import {show_it} from '../actions/types';



 const showme=(state=false , action)=>{
  switch (action.type) {
  case show_it:
    return !state
      default:
         return state;
  }
}
export default showme;