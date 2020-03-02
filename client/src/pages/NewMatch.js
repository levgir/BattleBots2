import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Select from "react-select";


function NewMatch() {
  // Setting our component's initial state
  const [bots, setBots] = useState([])
  const [bot1, setBot1] = useState({})
  const [bot2, setBot2] = useState({})

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

  // function getBot1(botID) {
  //   API.getBott(this.value)
  //     .then(res => 
  //       setBot1(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  function mapBots() {
    battleBots = bots.map(bot => ({ 
      label: bot.name,
      value: bot._id,
      history: bot.history,
      wins: bot.wins,
      losses: bot.losses,
      owner: bot.owner 
    }))
    console.log(bots)
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          {bots.length ? (
            mapBots(),
            <Select
              options={battleBots}
              isSearchable
              isClearable
              onChange={setBot1}
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
              isSearchable
              isClearable
              onChange={setBot2}
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
            <p><strong>BattleBot: {bot1.label}</strong></p>
            <p><strong>Owner: {bot1.owner}</strong></p>
            <p><strong>{bot1.wins} - {bot1.losses}</strong></p>
            <p>{bot1.history}</p>
          </Jumbotron>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Choose Your Bot</h1>
            <p><strong>BattleBot: {bot2.label}</strong></p>
            <p><strong>Owner: {bot2.owner}</strong></p>
            <p><strong>{bot2.wins} - {bot2.losses}</strong></p>
            <p>{bot2.history}</p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NewMatch;
