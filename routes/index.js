var express = require('express');
var router = express.Router();

var mongoClient = require('mongodb').MongoClient;
var url = process.env.CUSTOMCONNSTR_MongoDB || 'mongodb://localhost:27017/test';

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

// When a file is uploaded open the file uploaded page to confirm to the user
router.post('/upload', function(req, res, next) {
  console.log(req.files);
  res.render('/files/file_uploaded', {uploadedFile: req.files[0].originalname});
});

module.exports = router;
