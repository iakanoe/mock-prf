const express = require("express");
const router = express.Router();
const repository = require("../repository/menu.repository");

router.get("/", (req, res) => {
    let r = repository.getAll();
    res.status(200).json(r);
});

module.exports = router;