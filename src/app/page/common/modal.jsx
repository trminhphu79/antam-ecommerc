import React, { Component } from 'react';
import Form from './form' ; 
import "./styles/modal.css";

class Modal extends Component {

  render() {
    const { history , onCreate , products , match } = this.props;
  
    return (
      <Form 
        match={match}
        history={history}
        onCreate={onCreate}
        products={products}
      />
    );
  }
}

export default Modal;

