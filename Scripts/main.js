var estimatedWeeklyCosts = 202.70; //place holders (these are the default values from studylink)
var weeklyBudget = 367.70; // place holder
var leftovers = 165.00; // place holder
var fieldIDs = ['weeklyBudget', 'power', 'transport', 'toiletries', 'groceries', 'takeaways', 'internet', 'cellphone', 'clothing', 'leisure']; //IDs of the text fields
var submitButton = null;


//extensible csv reader function -> pass a function as callbackFunction with one parameter
function readCSV(filename, callback) {
	$.ajax({
		type: "GET",
		url: filename,
		dataType: "text"
	})
		//execute callback function - this is to allow ajax to complete execution to avoid processing undefined data.
		.done(function (data) {
			callback(data);
		})
		.fail(function () {
			console.log("error reading csv file");
		})
		.always(function () {
			console.log("end of parse");
		});
}

//function passed as callbackFunction into readCSV()
function process_ALC_data(data){
	var alc_rows = data.split("\n");
	//split rows down into categories and values
	var alc_categories = alc_rows[0].split(",");
	var alc_records = alc_rows[1].split(",");
	//create a dictionary of category-value pairs
	var alc_dictionary =new Object();
	for(var i=0;i<alc_categories.length;i++){
		alc_dictionary[alc_categories[i]]=alc_records[i];
	}

	//set ALC amounts in html forms
	setDefaultLivingCostValues(alc_dictionary);
}

//set placeholder values in the respective forms
function setDefaultLivingCostValues(dict) {
	document.getElementById("power").placeholder = "$" + dict["power"];
	document.getElementById("transport").placeholder = "$" + dict["transport"];
	document.getElementById("toiletries").placeholder = "$" + dict["toiletries-beauty-makeup"];
	document.getElementById("groceries").placeholder = "$" + dict["groceries"];
	document.getElementById("takeaways").placeholder = "$" + dict["takeaways"];
	document.getElementById("internet").placeholder = "$" + dict["phone-internet"];
	document.getElementById("cellphone").placeholder = "$" + dict["cellphone"];
	document.getElementById("clothing").placeholder = "$" + dict["clothes"];
	document.getElementById("leisure").placeholder = "$" + dict["leisure"];
}


//execute code after the DOM is ready.
$(document).ready(function() {
	//process csv data from AverageLivingCosts.csv
	readCSV("AverageLivingCosts.csv", function (data) {
		process_ALC_data(data);
		setDefaultLivingCostValues();
	});




});




document.addEventListener('DOMContentLoaded', function () { //Ensure everything is loaded before this runs
	submitButton = document.getElementById('submit');
	submitButton.addEventListener('click', calculateBudgetLeftovers);
});



function calculateBudgetLeftovers() {
	weeklyBudget = parseFloat(document.getElementById(fieldIDs[0]).value);
	
	if(isNaN(weeklyBudget)) //Was the field empty?
		weeklyBudget  = document.getElementById(fieldIDs[0]).placeholder.substring(1);

	estimatedWeeklyCosts = 0; // Gotta start from scratch

	for (var i = fieldIDs.length - 1; i >= 1; i--) { // This loops through the array of IDs
		
		var str = fieldIDs[i];
		var cost = 0;		

		str = document.getElementById(str).value; // Reusing this variable as we no longer need to hold the ID and we need to hold this new value

		if(str == "") //Was the field empty?
			str  = document.getElementById(fieldIDs[i]).placeholder.substring(1); 
	
		cost  = parseFloat(str); // Getting a number from our string
		
		estimatedWeeklyCosts = (100*cost) + estimatedWeeklyCosts; // The random *100 is to stop some bugs with adding floating point numbers

}
	leftovers = weeklyBudget - (estimatedWeeklyCosts/100);
	
	console.log(leftovers);
}