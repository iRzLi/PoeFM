const express = require("express");
const request = require('request');
const router = express.Router();

router.get("/", (req, res) => {
    let items = {};
    request("https://www.pathofexile.com/api/trade/data/items", (err, resp, body) => {
        if (!err && resp.statusCode == 200) {
            // JSON.parse(body)
            JSON.parse(body)["result"].forEach(element => {
                items[element.label] = element.entries;
            });
            return res.json(items);
        }
    });
    // return res.json(items);
});

module.exports = router;

