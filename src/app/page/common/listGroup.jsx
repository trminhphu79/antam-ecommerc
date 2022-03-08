import React from 'react';

const ListGroup = () => {
    return ( 
        <div className="list-group-section">
            <ul className="list-group">
                <li className="list-group-item active">All Products</li>
                <li className="list-group-item">Orders</li>
                <li className="list-group-item">Customers</li>
                <li className="list-group-item">Other</li>
            </ul>    
        </div>
     );
}
 
export default ListGroup;