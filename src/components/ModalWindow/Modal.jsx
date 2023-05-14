import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStd } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <>
        <Overlay onClick={this.handleBackdropClick}>
          <ModalStd>
            <img src={this.props.largePhoto} alt="" />
          </ModalStd>
        </Overlay>
      </>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largePhoto: PropTypes.string.isRequired,
};

export default Modal;
