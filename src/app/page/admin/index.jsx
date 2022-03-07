import React, { Component } from 'react';
import HeaderAdmin from './headerAdmin';
import ContainerAdmin from './containerAdmin';

class Admin extends Component {

    render() {
        return (
            <React.Fragment>
                <HeaderAdmin />
                <ContainerAdmin />
            </React.Fragment>
        );
    }
}

export default Admin;