import React, {Component } from 'react';


class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {id: 1, name: 'product 1', price: 1000, status: 1},
                {id: 2, name: 'product 2', price: 2000, status: 0},
                {id: 3, name: 'product 3', price: 3000, status: 1}
            ]
        }
    }
    render() {
        const productList = this.state.products.map((product, index) => {
            return (
                <tr key={product.id}>
                    <td>{ index+1 }</td>
                    <td>{ product.name }</td>
                    <td>{ product.price }</td>
                    <td>{ product.status === 1 ? 'Hien thi' : 'Khong hien thi' }</td>
                </tr>
            );
        });
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                            { productList }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Products;