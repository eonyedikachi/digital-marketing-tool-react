import React from 'react';

import {Consumer} from '../Context'

class Contact extends React.Component {
    state={
      showcontactinfo:false
    };
    ondeleteclick=(id, dispatch)=>{
        dispatch ({type: 'DELETE_CONTACT', payload:id});
    }

    render() {
        const {id, name, email}=this.props.contact
        const {showcontactinfo}=this.state
        return (
        <Consumer>
          {value => {
            const {dispatch} = value;
            return( 
              <div>
           <h4>{name} <i onClick={()=>
              this.setState({showcontactinfo:  
                 !showcontactinfo})
           }
           className=" fas fa-sort-down" style={{ cursor:'pointer'}}/>
           <i className='fas fa-times' style={{ color:'red', float:'right', cusor:'pointer'}}
            onClick={this.ondeleteclick.bind(this , id , dispatch)}/></h4>
           {showcontactinfo ? ( <ul>
               <li>{name}</li>
               <li>{email}</li>
           </ul>): null}
          
            </div>
            );
          }}
        </Consumer>)
        
    }
}

export default Contact;