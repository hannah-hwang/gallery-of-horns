import React from "react";
import Modal from "react-bootstrap/Modal";

class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal
                show={this.props.showModal}
                onHide={this.props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.beastIMG} />
                </Modal.Body>
            </Modal>
        )
    }
}

export default SelectedBeast