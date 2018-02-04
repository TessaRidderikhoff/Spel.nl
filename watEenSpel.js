window.onload = function() {
	var button = d3.select("#addPlayers").on("click", makeBoxes)

	// .onClick {
	// 	var inputDiv = d3.select("#nameBoxRow")
	// 		.append("div")
	// 		.attr("class", "col-sm-6 form-group")
	// 		.append("input")
	// 		.attr("class", "form-contol")
	// }
	// var button = document.getElementById("addPlayers")
	// console.log(button)
}

function makeBoxes() {
	var nameDiv = d3.select("#nameBoxRow")
		.append("div")
		.attr("class", "col-sm-6 form-group")
		.append("input")
		.attr("class", "form-control")
}