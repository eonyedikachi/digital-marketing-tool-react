import React, { Component } from 'react'

 class Addcontact1 extends Component {
     constructor(props) {
         super(props);
         this.nameInput = React.createRef()
         this.emailInput = React.createRef()
     }

    onSubmit= (e) => {
        e.preventDefault();
      const contact = {
           name: this.nameInput.current.value,
           email: this.nameInput.current.value
       };
       console.log(contact);
    };

    static defaultProps = {
        name:'Caleb Wonder',
        email: 'caleb@gmail.com'
    }

    render() {
        const {name,email}= this.props
        return (
            <div className='card mb-3'>
                <div className="card-header">
                      Add Contact
                </div>
                <div className="card-body">
                   <form onSubmit={this.onSubmit}>
                       <div className="form-group">
                           <label htmlfor="name">
                               name
                           </label>
                             <input name="name"type="text" className="form-control form-control-lg"
                             placeholder="Enter name..."
                              defaultValue={name}
                              ref={this.nameInput}/>
                       </div>
                       <div className="form-group">
                           <label htmlfor="name">
                               email
                           </label>
                             <input name="email"type="email" className="form-control form-control-lg"
                             placeholder="Enter email..."
                              defaultValue={email}
                              ref={this.emailInput}/>
                       </div>
                    <input type="submit" value="Add Contact"
                    className="btn btn-light btn-block"/>
                   </form>
                </div>
            </div>
        )
    }
}
export default Addcontact1