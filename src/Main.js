import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"
import "./App.css"

class Main extends React.Component {
    render() {
        return (
            <main>
                {data.map((hornedBeast, idx) => <HornedBeast title={hornedBeast.title}
                    image_url={hornedBeast.image_url}
                    description={hornedBeast.description}
                    idx={idx}
                />)}
            </main>
        )
    }
}

export default Main

