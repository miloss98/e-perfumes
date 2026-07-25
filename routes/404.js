const express = require("express");

const router = express.Router();

const errorsController = require("../controllers/errors");

router.use(errorsController.notFound);

module.exports = router;
