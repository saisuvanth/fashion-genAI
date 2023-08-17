import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

//sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

const CustomModal = (props) => {
  const { open, size, handleClose, header, children } = props;

  return (
    <>
      <Modal isOpen={open} size={size} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
