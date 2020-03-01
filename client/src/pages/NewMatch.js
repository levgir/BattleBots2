import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Select from "react-select"


function NewMatch() {
  // Setting our component's initial state
  const [bots, setBots] = useState([])

  let battleBots = []

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

  function mapBots() {
    battleBots = bots.map(bot => ({ value: bot.id, label: bot.name }))
    console.log("I ran")
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          {bots.length ? (
            mapBots(),
            <Select
              options={battleBots}
            />
          ) : (
              <Select
                placeholder="There are no BattleBots registered!"
              />
            )}
        </Col>
        <Col size="md-6 sm-12">
          {bots.length ? (
            mapBots(),
            <Select
              options={battleBots}
            />
          ) : (
              <Select
                placeholder="There are no BattleBots registered!"
              />
            )}
        </Col>
      </Row>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Choose Your Bot</h1>
          </Jumbotron>
          {bots.length ? (
            <List>
              {bots.map(bot => (
                <ListItem key={bot._id} >
                  <strong>
                    {bot.name} by {bot.owner}
                  </strong>
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Choose Your Enemy</h1>
          </Jumbotron>
          {bots.length ? (
            <List>
              {bots.map(bot => (
                <ListItem key={bot._id}>
                  <strong>
                    {bot.name} by {bot.owner}
                  </strong>
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

export default NewMatch;
