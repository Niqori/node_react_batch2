const express = require("express");
const {
  handleInsertMovie,
  handleReadMovies,
  handleUpdateMovie,
  handleDeleteMovie,
  handleReadMovieById,
} = require("../controller/controllerMovie");
const { handleBasicAuthentication } = require("../midleware/basicAuth");
const { handleJWTauth } = require("../midleware/jwtAuth");
const routerMovie = express.Router();


routerMovie.post("/add",handleJWTauth ,handleInsertMovie);
routerMovie.get("/view", handleReadMovies);
routerMovie.get("/view/:id", handleReadMovieById);
routerMovie.put("/change/:id", handleJWTauth, handleUpdateMovie);
routerMovie.delete("/remove/:id", handleJWTauth, handleDeleteMovie);

module.exports = { routerMovie };
