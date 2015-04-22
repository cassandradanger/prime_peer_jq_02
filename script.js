function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
};

function Property(propId, sqFoot, costPerFoot){
	this.propId = propId;
	this.sqFoot = sqFoot;
	this.costPerFoot = costPerFoot;
}


function makeProperty(){
	var propId = randomNumber(50,500);
	var sqFoot = randomNumber(800,3000);
	var costPerFoot = randomNumber(5,50);
	var property = new Property(propId, sqFoot, costPerFoot);
	return property;
}





$(document).ready(function (){
	$("#generate").on("click", function(){
		var property = makeProperty();
		console.log(property, property.propId, property.sqFoot);


		var el = "<div><ul><li>Property ID: " + property.propId + "</li><li>" + property.sqFoot + " Sq. Ft. </li><li>$" + property.costPerFoot + "/sq.ft. </li><li>Total Cost: $" + (property.sqFoot * property.costPerFoot) + " </li><li>Cost per Month: $" + (Math.round(property.sqFoot * property.costPerFoot / 12)) + " </li><button class='remove'>Remove</button></ul></div>";

		$("#propTable").append(el);
		el = $("#propTable").children().last();
		el.hide().slideDown();
	});

	$("#propTable").on("click", ".remove", function(){
		$(this).parent().parent().slideUp(function(){
			$(this).remove();
		});
	});
});

/*	function thingFadeToggle(element){
		element.fadeToggle("slow", function(){
			thingFadeToggle(element);
		});
	}

	$("#ourList").on("click", ".removeButton", function(){
		thingFadeToggle($(this).parent());
		});
	});

*/