import React, { Component } from 'react';
import Table from 'app/page/common/table';
import ListGroup from 'app/page/common/listGroup';
import './styles/containerAdmin.css'

class ContainerAdmin extends Component {

    render() {
        return (
            <main className="container">
                <div className="row">
                    <div className="col-2">
                        <ListGroup />
                    </div>
                    <div className="col">
                        <Table />
                    </div>
                </div>
            </main>
        );
    }
}

export default ContainerAdmin;