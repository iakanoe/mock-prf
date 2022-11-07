const express = require("express");
const router = express.Router();

let db = [
    { description: "Milanesa con fritas", takeout: true, address: "UF 420", idSocio: 1, hora: "2022-11-07T18:21:00-03:00" },
    { description: "Ensalada mixta", takeout: true, address: "UF 69", idSocio: 2, hora: "2022-11-07T20:00:00-03:00" },
    { description: "Pizza de Muzarella", takeout: true, address: "UF 42", idSocio: 3, hora: "2022-11-07T18:21:49-03:00" },
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
        console.log(req.body, 'AKI')
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
        db.splice(req.params.id - 1, 1);
        res.status(200).json({ success: true });
    });

module.exports = router;