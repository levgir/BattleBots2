import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Row3, Container } from "../components/Grid";
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
        losses: formObject.losses,
        label: formObject.name.replace(/ /g,'')
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
        <Col size="md-6">
            <Jumbotron>
              <h1>Register a BattleBot</h1>
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
              <h1>Check out these BattleBots!</h1>
            </Jumbotron>
            {bots.length ? (
              <List>
                {bots.map(bot => (
                  <ListItem key={bot._id}>
                    <Container fluid>
                      <Row3>
                        <Col size="3">
                        <img id="pic1" src={`${process.env.PUBLIC_URL}/photos/${bot.label}.jpg`} alt={bot.label} height="100px" width="100px"></img>
                        </Col>
                        <Col size="4">
                          <strong>Name: </strong>{bot.name} <br></br>
                          <strong>Creator: </strong>{bot.owner} <br></br>
                          <strong>Record: </strong>{bot.wins}-{bot.losses}
                        </Col>
                        <Col size="4">
                          {bot.history}                
                        </Col>
                        <Col size="1"><DeleteBtn onClick={() => deleteBot(bot._id)} /></Col>
                        </Row3>
                      </Container>
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
