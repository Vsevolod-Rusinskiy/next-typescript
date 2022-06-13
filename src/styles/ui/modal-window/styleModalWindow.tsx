import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: ${props => props.isShowModal ? "flex" : "none"};
  background: rgba(0,0,0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  padding: 25px  20px 15px 25px;
  background: white;
  border-radius: 5px;
  min-width: 250px;
  text-align: center;

  button {
    margin-top: 10px;
    text-align: center;
  }
`;


