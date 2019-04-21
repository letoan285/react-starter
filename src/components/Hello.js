import React, {Component } from 'react';


class Hello extends Component {
    constructor() {
        super();
        this.state = {
            name: 'child name'
        }
    }
    render() {
        return (
            <div>
                <h3>Hello: {this.props.name}</h3>
                <h3>Hi: {this.props.text}</h3>
                <button onClick={ this.props.changeName }>Change Name</button>
                <button onClick={() => this.props.changeName1(this.state.name) }>change name 1</button>
            </div>
        );
    }
}
export default Hello;
// class component
// class component / smart component / container component 

// functional component. 
// khong co ham render, 
// lifecycle.
// khong chua state, 
// khong dung this
// stateless/Dump/Presentation