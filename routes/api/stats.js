const express = require("express");
const request = require('request');
const router = express.Router();

router.get("/", (req, res) => {
    let stats = {};
    request("https://www.pathofexile.com/api/trade/data/stats", (err, resp, body) => {
        if (!err && resp.statusCode == 200) {
            // JSON.parse(body)
            JSON.parse(body)["result"].forEach(element => {
                stats[element.label] = element.entries;
            });
            return res.json(stats);
        }
    });
    // return res.json(items);
});

module.exports = router;

