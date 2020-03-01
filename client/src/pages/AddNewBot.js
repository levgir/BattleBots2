import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

function Bots() {
  // Setting our component's initial state
  const [formObject, setFormObject] = useState({})

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name && formObject.owner) {
      API.saveBot({
        name: formObject.name,
        owner: formObject.owner,
        history: formObject.history,
        wins: formObject.wins,
        losses: formObject.losses
      })
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Register a new bot.</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="owner"
                placeholder="Owner (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="history"
                placeholder="Bot's History (Optional)"
              />
              <Input
                onChange={handleInputChange}
                name="wins"
                placeholder="Wins (required)"
              />
              <Input
                onChange={handleInputChange}
                name="losses"
                placeholder="Losses (required)"
              />
              <FormBtn
                disabled={!(formObject.owner && formObject.name)}
                onClick={handleFormSubmit}
              >
                Register BattleBot
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }


export default Bots;
