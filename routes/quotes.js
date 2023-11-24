const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.json({
        data:[
            {
                quote: 'First',
                author: 'John'
            }
        ],
        meta:{
            page: 1
        }
    })
})

module.exports = router;