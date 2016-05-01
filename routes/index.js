var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
    res.render('template');
});

// Open template page if password is equal to "password" otherwise display error 
router.post('/template', function (req, res, next) {
    // If password is equal to"password"
    if (req.body.Password == "password") {
        res.render('template', { Name: req.body.Name, Password: req.body.Password });
        //getText();
    }
    else {
        res.redirect('error');
    }
});

module.exports = router;
