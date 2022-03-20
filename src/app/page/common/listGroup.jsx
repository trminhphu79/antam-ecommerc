import React from 'react';
import { Link } from "react-router-dom" ; 

const ListGroup = () => {
    return ( 
        <div className="list-group-section">
            <ul className="list-group">
                <Link to="/admin/all-products" className="list-group-item active">All Products</Link>
                <Link to="/admin/table-order" className="list-group-item">Orders</Link>
                <Link to="/admin/table-customer" className="list-group-item">Customers</Link>
            </ul>    
        </div>
    );
}
 
export default ListGroup;