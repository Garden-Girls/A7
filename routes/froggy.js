var data = require('../myPlantsData.json');

exports.view = function(req, res){
	var viewPlant = req.params.plantName;

  res.render('froggy', {
  	"nickname": viewPlant
  });
};

