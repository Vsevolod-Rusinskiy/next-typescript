import { Modal, ModalContent } from "./styleModalWindow";

const ModalWindow = ({ children, visible, setVisible }) => {
  return (
    <Modal isShowModal={visible}>
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
};

export default ModalWindow;
