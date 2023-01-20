import React from "react";
import Modal from "react-bootstrap/Modal";
import "./App.css"

class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal className="modal"
                show={this.props.show}
                onHide={this.props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.beastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={this.props.beastIMG}
                        alt={this.props.beastDescription}
                        title={this.props.beastName}
                        height={300}
                    />
                    <p>{this.props.beastDescription}</p>
                </Modal.Body>
            </Modal>
        )
    }
}

export default SelectedBeast;