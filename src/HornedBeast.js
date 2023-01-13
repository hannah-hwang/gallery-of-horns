import React from "react";
import Card from 'react-bootstrap/Card';
import "./App.css"

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
            clickedFavorite: true,
            favoritedNumber: this.state.favoritedNumber + 1
        })
    };

    render() {
        return (
            <div className="hornedBeast">
                <Card style={{ backgroundColor: "lavender" }} className="h-100">
                    <Card.Img src={this.props.image_url}
                        alt={this.props.description}
                        title={this.props.title}
                        onClick={this.handleFavorite} />
                    <Card.Title as="h2">{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>💜 Favorites: {this.state.favoritedNumber}</Card.Text>
                </Card>
            </div>
        )
    }
}

export default HornedBeast