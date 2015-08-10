var estimatedWeeklyCosts = 202.70; //place holders (these are the default values from studylink)
var weeklyBudget = 367.70; // place holder
var leftovers = 165.00; // place holder
var fieldIDs = ['weeklyBudget', 'power', 'transport', 'toiletries', 'groceries', 'takeaways', 'internet', 'cellphone', 'clothing', 'leisure']; //IDs of the text fields


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
			

		estimatedWeeklyCosts += cost;
		
	};
	
	leftovers = weeklyBudget - estimatedWeeklyCosts;
	console.log(leftovers);
};