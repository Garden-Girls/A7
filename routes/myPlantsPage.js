/*
 * GET home page.
 */
var data = require("../myPlantsData.json")

	var startDate = new Date(data.start);
	var dateCurr = new Date();

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24*365);

exports.view = function(req, res){
  res.render('myPlantsPage', {
  		"pic": data.pic,
  		"nickname": data.nickname,
		"species": data.species,
	
		"watering": data.watering,
		"Plants": data.Plants,
		"autoAge": ageDays,
		"age": ageDays,
  });
};





