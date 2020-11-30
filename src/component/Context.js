import React, {Component} from 'react';

const Context=React.createContext();

const reducer = (state, action) => {
switch(action.type){
    case "DELETE_CONTACT":
    return{
      ...state,
         contacts: state.contacts.filter(contact => contact.id
            !== action.payload )
    }
    case "ADD_CONTACT":
    return{
      ...state,
      contacts: [action.payload, ...state.contacts]
    }
    default:
        return state;
    }
}

export class Provider extends Component{
    state = {
        contacts:[
            {id:1,
            name:'Aminu',
            email:'Aminu@gmail.com'},
            {id:2,
            name:'larry',
            email:'larry@gmail.com'},
            {id:3,
            name:'rose',
           email:'rose@gmail.com'}

        ],
        dispatch: action => 
            this.setState(state => reducer(state, action))
        
    };
    render(){
        return(
            <Context.Provider value={this.state}>

              {this.props.children}
            </Context.Provider>  
        );
    }  
};

export const Consumer = Context.Consumer;