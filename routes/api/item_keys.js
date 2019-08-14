const express = require("express");
const request = require('request');
const router = express.Router();


router.post("/", (req, res) => {
    // debugger
    // req.body
    // add data to params
    let params = {
        "query": {
            "status": {
                "option": "online"
            },
            // "name": "", Cant have a name if doesnt exists
            //  Dont even put null here
            // "type": "Spider Forest Map",
            // "stats": [{
            //     "type": "and",
            //     "filters": []
            // }]
        },
        "sort": {
            "price": "asc"
        }
    };

    if (req.body.searchObj.item.name) {
        params.query["name"] = req.body.searchObj.item.name;
    }

    if (req.body.searchObj.item.type) {
        params.query["type"] = req.body.searchObj.item.type;
    }

    let url = `https://www.pathofexile.com/api/trade/search/${req.body.searchObj.league}`;
    // debugger
    request.post({ url: url, json: params }, (err, resp, body) => {
        if (!err && resp.statusCode == 200) {
            // debugger
            return res.json({ searchItems: body });
        } else {
            return res.status(400).json({ items: 'Oopsie' });
            // throw new Error('BROKEN')
        }
    });
});

router.post("/getItems", (req, res) => {
    // https://www.pathofexile.com/api/trade/fetch/08e29a1b8ba44dc6e4ed32b51638d992b2eda2df3b8b8955df5337a9ab1bf14b?query=NK6Ec5
    // https://www.pathofexile.com/api/trade/fetch/{array.join(",")}
    // ?query=NK6Ec5
    // req.body.itemKeyObj.result.slice(0, 10).join(",")
    // debugger
    let begin = (req.body.offset - 1) * 10;
    let end = req.body.offset * 10;
    let fetchString = req.body.itemKeyObj.result.slice(begin, end).join(",");
    let query = "?query" + req.body.itemKeyObj.id
    let url = "https://www.pathofexile.com/api/trade/fetch/" + fetchString + query;

    request(url, (err, resp, body) => {
        if (!err && resp.statusCode == 200) {
            // debugger
            return res.json(JSON.parse(body));
        } else {
            return res.status(400).json({ items: 'Oopsie' });
        }
    });
});

module.exports = router;
