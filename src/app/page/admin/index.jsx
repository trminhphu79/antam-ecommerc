import React, { Component } from 'react';
import HeaderAdmin from './headerAdmin';
import ContainerAdmin from './containerAdmin';
import { getOrders , getCustomers , getProducts } from '../fakeServer/productChaillo';


class Admin extends Component {

    state = {
        products : getProducts()  , 
        orders : getOrders() ,
        customers : getCustomers() ,
    }

    handleDelete (item){
       console.log(item)
    }

    render() {

        const { products , orders , customers } = this.state ; 
        return (
            <React.Fragment>
                <HeaderAdmin />
                <ContainerAdmin
                    products={products} 
                    orders={orders}
                    customers={customers}
                    onDelete={this.handleDelete}
                />
            </React.Fragment>
        );
    }
}

export default Admin;