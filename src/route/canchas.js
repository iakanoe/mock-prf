const express = require("express");
const router = express.Router();
const repository = require("../repository/canchas.repository");

router.route("/")
    .get(async (req, res) => {
        let r = await repository.getAllBySocio(req.query.id);
        res.status(200).json(r);
    })
    .post(async (req, res) => {
        let r = await repository.add(req.body);
        res.status(200).json({ success: true, entity: r });
    });

router.route("/:id")
    .get(async (req, res) => {
        let r = await repository.getById(req.params.id);
        res.status(200).json({ success: true, entity: r });
    })
    .put(async (req, res) => {
        let r = await repository.modify(req.params.id, req.body);
        res.status(200).json({ success: true, entity: r });
    })
    .delete(async (req, res) => {
        await repository.deleteById(req.params.id);
        res.status(200).json({ success: true });
    });

module.exports = router;