import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const ModalWindow = ({modalIsOpen, closeModal, children}) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
        >
          {children}
        </Modal>
    );
};


export default ModalWindow;
