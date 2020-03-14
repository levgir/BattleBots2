import React from "react";
import { Col2, Row, Container } from "../components/Grid";

let activeSocket = false
var socket;
let lastKey = ''
let ipAddress = ""

let keyArr = [87, 65, 83, 68, 32]

function toggleConnection() {
  if (activeSocket === false) {

    socket = new WebSocket('ws://' + ipAddress + ":7070")
    activeSocket = true

    socket.onopen = function (e) {
      console.log('Server connection established')
      socket.send('Browser connection established')
      //   $('#connectBtn').attr('style', 'background: rgba(0, 255, 0, 0.5);')
    }

    socket.onmessage = function (event) {
      console.log(`Data from server: ${event.data}`)
    }

    socket.onclose = function (event) {
      if (event.wasClean) {
        // $('#connectBtn').attr('style', 'background: rgba(0, 0, 0, 0);')
        activeSocket = false
      } else {
        // server process killed or network down
        alert(`You pull the monster mask off the server as it utters, "I would have gotten away with it, too. If it wasn't for error code ${event.code}"`)
        activeSocket = false
        // $('#connectBtn').attr('style', 'background: rgba(255, 0, 0, 0.5);')
      }
    }

    socket.onerror = function (error) {
      //   $('#connectBtn').attr('style', 'background: rgba(255, 0, 0, 0.5);')
      activeSocket = false
    }
  } else {
    activeSocket = false
    socket.send('Browser connection closed')
    socket.close()
  }
}

document.addEventListener('keydown', function (event) {
  if (activeSocket === true) {
    for (var i = 0; i < keyArr.length; i++) {
      if (keyArr[i] === event.which && event.which !== lastKey) {
        socket.send(`keydown @ ${event.which}`)
      }
    }
    lastKey = event.which
  }
});

document.addEventListener('keyup', function (event) {
  if (activeSocket === true) {
    for (var i = 0; i < keyArr.length; i++) {
      if (keyArr[i] === event.which) {
        socket.send(`keyup @ ${event.which}`)
      }
    }
    if (event.which === lastKey) {
      lastKey = undefined
    }
  }
})

function setIP() {
  ipAddress = document.getElementById("IPaddress").value
  console.log(ipAddress)
}

function Fight(props) {
  return (

    <Container>
      <Row>
        <Col2 size="md-12">
          <img onClick={toggleConnection} alt=""
            src="https://raw.githubusercontent.com/chillbuilds/battlebot/master/public/images/icons/raspberry-pi.png" height="200px" width="200px"></img><br></br>

          <input id="IPaddress" type="text" style={{ width: "220px", margin: "10px 0px 10px 0px" }} placeholder="Input BattleBot IP Address"></input>
          <button onClick={setIP}>Set</button>
        </Col2>
      </Row>
      <Row>
        <Col2 size="md-12">
          <button style={{ width: "50px", height: "50px", margin: "10px 0px 10px 0px" }}>↑</button>
        </Col2>
      </Row>
      <Row>
        <Col2 size="md-12">
          <button style={{ width: "50px", height: "50px", margin: "0px 5px 0px 0px" }}>←</button>
          <button style={{ width: "50px", height: "50px", margin: "0px 0px 0px 5px" }}>→</button>
        </Col2>
      </Row>
      <Row>
        <Col2 size="md-12">
          <button style={{ width: "50px", height: "50px", margin: "10px 0px 10px 0px" }}>↓</button>
        </Col2>
      </Row>
      <Row>
        <Col2 size="md-12">
          <button>Attack</button>
        </Col2>
      </Row>
    </Container>

  )

}

export default Fight;