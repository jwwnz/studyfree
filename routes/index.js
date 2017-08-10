var softJSON = require('../software.json');

exports.home = function(req, res){

    var software = softJSON.software;

    res.render('home', {
      title: "software-ware",
      software : software
    });
};
