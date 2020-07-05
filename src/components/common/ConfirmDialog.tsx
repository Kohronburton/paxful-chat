import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";

interface Props {
  isOpen: boolean;
  toggle: () => void;
  yesAction: () => void;
  title: string;
  message: string;
}

const ConfirmDialog: React.FC<Props> = ({
  isOpen,
  toggle,
  yesAction,
  title,
  message,
}) => {
  return (
    <Modal centered isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{message}</ModalBody>
      <ModalFooter>
        <Button color="dark" size="sm" onClick={toggle}>
          NO
        </Button>
        <Button color="primary" size="sm" onClick={yesAction}>
          YES
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmDialog;
