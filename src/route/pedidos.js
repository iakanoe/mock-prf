const express = require("express");
const router = express.Router();
const repository = require("../repository/pedidos.repository");

router.route("/")
    .get((req, res) => {
        let r = repository.getAll();
        res.status(200).json(r);
    })
    .post((req, res) => {
        let r = repository.add(req.body);
        res.status(200).json({ success: true, entity: r });
    });

router.route("/:id")
    .get((req, res) => {
        let r = repository.getById(req.params.id);
        res.status(200).json({ success: true, entity: r });
    })
    .put((req, res) => {
        let r = repository.modify(req.params.id, req.body);
        res.status(200).json({ success: true, entity: r });
    })
    .delete((req, res) => {
        repository.deleteById(req.params.id);
        res.status(200).json({ success: true });
    });

module.exports = router;