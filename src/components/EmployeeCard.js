import React, { Component } from 'react'

class EmployeeCard extends Component {
    
    render() {//renders with props passed from body.js
      
        return (
            <div className="card mb-1">
            <div className="row">
                <div className="col-md-1">
                   <img src={this.props.image} className="card-img-left" alt="..."/>
               </div>
               <div className="col-md-3 my-auto">
                   <h5>Name: {`${this.props.name.first} ${this.props.name.last}`}</h5>
               </div>
               <div className="col-md-3 my-auto">
                   <h5>Contact: {`${this.props.contact}`}</h5>
               </div>
               <div className="col-md-5 my-auto">
                   <h5>Address: {`${this.props.address.street.number} ${this.props.address.street.name}, ${this.props.address.city}, ${this.props.address.postcode}`}</h5>
               </div>
            </div>
            </div>
        )
    }
}

export default EmployeeCard