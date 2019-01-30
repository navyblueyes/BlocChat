import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import RoomList from './components/RoomList.js';

var config = {
    apiKey: "AIzaSyBGw5gpAgVb-revSzOZn439t9vspIUV88s",
    authDomain: "blocchat-mink.firebaseapp.com",
    databaseURL: "https://blocchat-mink.firebaseio.com",
    projectId: "blocchat-mink",
    storageBucket: "blocchat-mink.appspot.com",
    messagingSenderId: "700330258369"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="titleRooms">Available Rooms</div>
          <div className="listOfRooms">
            <RoomList
              setActiveRoom={this.setActiveRoom}
              firebase={firebase}
            />
          </div>
          </div>
      </React.Fragment>
    );
  }
}

export default App;
