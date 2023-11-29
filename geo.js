let variable2 = document.getElementById("arzb");
let variable3 = document.getElementById("toolb");
function getlocation() {
	navigator.geolocation.getCurrentPosition(showLoc);
}
function showLoc(pos) {
	variable2.value = pos.coords.latitude;
	variable3.value = pos.coords.longitude;
	cdata();
}