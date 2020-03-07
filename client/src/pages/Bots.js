import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import Jumbotron2 from "../components/Jumbotron2";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Input, TextArea, FormBtn } from "../components/Form";

function Bots() {
  // Setting our component's initial state
  const [bots, setBots] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBots()
  }, [])

  // Loads all books and sets them to books
  function loadBots() {
    API.getBots()
      .then(res => 
        setBots(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit() {
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

  function deleteBot(id) {
    API.deleteBot(id)
      .then(res => loadBots())
      .catch(err => console.log(err));
  }

    return (
      <Container fluid>
        <Row>
          <Col size='sm-12'>
            <Jumbotron2>
              <h1>Welcome to the Fight!</h1>
            </Jumbotron2>
          </Col>
        </Row>
        <Row>
        <Col size="md-6">
            <Jumbotron>
              <h1>Register a new BattleBot.</h1>
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
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Registered BattleBots</h1>
            </Jumbotron>
            {bots.length ? (
              <List>
                {bots.map(bot => (
                  <ListItem key={bot._id}>
                    <Link to={"/bots/" + bot._id}>
                      <strong>
                        {bot.name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBot(bot._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }

export default Bots;
