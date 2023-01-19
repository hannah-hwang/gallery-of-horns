import React from "react";
import HornedBeast from "./HornedBeast";

import "./App.css"

class Main extends React.Component {
    render() {
        return (
            <main>
                {this.props.data.map((hornedBeast, idx) => <HornedBeast
                    title={hornedBeast.title}
                    image_url={hornedBeast.image_url}
                    description={hornedBeast.description}
                    key={hornedBeast._id}
                    handleShowModal={this.props.handleShowModal}
                />
                )}
            </main>
        )
    }
}

export default Main;

