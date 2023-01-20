import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HornedBeast from "./HornedBeast";

import "./App.css"

class Main extends React.Component {
    render() {
        return (
            <main>
                <Container>
                    <Row xs={2} sm={3} md={5}>
                            {this.props.data.map((hornedBeast, idx) => <HornedBeast
                                title={hornedBeast.title}
                                image_url={hornedBeast.image_url}
                                description={hornedBeast.description}
                                key={hornedBeast._id}
                                handleShowModal={this.props.handleShowModal}
                            />
                            )}
                        
                    </Row>
                </Container>
            </main>
        )
    }
}

export default Main;

