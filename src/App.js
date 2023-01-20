import React from "react";
import data from "./data.json";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import SelectedBeast from "./SelectedBeast";
import "./App.css";
import Form from "react-bootstrap/Form";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastName: "",
      beastIMG: "",
      beastDescription: "",
      beastData: data
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

  updateBeastData = (e) => {
    e.preventDefault();
    const horns = e.target.value;
    let updatedHorns;

    if (horns === "") {
      updatedHorns = data;
    }
    else {
      updatedHorns = data.filter(beast => beast.horns === Number(horns))
    }
    this.setState({
      beastData: updatedHorns
    })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <Header />

        <Form>
          <Form.Group>
            <Form.Label>Number of Horns:</Form.Label>
            <Form.Select onChange={this.updateBeastData}>
              <option value={""}>All Beasts</option>
              <option value={"1"}>1 Horn</option>
              <option value={"2"}>2 Horns</option>
              <option value={"3"}>3 Horns</option>
              <option value={"100"}>100 Horns</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Main data={this.state.beastData} handleShowModal={this.handleShowModal} />
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
