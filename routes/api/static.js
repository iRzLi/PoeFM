const express = require("express");
const request = require('request');
const router = express.Router();

router.get("/", (req, res) => {
    request("https://www.pathofexile.com/api/trade/data/static", (err, resp, body) => {
        if (!err && resp.statusCode == 200) {
            return res.json(JSON.parse(body)["result"]);
        }else {
            return res.status(400).json({ static: 'Oopsie' });
        }
    });
});

module.exports = router;
