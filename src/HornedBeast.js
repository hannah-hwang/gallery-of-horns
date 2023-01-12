import React from "react";

class HornedBeast extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickedFavorite: false,
            favoritedNumber: 0
        };
    }

    handleFavorite = () => {
        this.setState({
            clickedFavorite: this.state.clickedFavorite ? false : true
        })
    };

    render() {
        return (
            <div className="hornedBeast">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <img src={this.props.image_url}
                    alt={this.props.description}
                    title={this.props.title}
                    height={300}
                    onClick={this.handleFavorite}
                />
                {this.state.clickedFavorite ? <p>Favorited: 💜</p> : <p>Favorited: 🖤</p>}
                <p>Favorites: {this.state.favoritedNumber}</p>
            </div>
        )
    }
}

export default HornedBeast