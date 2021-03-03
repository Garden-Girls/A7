/*
 * GET home page.
 */
var data = require("../myPlantsData.json")

exports.view = function(req, res){
  res.render('myPlantsPage', {
  		"pic": data.pic,
  		"nickname": data.nickname,
		"species": data.species,
		"age": data.age,
		"watering": data.watering,
		"Plants": data.Plants
  });
};





