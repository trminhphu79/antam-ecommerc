import React from 'react';
import { getProducts } from 'app/page/fakeServer/productChaillo';

const Table = () => {
    const products = getProducts();
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>title</th>
                    <th>Price Low</th>
                    <th>Price Hight</th>
                    <th>Id</th>
                    <th>
                        <button className=" btn-success">create</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map((item, index) => {
                    if (index < 4) {
                        return (
                        <tr key={item._id}>
                            <td>{item.title}</td>
                            <td>{item.priceLow}</td>
                            <td>{item.priceHight}</td>
                            <td>{item._id}</td>
                            <td>
                                <button className=' btn-danger' >delete</button>
                            </td>
                        </tr>)
                    }
                    return null ; 
                })}
            </tbody>
        </table>
    );
}

export default Table;