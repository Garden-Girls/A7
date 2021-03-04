var myPlantsData = require('../myPlantsData.json');

exports.view = function(req, res){
	var viewPlant = req.params.plantName;
	var ind = -1;
	var accessPic = "edit-photo-button.svg"; 
	var accessSpecies = "placeholder species";
	//this may be unneccesary if default image is added when updating json

	for (var i = 0; i < myPlantsData["Plants"].length; i++) {
		if (myPlantsData["Plants"][i]["nickname"] == viewPlant) {
			ind = i;
			break;
		}
	}

	//this default safeguard may be unneccesary if default image is added when updating json
	if (ind != -1) {
		accessPic = myPlantsData["Plants"][ind]["pic"];
		accessSpecies = myPlantsData["Plants"][ind]["species"];
	}

	//calculating age
	var startDate = new Date(myPlantsData["Plants"][ind]["start"]);
	var dateCurr = new Date(); //UTC timezone

	var plantAge = dateCurr.getTime() - startDate.getTime();
	var ageDays = plantAge/(1000 * 3600 * 24);
	ageDays = Math.floor(ageDays);

  res.render('froggy', {
  	"nickname": viewPlant,
  	"pic": accessPic,
  	"species": accessSpecies,
  	"age": ageDays
  });
};

