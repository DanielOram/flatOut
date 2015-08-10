var weeklyCostValue = 202.70; //place holders
var budget = 367.70;
var leftovers = 165.00;

function addValues() {
	budget = document.getElementById('weeklyBudget').value;
	weeklyCostValue  = document.getElementById('power').value;
	weeklyCostValue += document.getElementById('transport').value;
	weeklyCostValue += document.getElementById('toiletries').value;
	weeklyCostValue += document.getElementById('groceries').value;
	weeklyCostValue += document.getElementById('takeaways').value;
	weeklyCostValue += document.getElementById('internet').value;
	weeklyCostValue += document.getElementById('cellphone').value;
	weeklyCostValue += document.getElementById('clothing').value;
	weeklyCostValue += document.getElementById('leisure').value;
	leftovers = budget - weeklyCostValue;
	Console.log(leftovers);
};