var names;

window.onload = function() {

	var button = d3.select("#addPlayers").on("click", makeBoxes)
	var button = d3.select("#startGame").on("click", startGame)

}

function makeBoxes() {
	var nameDiv = d3.select("#nameBoxRow")
		.append("div")
		.attr("class", "col-sm-6 form-group")
		.append("input")
		.attr("class", "form-control")
		.attr("id", "name")
		.attr("name", "name")
		.attr("placeholder", "Naam")
}

function startGame() {
	values = d3.selectAll(".form-control")
	names = []
	for(var i = 0; i < values[0].length; i ++) {
		if(values[0][i].value !== "") {
			names.push(values[0][i].value)
		}
	}

	var container = d3.select("#gameContainer")
	container.selectAll("*").remove()
	container.append("h3")
		.attr("class", "text-center")
		.text("Hoeveel rondes willen jullie spelen?")
	container2 = container.append("div")
		.attr("class", "col-md-8")
		.append("div")
		.attr("class", "row")
	container2.append("input")
		.attr("form-control")
		.attr("type", "number")
		.attr("id", "replyNumber")
		.attr("min", "1")
		.attr("step", "1")
		.attr("data-bind", "value:replyNumber")

	container2.append("div")


}