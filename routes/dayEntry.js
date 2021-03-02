/*
 * GET home page.
 */

var data = require("../data.json");

exports.view = function(req, res) {
	console.log(data);
	var plantToShow = req.params.plantName;

	var monthToShow = req.params.monthNum;
	var dayToShow = req.params.dayNum;
	var yearToShow = req.params.yearNum;

	var dateToShow = monthToShow + "/" + dayToShow + "/" + yearToShow;

	res.render('dayEntry', {
		"plant": plantToShow,
		"date": dateToShow,
		"slides":data.Froggy[1].slides,
		"text":data.Froggy[1].text
	});
};