const router = require("express").Router();
const botsController = require("../../controllers/botsController");

// Matches with "/api/books"
router.route("/")
  .get(botsController.findAll)
  .post(botsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(botsController.findById)
  .put(botsController.update)
  .delete(botsController.remove);

module.exports = router;
