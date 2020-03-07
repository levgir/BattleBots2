import React, { useState, useEffect } from "react";
import Jumbotron3 from "../components/Jumbotron3";
import API from "../utils/API";
import { Col, Col2, Row, Row2, Container } from "../components/Grid";
import Select from "react-select";
import { Link } from "react-router-dom";
import BlackDiamond from "../utils/photos/Black Diamond.jpg" 


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

  function mapBots() {
    battleBots = bots.map(bot => ({ 
      label: bot.name,
      value: bot._id,
      history: bot.history,
      wins: bot.wins,
      losses: bot.losses,
      owner: bot.owner 
    }))
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          {bots.length ? (
            mapBots(),
            <Select
              placeholder="Select your BattleBot"
              options={battleBots}
              isSearchable
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
              placeholder="Select your next victim"
              options={battleBots}
              isSearchable
              onChange={setBot2}
            />
          ) : (
              <Select
                placeholder="There are no BattleBots registered!"
              />
            )}
        </Col>
      </Row>
      <Row2>
        <Col size="md-5 sm-12">
          <Jumbotron3>
            <img src= {BlackDiamond} alt={bot1.label} height="150px" width="150px" style={{float:"left"}}></img>
            <p><strong>BattleBot: {bot1.label}</strong></p>
            <p><strong>Owner: {bot1.owner}</strong></p>
            <p><strong>{bot1.wins} - {bot1.losses}</strong></p>
            <p>{bot1.history}</p>
          </Jumbotron3>
        </Col>
        <Col2 size="md-1 sm-12">
          <h1>Vs.</h1>
        </Col2>
        <Col size="md-5 sm-12">
          <Jumbotron3>
            <img src= {BlackDiamond} alt={bot2.label} height="150px" width="150px" style={{float:"left"}}></img>
            <p><strong>BattleBot: {bot2.label}</strong></p>
            <p><strong>Owner: {bot2.owner}</strong></p>
            <p><strong>{bot2.wins} - {bot2.losses}</strong></p>
            <p>{bot2.history}</p>
          </Jumbotron3>
        </Col>
      </Row2>
      <Row>
      <Link to={{pathname:"/fight", bot1:bot1, bot2:bot2}}><strong>Fight!</strong></Link>
      </Row>
    </Container>
  );
}

export default NewMatch;
