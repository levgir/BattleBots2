import axios from "axios";

export default {
  // Gets all books
  getBots: function() {
    return axios.get("/api/bots");
  },
  // Gets the book with the given id
  getBot: function(id) {
    return axios.get("/api/bots/" + id);
  },
  // Deletes the book with the given id
  deleteBot: function(id) {
    return axios.delete("/api/bots/" + id);
  },
  // Saves a book to the database
  saveBot: function(botData) {
    return axios.post("/api/bots", botData);
  },
  login: function(loginInfo) {
    return axios.post("/api/users/login", loginInfo);
  },
  signup: function(signupInfo) {
    return axios.post("/api/users/signup", signupInfo);
  },

  isLoggedIn: function() {
    return axios.get("/api/users/profile");
  },

  logout: function() {
    return axios.get("/api/users/logout")
  }
};
