import {save_template} from '../actions/types';

const initialState ={
 templates:[
   {
    Test:"test"
   }
 ]
}

 const Temreducer=(state=initialState , action)=>{
  switch (action.type) {
  case save_template:
    return{
      ...state,
      templates:[action.payload,...state.templates]
    }
      default:
         return state;
  }
}
export default Temreducer;