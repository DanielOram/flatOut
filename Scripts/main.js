var estimatedWeeklyCosts = 202.70; //place holders (these are the default values from studylink)
var weeklyBudget = 367.70; // place holder
var leftovers = 165.00; // place holder
var fieldIDs = ['weeklyBudget', 'power', 'transport', 'toiletries', 'groceries', 'takeaways', 'internet', 'cellphone', 'clothing', 'leisure']; //IDs of the text fields
var submitButton = null;

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