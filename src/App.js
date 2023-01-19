import React from "react";
import data from "./data.json";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastName: "",
      beastIMG: "",
      beastDescription: ""
    };
  }

  handleShowModal = (title, img_url, description) => {
    console.log('inside handleShowModal', title, img_url, description)
    this.setState({
      showModal: true,
      beastName: title,
      beastIMG: img_url,
      beastDescription: description
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }


  render() {
    console.log(this.state)
    return (
      <>
        <Header />
        <Main data={data} handleShowModal={this.handleShowModal} />
        <Footer />
        <SelectedBeast
          show={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          beastName={this.state.beastName}
          beastIMG={this.state.beastIMG}
          beastDescription={this.state.beastDescription}
        />
      </>
    );
  }
}


export default App;
