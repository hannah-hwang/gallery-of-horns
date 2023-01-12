import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"

class Main extends React.Component {
    render() {
        return (
            <>
                {data.map(hornedBeast => <HornedBeast title={hornedBeast.title} image_url={hornedBeast.image_url} description={hornedBeast.description}/>)}
            </>
        )
    }
}

export default Main

