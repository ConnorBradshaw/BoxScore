var menuCollection = {};
var intention = {};
var boxStats = {};
menuCollection.lastMenu = "mainMenu";
menuCollection.currentMenu = "mainMenu";
function refreshEdit()
{
	document.getElementById("home-player-1").textContent = localStorage.getItem("home-player-1");
	document.getElementById("home-player-2").textContent = localStorage.getItem("home-player-2");
	document.getElementById("home-player-3").textContent = localStorage.getItem("home-player-3");
	document.getElementById("home-player-4").textContent = localStorage.getItem("home-player-4");
	document.getElementById("home-player-5").textContent = localStorage.getItem("home-player-5");
	document.getElementById("away-player-1").textContent = localStorage.getItem("away-player-1");
	document.getElementById("away-player-2").textContent = localStorage.getItem("away-player-2");
	document.getElementById("away-player-3").textContent = localStorage.getItem("away-player-3");
	document.getElementById("away-player-4").textContent = localStorage.getItem("away-player-4");
	document.getElementById("away-player-5").textContent = localStorage.getItem("away-player-5");
	document.getElementById("home").textContent = localStorage.getItem("home");
	document.getElementById("away").textContent = localStorage.getItem("away");
}
function refreshBox()
{
	document.getElementById("home-player-1").textContent = localStorage.getItem("home-player-1");
	document.getElementById("home-player-1-fgpct").textContent = localStorage.getItem("home-player-1-fgpct");
	document.getElementById("home-player-1-3ptpct").textContent = localStorage.getItem("home-player-1-3ptpct");
	document.getElementById("home-player-1-ftpct").textContent = localStorage.getItem("home-player-1-ftpct");
	document.getElementById("home-player-1-reb").textContent = localStorage.getItem("home-player-1-reb");
	document.getElementById("home-player-1-ast").textContent = localStorage.getItem("home-player-1-ast");
	document.getElementById("home-player-1-stl").textContent = localStorage.getItem("home-player-1-stl");
	document.getElementById("home-player-1-to").textContent = localStorage.getItem("home-player-1-to");
	document.getElementById("home-player-1-pts").textContent = localStorage.getItem("home-player-1-pts");
	document.getElementById("home-player-2").textContent = localStorage.getItem("home-player-2");
	document.getElementById("home-player-2-fgpct").textContent = localStorage.getItem("home-player-2-fgpct");
	document.getElementById("home-player-2-3ptpct").textContent = localStorage.getItem("home-player-2-3ptpct");
	document.getElementById("home-player-2-ftpct").textContent = localStorage.getItem("home-player-2-ftpct");
	document.getElementById("home-player-2-reb").textContent = localStorage.getItem("home-player-2-reb");
	document.getElementById("home-player-2-ast").textContent = localStorage.getItem("home-player-2-ast");
	document.getElementById("home-player-2-stl").textContent = localStorage.getItem("home-player-2-stl");
	document.getElementById("home-player-2-to").textContent = localStorage.getItem("home-player-2-to");
	document.getElementById("home-player-2-pts").textContent = localStorage.getItem("home-player-2-pts");
	document.getElementById("home-player-3").textContent = localStorage.getItem("home-player-3");
	document.getElementById("home-player-3-fgpct").textContent = localStorage.getItem("home-player-3-fgpct");
	document.getElementById("home-player-3-3ptpct").textContent = localStorage.getItem("home-player-3-3ptpct");
	document.getElementById("home-player-3-ftpct").textContent = localStorage.getItem("home-player-3-ftpct");
	document.getElementById("home-player-3-reb").textContent = localStorage.getItem("home-player-3-reb");
	document.getElementById("home-player-3-ast").textContent = localStorage.getItem("home-player-3-ast");
	document.getElementById("home-player-3-stl").textContent = localStorage.getItem("home-player-3-stl");
	document.getElementById("home-player-3-to").textContent = localStorage.getItem("home-player-3-to");
	document.getElementById("home-player-3-pts").textContent = localStorage.getItem("home-player-3-pts");
	document.getElementById("home-player-4").textContent = localStorage.getItem("home-player-4");
	document.getElementById("home-player-4-fgpct").textContent = localStorage.getItem("home-player-4-fgpct");
	document.getElementById("home-player-4-3ptpct").textContent = localStorage.getItem("home-player-4-3ptpct");
	document.getElementById("home-player-4-ftpct").textContent = localStorage.getItem("home-player-4-ftpct");
	document.getElementById("home-player-4-reb").textContent = localStorage.getItem("home-player-4-reb");
	document.getElementById("home-player-4-ast").textContent = localStorage.getItem("home-player-4-ast");
	document.getElementById("home-player-4-stl").textContent = localStorage.getItem("home-player-4-stl");
	document.getElementById("home-player-4-to").textContent = localStorage.getItem("home-player-4-to");
	document.getElementById("home-player-4-pts").textContent = localStorage.getItem("home-player-4-pts");
	document.getElementById("home-player-5").textContent = localStorage.getItem("home-player-5");
	document.getElementById("home-player-5-fgpct").textContent = localStorage.getItem("home-player-5-fgpct");
	document.getElementById("home-player-5-3ptpct").textContent = localStorage.getItem("home-player-5-3ptpct");
	document.getElementById("home-player-5-ftpct").textContent = localStorage.getItem("home-player-5-ftpct");
	document.getElementById("home-player-5-reb").textContent = localStorage.getItem("home-player-5-reb");
	document.getElementById("home-player-5-ast").textContent = localStorage.getItem("home-player-5-ast");
	document.getElementById("home-player-5-stl").textContent = localStorage.getItem("home-player-5-stl");
	document.getElementById("home-player-5-to").textContent = localStorage.getItem("home-player-5-to");
	document.getElementById("home-player-5-pts").textContent = localStorage.getItem("home-player-5-pts");
	document.getElementById("away-player-1").textContent = localStorage.getItem("away-player-1");
	document.getElementById("away-player-1-fgpct").textContent = localStorage.getItem("away-player-1-fgpct");
	document.getElementById("away-player-1-3ptpct").textContent = localStorage.getItem("away-player-1-3ptpct");
	document.getElementById("away-player-1-ftpct").textContent = localStorage.getItem("away-player-1-ftpct");
	document.getElementById("away-player-1-reb").textContent = localStorage.getItem("away-player-1-reb");
	document.getElementById("away-player-1-ast").textContent = localStorage.getItem("away-player-1-ast");
	document.getElementById("away-player-1-stl").textContent = localStorage.getItem("away-player-1-stl");
	document.getElementById("away-player-1-to").textContent = localStorage.getItem("away-player-1-to");
	document.getElementById("away-player-1-pts").textContent = localStorage.getItem("away-player-1-pts");
	document.getElementById("away-player-2").textContent = localStorage.getItem("away-player-2");
	document.getElementById("away-player-2-fgpct").textContent = localStorage.getItem("away-player-2-fgpct");
	document.getElementById("away-player-2-3ptpct").textContent = localStorage.getItem("away-player-2-3ptpct");
	document.getElementById("away-player-2-ftpct").textContent = localStorage.getItem("away-player-2-ftpct");
	document.getElementById("away-player-2-reb").textContent = localStorage.getItem("away-player-2-reb");
	document.getElementById("away-player-2-ast").textContent = localStorage.getItem("away-player-2-ast");
	document.getElementById("away-player-2-stl").textContent = localStorage.getItem("away-player-2-stl");
	document.getElementById("away-player-2-to").textContent = localStorage.getItem("away-player-2-to");
	document.getElementById("away-player-2-pts").textContent = localStorage.getItem("away-player-2-pts");
	document.getElementById("away-player-3").textContent = localStorage.getItem("away-player-3");
	document.getElementById("away-player-3-fgpct").textContent = localStorage.getItem("away-player-3-fgpct");
	document.getElementById("away-player-3-3ptpct").textContent = localStorage.getItem("away-player-3-3ptpct");
	document.getElementById("away-player-3-ftpct").textContent = localStorage.getItem("away-player-3-ftpct");
	document.getElementById("away-player-3-reb").textContent = localStorage.getItem("away-player-3-reb");
	document.getElementById("away-player-3-ast").textContent = localStorage.getItem("away-player-3-ast");
	document.getElementById("away-player-3-stl").textContent = localStorage.getItem("away-player-3-stl");
	document.getElementById("away-player-3-to").textContent = localStorage.getItem("away-player-3-to");
	document.getElementById("away-player-3-pts").textContent = localStorage.getItem("away-player-3-pts");
	document.getElementById("away-player-4").textContent = localStorage.getItem("away-player-4");
	document.getElementById("away-player-4-fgpct").textContent = localStorage.getItem("away-player-4-fgpct");
	document.getElementById("away-player-4-3ptpct").textContent = localStorage.getItem("away-player-4-3ptpct");
	document.getElementById("away-player-4-ftpct").textContent = localStorage.getItem("away-player-4-ftpct");
	document.getElementById("away-player-4-reb").textContent = localStorage.getItem("away-player-4-reb");
	document.getElementById("away-player-4-ast").textContent = localStorage.getItem("away-player-4-ast");
	document.getElementById("away-player-4-stl").textContent = localStorage.getItem("away-player-4-stl");
	document.getElementById("away-player-4-to").textContent = localStorage.getItem("away-player-4-to");
	document.getElementById("away-player-4-pts").textContent = localStorage.getItem("away-player-4-pts");
	document.getElementById("away-player-5").textContent = localStorage.getItem("away-player-5");
	document.getElementById("away-player-5-fgpct").textContent = localStorage.getItem("away-player-5-fgpct");
	document.getElementById("away-player-5-3ptpct").textContent = localStorage.getItem("away-player-5-3ptpct");
	document.getElementById("away-player-5-ftpct").textContent = localStorage.getItem("away-player-5-ftpct");
	document.getElementById("away-player-5-reb").textContent = localStorage.getItem("away-player-5-reb");
	document.getElementById("away-player-5-ast").textContent = localStorage.getItem("away-player-5-ast");
	document.getElementById("away-player-5-stl").textContent = localStorage.getItem("away-player-5-stl");
	document.getElementById("away-player-5-to").textContent = localStorage.getItem("away-player-5-to");
	document.getElementById("away-player-5-pts").textContent = localStorage.getItem("away-player-5-pts");
	document.getElementById("home").textContent = localStorage.getItem("home");
	document.getElementById("away").textContent = localStorage.getItem("away");
	document.getElementById("home-box").textContent = localStorage.getItem("home");
	document.getElementById("away-box").textContent = localStorage.getItem("away");
	if(localStorage.getItem("home-points") == null)
	{
		localStorage.setItem("home-points", 0);
	}
	if(localStorage.getItem("away-points") == null)
	{
		localStorage.setItem("away-points", 0);
	}
	document.getElementById("home-points").textContent = localStorage.getItem("home-points");
	document.getElementById("away-points").textContent = localStorage.getItem("away-points");
}
function resetBox()
{
	localStorage.clear();
	localStorage.setItem("home-player-1","Player 1");
	localStorage.setItem("home-player-2", "Player 2");
	localStorage.setItem("home-player-3", " Player 3");
	localStorage.setItem("home-player-4", "Player 4");
	localStorage.setItem("home-player-5", "Player 5");
	localStorage.setItem("away-player-1", "Player 1");
	localStorage.setItem("away-player-2", "Player 2");
	localStorage.setItem("away-player-3", "Player 3");
	localStorage.setItem("away-player-4", "Player 4");
	localStorage.setItem("away-player-5", "Player 5");
	localStorage.setItem("home", "Home Team");
	localStorage.setItem("home-box", "Home Team");
	localStorage.setItem("away", "Away Team");
	localStorage.setItem("away-box", "Away Team");
	console.log(localStorage.getItem("home-points"));
	window.location.href="main.html";
}
function editNames(path)
{
	intention.path = path;
	document.getElementById("home").classList.remove("hidden");
	document.getElementById("away").classList.remove("hidden");
	menuCollection.lastMenu = menuCollection.currentMenu;
	menuCollection.currentMenu = "teamSelection";
	addHidden(menuCollection.lastMenu);
}
function back()
{
	var temp;
	addHidden(menuCollection.currentMenu);
	removeHidden(menuCollection.lastMenu);
	temp = menuCollection.currentMenu;
	menuCollection.currentMenu = menuCollection.lastMenu;
	menuCollection.lastMenu = temp;

}
function editAwayPlayer1()
{
	console.log(intention.path);
	document.getElementById("away-player-1").classList.add("hidden");
	document.getElementById("away-player-2").classList.add("hidden");
	document.getElementById("away-player-3").classList.add("hidden");
	document.getElementById("away-player-4").classList.add("hidden");
	document.getElementById("away-player-5").classList.add("hidden");
	if(intention.path == "editPlayer")
	{
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("player", "1");
	}
	else if(intention.path == "score")
	{
		document.getElementById("fg-made").classList.remove("hidden");
		document.getElementById("3pt-made").classList.remove("hidden");
		document.getElementById("ft-made").classList.remove("hidden");
		document.getElementById("fg-missed").classList.remove("hidden");
		document.getElementById("3pt-missed").classList.remove("hidden");
		document.getElementById("ft-missed").classList.remove("hidden");
		document.getElementById("reb").classList.remove("hidden");
		document.getElementById("ast").classList.remove("hidden");
		document.getElementById("stl").classList.remove("hidden");
		document.getElementById("to").classList.remove("hidden");
		localStorage.setItem("player", "1");
	}
	else
	{
		console.log("hi");
		localStorage.setItem("player", "1");
		localStorage.setItem("team", "away");
		return true;
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer")
		menuCollection.currentMenu = "nameEditText";
	else if(intention.path == "score")
		menuCollection.currentMenu = "boxScore";
}
function editAwayPlayer2()
{
	console.log(intention.path);
	document.getElementById("away-player-1").classList.add("hidden");
	document.getElementById("away-player-2").classList.add("hidden");
	document.getElementById("away-player-3").classList.add("hidden");
	document.getElementById("away-player-4").classList.add("hidden");
	document.getElementById("away-player-5").classList.add("hidden");
	if(intention.path == "editPlayer")
	{
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("player", "2");
	}
	else if(intention.path == "score")
	{
		document.getElementById("fg-made").classList.remove("hidden");
		document.getElementById("3pt-made").classList.remove("hidden");
		document.getElementById("ft-made").classList.remove("hidden");
		document.getElementById("fg-missed").classList.remove("hidden");
		document.getElementById("3pt-missed").classList.remove("hidden");
		document.getElementById("ft-missed").classList.remove("hidden");
		document.getElementById("reb").classList.remove("hidden");
		document.getElementById("ast").classList.remove("hidden");
		document.getElementById("stl").classList.remove("hidden");
		document.getElementById("to").classList.remove("hidden");
		localStorage.setItem("player", "2");
	}
	else
	{

		console.log("hi");
		localStorage.setItem("player", "2");
		localStorage.setItem("team", "away");
		return true;
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer")
		menuCollection.currentMenu = "nameEditText";
	else if(intention.path == "score")
		menuCollection.currentMenu = "boxScore";
}
function editAwayPlayer3()
{
	console.log(intention.path);
	document.getElementById("away-player-1").classList.add("hidden");
	document.getElementById("away-player-2").classList.add("hidden");
	document.getElementById("away-player-3").classList.add("hidden");
	document.getElementById("away-player-4").classList.add("hidden");
	document.getElementById("away-player-5").classList.add("hidden");
	if(intention.path == "editPlayer")
	{
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("player", "3");
	}
	else if(intention.path == "score")
	{
		document.getElementById("fg-made").classList.remove("hidden");
		document.getElementById("3pt-made").classList.remove("hidden");
		document.getElementById("ft-made").classList.remove("hidden");
		document.getElementById("fg-missed").classList.remove("hidden");
		document.getElementById("3pt-missed").classList.remove("hidden");
		document.getElementById("ft-missed").classList.remove("hidden");
		document.getElementById("reb").classList.remove("hidden");
		document.getElementById("ast").classList.remove("hidden");
		document.getElementById("stl").classList.remove("hidden");
		document.getElementById("to").classList.remove("hidden");
		localStorage.setItem("player", "3");
	}
	else
	{

		console.log("hi");
		localStorage.setItem("player", "3");
		localStorage.setItem("team", "away");
		return true;
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer")
		menuCollection.currentMenu = "nameEditText";
	else if(intention.path == "score")
		menuCollection.currentMenu = "boxScore";
}
function editAwayPlayer4()
{
	console.log(intention.path);
	document.getElementById("away-player-1").classList.add("hidden");
	document.getElementById("away-player-2").classList.add("hidden");
	document.getElementById("away-player-3").classList.add("hidden");
	document.getElementById("away-player-4").classList.add("hidden");
	document.getElementById("away-player-5").classList.add("hidden");
	if(intention.path == "editPlayer")
	{
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("player", "4");
	}
	else if(intention.path == "score")
	{
		document.getElementById("fg-made").classList.remove("hidden");
		document.getElementById("3pt-made").classList.remove("hidden");
		document.getElementById("ft-made").classList.remove("hidden");
		document.getElementById("fg-missed").classList.remove("hidden");
		document.getElementById("3pt-missed").classList.remove("hidden");
		document.getElementById("ft-missed").classList.remove("hidden");
		document.getElementById("reb").classList.remove("hidden");
		document.getElementById("ast").classList.remove("hidden");
		document.getElementById("stl").classList.remove("hidden");
		document.getElementById("to").classList.remove("hidden");
		localStorage.setItem("player", "4");
	}
	else
	{

		console.log("hi");
		localStorage.setItem("player", "4");
		localStorage.setItem("team", "away");
		return true;
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer")
		menuCollection.currentMenu = "nameEditText";
	else if(intention.path == "score")
		menuCollection.currentMenu = "boxScore";
}
function editAwayPlayer5()
{
	console.log(intention.path);
	document.getElementById("away-player-1").classList.add("hidden");
	document.getElementById("away-player-2").classList.add("hidden");
	document.getElementById("away-player-3").classList.add("hidden");
	document.getElementById("away-player-4").classList.add("hidden");
	document.getElementById("away-player-5").classList.add("hidden");
	if(intention.path == "editPlayer")
	{
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("player", "5");
	}
	else if(intention.path == "score")
	{
		document.getElementById("fg-made").classList.remove("hidden");
		document.getElementById("3pt-made").classList.remove("hidden");
		document.getElementById("ft-made").classList.remove("hidden");
		document.getElementById("fg-missed").classList.remove("hidden");
		document.getElementById("3pt-missed").classList.remove("hidden");
		document.getElementById("ft-missed").classList.remove("hidden");
		document.getElementById("reb").classList.remove("hidden");
		document.getElementById("ast").classList.remove("hidden");
		document.getElementById("stl").classList.remove("hidden");
		document.getElementById("to").classList.remove("hidden");
		localStorage.setItem("player", "5");
	}
	else
	{

		console.log("hi");
		localStorage.setItem("player", "5");
		localStorage.setItem("team", "away");
		return true;
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer")
		menuCollection.currentMenu = "nameEditText";
	else if(intention.path == "score")
		menuCollection.currentMenu = "boxScore";
}
function editHomePlayer1()
{
	console.log(intention.path);
	document.getElementById("home-player-1").classList.add("hidden");
	document.getElementById("home-player-2").classList.add("hidden");
	document.getElementById("home-player-3").classList.add("hidden");
	document.getElementById("home-player-4").classList.add("hidden");
	document.getElementById("home-player-5").classList.add("hidden");
	if(intention.path == "editPlayer")
	{
		console.log("hi");
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("player", "1");
	}
	else if(intention.path == "score")
	{
		document.getElementById("fg-made").classList.remove("hidden");
		document.getElementById("3pt-made").classList.remove("hidden");
		document.getElementById("ft-made").classList.remove("hidden");
		document.getElementById("fg-missed").classList.remove("hidden");
		document.getElementById("3pt-missed").classList.remove("hidden");
		document.getElementById("ft-missed").classList.remove("hidden");
		document.getElementById("reb").classList.remove("hidden");
		document.getElementById("ast").classList.remove("hidden");
		document.getElementById("stl").classList.remove("hidden");
		document.getElementById("to").classList.remove("hidden");
		localStorage.setItem("player", "1");
	}
	else
	{

		console.log("hi");
		localStorage.setItem("player", "1");
		localStorage.setItem("team", "home");
		return true;
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer")
		menuCollection.currentMenu = "nameEditText";
	else if(intention.path == "score")
		menuCollection.currentMenu = "boxScore";
}
function editHomePlayer2()
{
	document.getElementById("home-player-1").classList.add("hidden");
	document.getElementById("home-player-2").classList.add("hidden");
	document.getElementById("home-player-3").classList.add("hidden");
	document.getElementById("home-player-4").classList.add("hidden");
	document.getElementById("home-player-5").classList.add("hidden");
	if(intention.path == "editPlayer")
	{
		console.log("hi");
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("player", "2");
	}
	else if(intention.path == "score")
	{
		document.getElementById("fg-made").classList.remove("hidden");
		document.getElementById("3pt-made").classList.remove("hidden");
		document.getElementById("ft-made").classList.remove("hidden");
		document.getElementById("fg-missed").classList.remove("hidden");
		document.getElementById("3pt-missed").classList.remove("hidden");
		document.getElementById("ft-missed").classList.remove("hidden");
		document.getElementById("reb").classList.remove("hidden");
		document.getElementById("ast").classList.remove("hidden");
		document.getElementById("stl").classList.remove("hidden");
		document.getElementById("to").classList.remove("hidden");
		localStorage.setItem("player", "2");
	}
	else
	{

		console.log("hi");
		localStorage.setItem("player", "2");
		localStorage.setItem("team", "home");
		return true;
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer")
		menuCollection.currentMenu = "nameEditText";
	else if(intention.path == "score")
		menuCollection.currentMenu = "boxScore";
}
function editHomePlayer3()
{
	document.getElementById("home-player-1").classList.add("hidden");
	document.getElementById("home-player-2").classList.add("hidden");
	document.getElementById("home-player-3").classList.add("hidden");
	document.getElementById("home-player-4").classList.add("hidden");
	document.getElementById("home-player-5").classList.add("hidden");
	if(intention.path == "editPlayer")
	{
		console.log("hi");
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("player", "3");
	}
	else if(intention.path == "score")
	{
		document.getElementById("fg-made").classList.remove("hidden");
		document.getElementById("3pt-made").classList.remove("hidden");
		document.getElementById("ft-made").classList.remove("hidden");
		document.getElementById("fg-missed").classList.remove("hidden");
		document.getElementById("3pt-missed").classList.remove("hidden");
		document.getElementById("ft-missed").classList.remove("hidden");
		document.getElementById("reb").classList.remove("hidden");
		document.getElementById("ast").classList.remove("hidden");
		document.getElementById("stl").classList.remove("hidden");
		document.getElementById("to").classList.remove("hidden");
		localStorage.setItem("player", "3");
	}
	else
	{

		console.log("hi");
		localStorage.setItem("player", "3");
		localStorage.setItem("team", "home");
		return true;
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer")
		menuCollection.currentMenu = "nameEditText";
	else if(intention.path == "score")
		menuCollection.currentMenu = "boxScore";
}
function editHomePlayer4()
{
	document.getElementById("home-player-1").classList.add("hidden");
	document.getElementById("home-player-2").classList.add("hidden");
	document.getElementById("home-player-3").classList.add("hidden");
	document.getElementById("home-player-4").classList.add("hidden");
	document.getElementById("home-player-5").classList.add("hidden");
	if(intention.path == "editPlayer")
	{
		console.log("hi");
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("player", "4");
	}
	else if(intention.path == "score")
	{
		document.getElementById("fg-made").classList.remove("hidden");
		document.getElementById("3pt-made").classList.remove("hidden");
		document.getElementById("ft-made").classList.remove("hidden");
		document.getElementById("fg-missed").classList.remove("hidden");
		document.getElementById("3pt-missed").classList.remove("hidden");
		document.getElementById("ft-missed").classList.remove("hidden");
		document.getElementById("reb").classList.remove("hidden");
		document.getElementById("ast").classList.remove("hidden");
		document.getElementById("stl").classList.remove("hidden");
		document.getElementById("to").classList.remove("hidden");
		localStorage.setItem("player", "4");
	}
	else
	{

		console.log("hi");
		localStorage.setItem("player", "4");
		localStorage.setItem("team", "home");
		return true;
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer")
		menuCollection.currentMenu = "nameEditText";
	else if(intention.path == "score")
		menuCollection.currentMenu = "boxScore";
}
function editHomePlayer5()
{
	document.getElementById("home-player-1").classList.add("hidden");
	document.getElementById("home-player-2").classList.add("hidden");
	document.getElementById("home-player-3").classList.add("hidden");
	document.getElementById("home-player-4").classList.add("hidden");
	document.getElementById("home-player-5").classList.add("hidden");
	if(intention.path == "editPlayer")
	{
		console.log("hi");
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("player", "5");
	}
	else if(intention.path == "score")
	{
		document.getElementById("fg-made").classList.remove("hidden");
		document.getElementById("3pt-made").classList.remove("hidden");
		document.getElementById("ft-made").classList.remove("hidden");
		document.getElementById("fg-missed").classList.remove("hidden");
		document.getElementById("3pt-missed").classList.remove("hidden");
		document.getElementById("ft-missed").classList.remove("hidden");
		document.getElementById("reb").classList.remove("hidden");
		document.getElementById("ast").classList.remove("hidden");
		document.getElementById("stl").classList.remove("hidden");
		document.getElementById("to").classList.remove("hidden");
		localStorage.setItem("player", "5");
	}
	else
	{

		console.log("hi");
		localStorage.setItem("player", "5");
		localStorage.setItem("team", "home");
		return true;
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer")
		menuCollection.currentMenu = "nameEditText";
	else if(intention.path == "score")
		menuCollection.currentMenu = "boxScore";
}
function editHomePlayer()
{
	if(intention.path == "editPlayer" || intention.path == "score")
	{
	document.getElementById("home-player-1").classList.remove("hidden");
	document.getElementById("home-player-2").classList.remove("hidden");
	document.getElementById("home-player-3").classList.remove("hidden");
	document.getElementById("home-player-4").classList.remove("hidden");
	document.getElementById("home-player-5").classList.remove("hidden");
	localStorage.setItem("team", "home");
	}
	else if(intention.path == "editTeam")
	{
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("team", "home");
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer" || intention.path == "score")
		menuCollection.currentMenu = "homePlayerSelection";
	else if(intention.path == "editTeam")
	{
		menuCollection.currentMenu = "nameEditText";
	}
	addHidden(menuCollection.lastMenu);
}
function editAwayPlayer()
{
	if(intention.path == "editPlayer" || intention.path == "score")
	{
	document.getElementById("away-player-1").classList.remove("hidden");
	document.getElementById("away-player-2").classList.remove("hidden");
	document.getElementById("away-player-3").classList.remove("hidden");
	document.getElementById("away-player-4").classList.remove("hidden");
	document.getElementById("away-player-5").classList.remove("hidden");
	localStorage.setItem("team", "away");
	}
	else if(intention.path == "editTeam")
	{
		document.getElementById("name-submittal").classList.remove("hidden");
		localStorage.setItem("team", "away");
	}
	menuCollection.lastMenu = menuCollection.currentMenu;
	if(intention.path == "editPlayer" || intention.path == "score")
		menuCollection.currentMenu = "awayPlayerSelection";
	else if(intention.path == "editTeam")
	{
		menuCollection.currentMenu = "nameEditText";
	}
	addHidden(menuCollection.lastMenu);
}
function removeHidden(last)
{
	if(last == "mainMenu")
	{
		document.getElementById("edit-names").classList.remove("hidden");
		document.getElementById("edit-team-name").classList.remove("hidden");
		document.getElementById("keep-score").classList.remove("hidden");
	}
	else if(last == "teamSelection")
	{
		document.getElementById("home").classList.remove("hidden");
		document.getElementById("away").classList.remove("hidden");
	}
	else if(last == "awayPlayerSelection")
	{
		document.getElementById("away-player-1").classList.remove("hidden");
		document.getElementById("away-player-2").classList.remove("hidden");
		document.getElementById("away-player-3").classList.remove("hidden");
		document.getElementById("away-player-4").classList.remove("hidden");
		document.getElementById("away-player-5").classList.remove("hidden");
	}
	else if(last == "homePlayerSelection")
	{
		document.getElementById("home-player-1").classList.remove("hidden");
		document.getElementById("home-player-2").classList.remove("hidden");
		document.getElementById("home-player-3").classList.remove("hidden");
		document.getElementById("home-player-4").classList.remove("hidden");
		document.getElementById("home-player-5").classList.remove("hidden");
	}
	else if(last == "boxScore")
	{
		document.getElementById("fg-made").classList.add("hidden");
		document.getElementById("3pt-made").classList.add("hidden");
		document.getElementById("ft-made").classList.add("hidden");
		document.getElementById("fg-missed").classList.add("hidden");
		document.getElementById("3pt-missed").classList.add("hidden");
		document.getElementById("ft-missed").classList.add("hidden");
		document.getElementById("reb").classList.add("hidden");
		document.getElementById("ast").classList.add("hidden");
		document.getElementById("stl").classList.add("hidden");
		document.getElementById("to").classList.add("hidden");
	}
}
function submit()
	{
		var id;
		if(intention.path == "editPlayer")
		{
			id = intention.team + "-player-" + intention.player;
		}
		else if(intention.path == "editTeam")
		{
			id = intention.team;
		} 
		localStorage.setItem(id, document.getElementById("name-text").value);
		document.getElementById(id).textContent = document.getElementById("name-text").value;
		document.getElementById("name-text").value = "";
	}
function score(type)
{
	var id;
	var idtot;
	var idmade;
	var idmissed;
	var id3pt;
	var idft;
	var idfg;
	var tempPct;
	var tempPts;
	if(type == "fg-made")
	{
		
		id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-fgpct";
		idmade = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-fg-made";
		idmissed = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-fg-missed";
		idtot = localStorage.getItem("team") + "-points";
		console.log(id);
		if(localStorage.getItem(idmade) == null)
		{
			console.log(idtot);
			localStorage.setItem(idmade, 1);

				if(localStorage.getItem(idtot) == null)
			{
				console.log("hi");
				localStorage.setItem(idtot, 2);
			}
			else
			{
				console.log("hi");
				localStorage.setItem(idtot, parseInt(localStorage.getItem(idtot)) + 2);
			}
		}
		else
		{
			localStorage.setItem(idmade, parseInt(localStorage.getItem(idmade)) + 1);
			if(localStorage.getItem(idtot) == null)
			{
				console.log("hi");
				localStorage.setItem(idtot, 2);
			}
			else
			{
				console.log("hi");
				localStorage.setItem(idtot, parseInt(localStorage.getItem(idtot)) + 2);
			}
		}
		if(localStorage.getItem(idmissed) == null)
		{
			tempPct = localStorage.getItem(idmade).toString() + "-" + localStorage.getItem(idmade).toString();
			localStorage.setItem(id, tempPct);
		}
		else
		{
			tempPct = localStorage.getItem(idmade) + "-" + (parseInt(localStorage.getItem(idmade)) + parseInt(localStorage.getItem(idmissed)));
			localStorage.setItem(id, tempPct);
		}
		
	}
	else if(type == "3pt-made")
	{
		id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-3ptpct";
		idmade = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-3pt-made";
		idmissed = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-3pt-missed";
		idtot = localStorage.getItem("team") + "-points";
		if(localStorage.getItem(idmade) == null)
		{
			localStorage.setItem(idmade, 1);

			if(localStorage.getItem(idtot) == null)
			{
				console.log("hi");
				localStorage.setItem(idtot, 3);
			}
			else
			{
				console.log("hi");
				localStorage.setItem(idtot, parseInt(localStorage.getItem(idtot)) + 3);
			}
		}
		else
		{
			localStorage.setItem(idmade, parseInt(localStorage.getItem(idmade)) + 1);
			if(localStorage.getItem(idtot) == null)
			{
				console.log("hi");
				localStorage.setItem(idtot, 3);
			}
			else
			{
				console.log("hi");
				localStorage.setItem(idtot, parseInt(localStorage.getItem(idtot)) + 3);
			}
			
		}
		if(localStorage.getItem(idmissed) == null)
		{
			tempPct = localStorage.getItem(idmade).toString() + "-" + localStorage.getItem(idmade).toString();
			console.log(tempPct);
			localStorage.setItem(id, tempPct);
		}
		else
		{
			tempPct = localStorage.getItem(idmade) + "-" + (parseInt(localStorage.getItem(idmade)) + parseInt(localStorage.getItem(idmissed)));
			console.log(tempPct);
			localStorage.setItem(id, tempPct);
		}
	}
	else if(type == "ft-made")
	{
		id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-ftpct";
		idmade = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-ft-made";
		idmissed = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-ft-missed";
		idtot = localStorage.getItem("team") + "-points";
		if(localStorage.getItem(idmade) == null)
		{
			localStorage.setItem(idmade, 1);

			if(localStorage.getItem(idtot) == null)
			{
				console.log("hi");
				localStorage.setItem(idtot, 1);
			}
			else
			{
				console.log("hi");
				localStorage.setItem(idtot, parseInt(localStorage.getItem(idtot)) + 1);
			}
		}
		else
		{
			localStorage.setItem(idmade, parseInt(localStorage.getItem(idmade)) + 1);
			if(localStorage.getItem(idtot) == null)
			{
				console.log("hi");
				localStorage.setItem(idtot, 1);
			}
			else
			{
				console.log("hi");
				localStorage.setItem(idtot, parseInt(localStorage.getItem(idtot)) + 1);
			}
		}
		if(localStorage.getItem(idmissed) == null)
		{
			tempPct = localStorage.getItem(idmade).toString() + "-" + localStorage.getItem(idmade).toString();
			localStorage.setItem(id, tempPct);
		}
		else
		{
			tempPct = localStorage.getItem(idmade) + "-" + (parseInt(localStorage.getItem(idmade)) + parseInt(localStorage.getItem(idmissed)));
			localStorage.setItem(id, tempPct);
		}
	}
	else if(type == "fg-missed")
	{
		id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-fgpct";
		idmade = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-fg-made";
		idmissed = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-fg-missed";
		if(localStorage.getItem(idmissed) == null)
		{
			localStorage.setItem(idmissed, 1);
		}
		else
		{
			localStorage.setItem(idmissed, parseInt(localStorage.getItem(idmissed)) + 1);
		}
		if(localStorage.getItem(idmade) == null)
		{
			tempPct = "0-" + localStorage.getItem(idmissed).toString();
			localStorage.setItem(id, tempPct);
		}
		else
		{
			tempPct = localStorage.getItem(idmade) + "-" + (parseInt(localStorage.getItem(idmade)) + parseInt(localStorage.getItem(idmissed)));
			console.log(tempPct);
			localStorage.setItem(id, tempPct);
		}
	}
	else if(type == "3pt-missed")
	{
		id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-3ptpct";
		idmade = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-3pt-made";
		idmissed = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-3pt-missed";
		if(localStorage.getItem(idmissed) == null)
		{
			localStorage.setItem(idmissed, 1);
		}
		else
		{
			localStorage.setItem(idmissed, parseInt(localStorage.getItem(idmissed)) + 1);
		}
		if(localStorage.getItem(idmade) == null)
		{
			tempPct = "0-" + localStorage.getItem(idmissed).toString();
			localStorage.setItem(id, tempPct);
		}
		else
		{
			tempPct = localStorage.getItem(idmade) + "-" + (parseInt(localStorage.getItem(idmade)) + parseInt(localStorage.getItem(idmissed)));
			console.log(tempPct);
			localStorage.setItem(id, tempPct);
		}
	}
	else if(type == "ft-missed")
	{
		id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-ftpct";
		idmade = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-ft-made";
		idmissed = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-ft-missed";
		if(localStorage.getItem(idmissed) == null)
		{
			localStorage.setItem(idmissed, 1);
		}
		else
		{
			localStorage.setItem(idmissed, parseInt(localStorage.getItem(idmissed)) + 1);
		}
		if(localStorage.getItem(idmade) == null)
		{
			tempPct = "0-" + localStorage.getItem(idmissed).toString();
			localStorage.setItem(id, tempPct);
		}
		else
		{
			tempPct = localStorage.getItem(idmade) + "-" + (parseInt(localStorage.getItem(idmade)) + parseInt(localStorage.getItem(idmissed)));
			console.log(tempPct);
			localStorage.setItem(id, tempPct);
		}
	}
	else if(type == "reb")
	{
		id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-reb";
		if(localStorage.getItem(id) == null)
		{
			localStorage.setItem(id, 1);
		}
		else
		{
			localStorage.setItem(id, parseInt(localStorage.getItem(id)) + 1);
		}
	}
	else if(type == "ast")
	{
		id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-ast";
		if(localStorage.getItem(id) == null)
		{
			localStorage.setItem(id, 1);
		}
		else
		{
			localStorage.setItem(id, parseInt(localStorage.getItem(id)) + 1);
		}
	}
	else if(type == "stl")
	{
		id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-stl";
		if(localStorage.getItem(id) == null)
		{
			localStorage.setItem(id, 1);
		}
		else
		{
			localStorage.setItem(id, parseInt(localStorage.getItem(id)) + 1);
		}
	}
	else if(type == "to")
	{
		id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-to";
		if(localStorage.getItem(id) == null)
		{
			localStorage.setItem(id, 1);
		}
		else
		{
			localStorage.setItem(id, parseInt(localStorage.getItem(id)) + 1);
		}
	}
	id = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-pts";
	idfg = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-fg-made";
	id3pt = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-3pt-made";
	idft = localStorage.getItem("team") + "-player-" + localStorage.getItem("player") + "-ft-made";
	if(localStorage.getItem(idft) == null && localStorage.getItem(id3pt) == null)
		tempPts = (parseInt(localStorage.getItem(idfg)) * 2) + 0 + 0;
	else if(localStorage.getItem(idfg) == null && localStorage.getItem(id3pt) == null)
		tempPts = 0 + 0 + parseInt(localStorage.getItem(idft));
	else if(localStorage.getItem(idfg) == null && localStorage.getItem(idft) == null)
	{
		console.log("hi");
		tempPts = 0 + (parseInt(localStorage.getItem(id3pt)) * 3) + 0;
	}
	else if(localStorage.getItem(idfg) == null)
		tempPts = 0 + (parseInt(localStorage.getItem(id3pt)) * 3) + parseInt(localStorage.getItem(idft));
	else if(localStorage.getItem(id3pt) == null)
		tempPts = (parseInt(localStorage.getItem(idfg)) * 2) + 0 + parseInt(localStorage.getItem(idft));
	else if(localStorage.getItem(idft) == null)
		tempPts = (parseInt(localStorage.getItem(idfg)) * 2) + (parseInt(localStorage.getItem(id3pt)) * 3) + 0;
	else
		tempPts = (parseInt(localStorage.getItem(idfg)) * 2) + (parseInt(localStorage.getItem(id3pt)) * 3) + parseInt(localStorage.getItem(idft));
	console.log(parseInt(localStorage.getItem(id3pt)));
	localStorage.setItem(id, tempPts);
	window.location.href="main.html";

}
function addHidden(last)
{
	if(last == "mainMenu")
	{
		document.getElementById("edit-names").classList.add("hidden");
		document.getElementById("edit-team-name").classList.add("hidden");
		document.getElementById("keep-score").classList.add("hidden");
	}
	else if(last == "teamSelection")
	{
		document.getElementById("home").classList.add("hidden");
		document.getElementById("away").classList.add("hidden");
	}
	else if(last == "awayPlayerSelection")
	{
		document.getElementById("away-player-1").classList.add("hidden");
		document.getElementById("away-player-2").classList.add("hidden");
		document.getElementById("away-player-3").classList.add("hidden");
		document.getElementById("away-player-4").classList.add("hidden");
		document.getElementById("away-player-5").classList.add("hidden");
	}
	else if(last == "homePlayerSelection")
	{
		document.getElementById("home-player-1").classList.add("hidden");
		document.getElementById("home-player-2").classList.add("hidden");
		document.getElementById("home-player-3").classList.add("hidden");
		document.getElementById("home-player-4").classList.add("hidden");
		document.getElementById("home-player-5").classList.add("hidden");
	}
	else if(last == "boxScore")
	{
		document.getElementById("fg-made").classList.add("hidden");
		document.getElementById("3pt-made").classList.add("hidden");
		document.getElementById("ft-made").classList.add("hidden");
		document.getElementById("fg-missed").classList.add("hidden");
		document.getElementById("3pt-missed").classList.add("hidden");
		document.getElementById("ft-missed").classList.add("hidden");
		document.getElementById("reb").classList.add("hidden");
		document.getElementById("ast").classList.add("hidden");
		document.getElementById("stl").classList.add("hidden");
		document.getElementById("to").classList.add("hidden");
	}
	else if(last == "nameEditText")
	{
		document.getElementById("name-submittal").classList.add("hidden");
	}


}
