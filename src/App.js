import React, { Component } from 'react';
import Hello from './components/Hello';
import Products from './containers/Products';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Tung 1',
            name1: 'Tung'
        }
        this.changeName = this.changeName.bind(this);
        this.changeName1 = this.changeName1.bind(this);
    }
    changeName(){

        this.setState({
            name: 'Toan'
        })
    }
    changeName1(e){
        this.setState({
            name1: e
        })
    }
   render() {
    return (
        <div>
            <Products />
        </div>
    );    
   }
}
export default App;


    // co 1 the bao cung (wrapper tag)
    // class->className, for ->htmlFor, 
    // luon phai co the dong/ img, input, b, br
    // event handleer dung camelCase;