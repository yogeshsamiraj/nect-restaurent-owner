import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Dialog({...props}) {

  const toggle = () => props.setOpen(props.open);

  return (
    <div>
      <Modal isOpen={props.open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add widgets</ModalHeader>
        <ModalBody>
          {props.modalBody}
        </ModalBody>
        <ModalFooter>
          {props.modalFooter}
          </ModalFooter>
      </Modal>
    </div>
  );
}

export default Dialog;