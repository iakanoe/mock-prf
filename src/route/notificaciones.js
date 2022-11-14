const express = require("express");
const router = express.Router();
const repository = require("../repository/notificaciones.repository");

router.route("/")
    .get((req, res) => {
        let r = repository.getAllBySocio(req.query.id);
        res.status(200).json(r);
    })
    .post((req, res) => {
        let r = repository.add(req.body);
        res.status(200).json({ success: true, entity: r });
    });

router.route("/:id")
    .delete((req, res) => {
        repository.deleteById(req.params.id);
        res.status(200).json({ success: true });
    });

router.route("/deleteAll")
    .delete((req, res) => {
        repository.deleteAll(req.params.id);
        res.status(200).json({ success: true });
    });

module.exports = router;