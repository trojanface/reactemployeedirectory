import React, { Component } from 'react'

class navbar extends Component {



    render() {//renders with props passed from body.js
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Employee Directory</span>
                    <form onSubmit={this.props.searchEmployees} className="form-inline my-2 my-lg-0">
                        <input value={this.props.searchVal} onChange={this.props.changeVal} className="form-control mr-sm-2" type="search" placeholder="Search Names" aria-label="Search" />
        <button   className="btn btn-outline-success my-2 my-sm-0" type="submit">{this.props.searchToggle ? "Reset" : "Search"}</button>
                    </form>
                </nav>
            </div>
        )
    }
}

export default navbar
