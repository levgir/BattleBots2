import React from "react";
import { Col, Row, Container } from "../components/Grid";

let activeSocket = false
var socket;
let lastKey = ''

let keyArr = [87, 65, 83, 68, 32]

function toggleConnection() {
  if(activeSocket === false){

    socket = new WebSocket('ws://192.168.137.65:7090')
    activeSocket = true

    socket.onopen = function(e) {
      console.log('Server connection established')
      socket.send('Browser connection established')
    //   $('#connectBtn').attr('style', 'background: rgba(0, 255, 0, 0.5);')
    }
    
    socket.onmessage = function(event) {
      console.log(`Data from server: ${event.data}`)
    }
    
    socket.onclose = function(event) {
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
    
    socket.onerror = function(error) {
    //   $('#connectBtn').attr('style', 'background: rgba(255, 0, 0, 0.5);')
      activeSocket = false
    }
  }else{
    activeSocket = false
    socket.send('Browser connection closed')
    socket.close()
  }
}

document.addEventListener('keydown', function(event){
    if(activeSocket === true){
        for(var i = 0; i < keyArr.length; i++){
          if(keyArr[i] === event.which && event.which !== lastKey){
            // socket.send(`keydown @ ${event.which}`)
            socket.send('forward')
          }
        }
        lastKey = event.which
      }
});

document.addEventListener('keyup', function(event) {
  for(var i = 0; i < keyArr.length; i++){
    if(keyArr[i] === event.which){
      socket.send(`keyup @ ${event.which}`)
    }
  }
  if(event.which === lastKey){
    lastKey = undefined
  }
})

function Fight(props) {
    console.log(props.bot1, props.bot2)
    return (
        
        <Container>
            <Row>
                <Col size="md-6">
                    <img onClick={toggleConnection} alt="" 
                    src="https://raw.githubusercontent.com/chillbuilds/battlebot/master/public/images/icons/raspberry-pi.png"></img>
                </Col>
                <Col size="md-6">
                    <input id="IPaddress" type="text"></input>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <h1>Fight!!!</h1>2
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <button>↑</button>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <button>←</button>
                    <button>→</button>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <button>↓</button>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <button>Attack</button>
                </Col>      
            </Row>
            <Row>
                <Col size="md-6">
                    <button>Connect</button>
                </Col>      
            </Row>
        </Container>
        
    )
        
}

export default Fight;