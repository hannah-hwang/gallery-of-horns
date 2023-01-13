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
            clickedFavorite: this.state.clickedFavorite ? false : true
        })
    };

    render() {
        return (
            <div className="hornedBeast">
                <Card>
                    <Card.Title as="h2">{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Img src={this.props.image_url}
                        alt={this.props.description}
                        title={this.props.title}
                        onClick={this.handleFavorite} />
                    {this.state.clickedFavorite ? <Card.Text>Favorited: 💜</Card.Text> : <Card.Text>Favorited: 🖤</Card.Text>}
                    <Card.Text>Favorites: {this.state.favoritedNumber}</Card.Text>
                </Card>
            </div>
        )
    }
}

export default HornedBeast