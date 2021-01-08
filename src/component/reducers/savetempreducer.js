import {save_template} from '../actions/types';

const initialState ={
  Templates:
    {
      Test:"test"
    }
}

 const template=(state=initialState , action)=>{
  switch (action.type) {
  case save_template:
    return{
      ...state,
      Templates:[action.payload,...state.Templates]
    }
      default:
         return state;
  }
}
export default template;