/*
 * GET home page.
 */
var myPlantsData = require("../myPlantsData.json")

<<<<<<< HEAD
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
=======
	var startDate = new Date(myPlantsData.startDate);
	var dateCurr = new Date();

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);
	ageDays = Math.floor(ageDays);

exports.view = function(req, res){
  res.render('myPlantsPage', {
  		"pic": myPlantsData.pic,
  		"nickname": myPlantsData.nickname,
		"species": myPlantsData.species,
		"age": myPlantsData.age,
		"watering": myPlantsData.watering,
		"Plants": myPlantsData.Plants,
		"autoAge": ageDays
  });
};





