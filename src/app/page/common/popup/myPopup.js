import React from "react";
import { Button, Modal } from "react-bootstrap";

export function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
        </Modal.Header>
        <Modal.Body>
         
        </Modal.Body>
      </Modal>
    );
  }
  