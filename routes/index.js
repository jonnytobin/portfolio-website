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

router.post('/upload', function(req, res, next) {
  // req.files contains all the information about the files that
  // have been uploaded, lets print it out and see what is in it
  console.log(req.files);
  res.render('file_uploaded', {uploadedFile: req.files[0].originalname});
});

module.exports = router;
