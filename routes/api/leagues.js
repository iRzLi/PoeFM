const express = require("express");
const request = require('request');
const router = express.Router();

router.get("/", (req, res) => {
    let items = {};
    request("https://www.pathofexile.com/api/leagues", (err, resp, body) => {
        if (!err && resp.statusCode == 200) {
            JSON.parse(body).forEach(element => {
                items[element.id] = element;
            });
            return res.json(items);
        } else {
            return res.status(400).json({ items: 'Oopsie' });
        }
    });
});




module.exports = router;