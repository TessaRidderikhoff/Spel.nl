window.onload = function() {
	var button = d3.select("#basicknop").on("click", countdown)
	console.log(button)
}

function countdown() {
	console.log("3, 2, 1...")
}