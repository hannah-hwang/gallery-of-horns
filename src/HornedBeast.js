import React from "react";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickedFavorite: false
        }
    }

    handleFavorite = () => {
        this.setState({
            clickedFavorite: true
        })
    }

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url}
                    alt={this.props.description}
                    title={this.props.title}
                    onClick=(this.handleFavorite)
                    />
                <p>{this.props.description}</p>
                {this.clickedFavorite ? <p>Favorited: 💜</p> : <p>Favorited: 🖤</p>}
            </>
        )
    }
}

export default HornedBeast