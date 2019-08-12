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

    if (req.body.searchObj.item.name){
        params.query["name"] = req.body.searchObj.item.name;
    }

    if (req.body.searchObj.item.type) {
        params.query["type"] = req.body.searchObj.item.type;
    }
    
    let url = `https://www.pathofexile.com/api/trade/search/${req.body.searchObj.league}`;
    // debugger
    request.post({ url: url, json: params}, (err, resp, body) => {
        if (!err && resp.statusCode == 200) {
            // debugger
            return res.json({searchItems: body});
        } else {
            return res.status(400).json({ items: 'Oopsie' });
            // throw new Error('BROKEN')
        }
    });
});

module.exports = router;
