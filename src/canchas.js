const express = require("express");
const router = express.Router();

let db = [
    { idSocio: 1, hora: "2022-11-07T18:21:00-03:00", idCancha: 3, llevaEquipo: true },
    { idSocio: 2, hora: "2022-11-07T18:21:00-03:00", idCancha: 4, llevaEquipo: true },
    { idSocio: 3, hora: "2022-11-07T18:21:00-03:00", idCancha: 1, llevaEquipo: false },
];

router.route("/")
    .get((req, res) => {
        res.status(200).json(
            db.map((item, index) => {
                item.id = index + 1;
                return item;
            })
        );
    })
    .post((req, res) => {
        db.push(req.body);
        res.status(200).json({ success: true, entity: req.body });
    });

router.route("/:id")
    .get((req, res) => {
        res.status(200).json({ success: true, entity: db[req.params.id - 1] });
    })
    .put((req, res) => {
        db[req.params.id - 1] = req.body;
        res.status(200).json({ success: true, entity: req.body });
    })
    .delete((req, res) => {
        db.splice(req.params.id - 1);
        res.status(200).json({ success: true });
    });

module.exports = router;