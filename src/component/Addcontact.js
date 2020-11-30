import React, { Component } from 'react';
import {Consumer} from './Context';

 class Addcontact extends Component {

    state ={
        name:'',
        email:'',
    };

    onSubmit= (dispatch, e) => {
        e.preventDefault();
        const {name,email}= this.state

       const newContact={
        id:4,
        name,
        email
        };
        dispatch({type: 'ADD_CONTACT', payload:newContact});

        this.setState({
            name:'',
            email:'' ,
            error:{}
        })
    }

    onChange= e => this.setState({ [e.target.name] : e.target.value})
    render() {
        const {name,email}= this.state;
        return(
            <Consumer>

                {value => {
            const  {dispatch} = value;

                    return(
                        <div className='card mb-3'>
                <div className="card-header">
                      Add Contact
                </div>
                <div className="card-body">
                   <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                       <div className="form-group">
                           <label htmlfor="name">
                               name
                           </label>
                             <input name="name"type="text" className="form-control form-control-lg"
                             placeholder="Enter name..."
                              value={name}
                              onChange={(this.onChange)}
                             />
                       </div>
                       <div className="form-group">
                           <label htmlfor="name">
                               email
                           </label>
                             <input name="email"type="email" className="form-control form-control-lg"
                             placeholder="Enter email..."
                              value={email}
                              onChange={(this.onChange)}
                              />
                       </div>
                    <input type="submit" value="Add Contact"
                    className="btn btn-light btn-block"/>
                   </form>
                </div>
            </div>
                    )

                }}
            </Consumer>
        ) 

    }
}
export default Addcontact