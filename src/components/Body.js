import React, { Component } from 'react' //imports react and components from package
import EmployeeCard from './EmployeeCard'; //imports employee card component
import Wrapper from './Wrapper'; //imports wrapper component
import API from "../utils/API" //imports API utility
import Navbar from './Navbar'; //imports navbar component
import { ABCSort, EmpSearch } from "../utils/EmployeeFuncs"; //imports sort and search utilities

class Body extends Component {
    state = { //sets the state variables
        employeeArray: [],
        alphabetToggle: false,
        fullEmployeeArray: [],
        searchVal: "",
        searchToggle: false
    }

    componentDidMount() {//upon first render query the api
        this.queryAPI();
    }

    queryAPI = () => {
        API.getEmployees()
            .then(res => {
                this.setState({ employeeArray: res.data.results, fullEmployeeArray: res.data.results })//set state variables with api results
            })
            .catch(err => console.log(err));
    }

    searchEmployees = (event) => {//uses imported search function to search employees
        this.setState(EmpSearch(event, this.state.searchToggle, this.state.searchVal, this.state.employeeArray, this.state.fullEmployeeArray));
    }



    alphabeticalSort = () => {//uses imported sort function to sort employees
        this.setState(ABCSort(this.state.employeeArray, this.state.alphabetToggle));
    }

    changeVal = (event) => {//handles value changes on search input box
        this.setState({ searchVal: event.target.value })
    }

    render() {//renders the components and passes props
        return (
            <>
                <Navbar searchToggle={this.state.searchToggle} searchEmployees={this.searchEmployees} changeVal={this.changeVal} searchVal={this.state.searchVal} />
                <Wrapper>

                    <div className="card">
                        <div className="row">
                            <div className="col-md-1 my-auto">
                            </div>
                            <div className="col-md-3 my-auto">
                                <h5 onClick={this.alphabeticalSort}>Name {this.state.alphabetToggle ? <i className="fas fa-arrow-down"></i> : <i className="fas fa-arrow-up"></i>}</h5>
                            </div>
                            <div className="col-md-3 my-auto">
                                <h5>Contact</h5>
                            </div>
                            <div className="col-md-5 my-auto">
                                <h5>Address</h5>
                            </div>
                        </div>
                    </div>
                    {this.state.employeeArray.map(({ picture, name, cell, location, id }) => (
                        <EmployeeCard image={picture.thumbnail} name={name} contact={cell} address={location} key={id.value} />
                    ))}
                </Wrapper>
            </>
        );
    }
}

export default Body
