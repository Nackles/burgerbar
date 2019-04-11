var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js')

router.get('/', function (req, res) {
    burger.all(function (burger_data) {
        console.log("BURGER_DATA", burger_data)
        res.render('index', { burger_data })
    })
})

router.put('/burgers/update', function (req, res) {
    console.log("REQ BODY", req.body.burger_id)
    var burgId = req.body.burger_id;
    burger.update(burgId, function (res) {
        console.log("RESULT", res)
    })
    res.redirect('/');

})

router.post('/burgers/create', function(req, res){
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    })
})
module.exports = router;