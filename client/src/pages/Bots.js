import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";

function Bots() {
  // Setting our component's initial state
  const [bots, setBots] = useState([])

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

  function deleteBot(id) {
    API.deleteBot(id)
      .then(res => loadBots())
      .catch(err => console.log(err));
  }

    return (
      <Container fluid>
        <Row>
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
                        {bot.name} by {bot.owner}
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
