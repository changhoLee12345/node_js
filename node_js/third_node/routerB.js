var express = require('express')
var router = express.Router();

router.get('/index', function (request, response) {
    response.send('<h1>B Index Page</h1>');
})
router.get('/home', function (request, response) {
    response.send('<h1>B Home Page</h1>');
})

exports.router = router;