/*
 * GET home page.
 */

/*exports.view = function(req, res){
  res.render('dayEntry');
};*/

/*exports.view = function(req, res) {
	res.render('dayEntry', {
		"Froggy": [
		{
			"date": "02/21/2021",
			"mood": "red",
			"image": [
				"lorempixel.people.1.jpeg",
				"img2"
			],
			"text": "Edges of leaves are brown."
		},
		{
			"date": "02/22/2021",
			"mood": "red",
			"image": [
				"lorempixel.people.1.jpeg",
				"img2"
			],
			"text": "Some leaves fell off."
		},
		{
			"date": "02/23/2021",
			"mood": "yellow",
			"image": [
				"lorempixel.people.1.jpeg",
				"img2"
			],
			"text": "Yellow parts are staying the same size."
		}
		],
		"Emily": [
		{
			"date": "02/21/2021",
			"mood": "red",
			"image": [
				"lorempixel.people.1.jpeg",
				"img2"
			],
			"text": "Edges of leaves are brown."
		},
		{
			"date": "02/22/2021",
			"mood": "red",
			"image": [
				"lorempixel.people.1.jpeg",
				"img2"
			],
			"text": "Some leaves fell off."
		},
		{
			"date": "02/23/2021",
			"mood": "yellow",
			"image": [
				"lorempixel.people.1.jpeg",
				"img2"
			],
			"text": "Yellow parts are staying the same size."
		}
		]
	});
};*/
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