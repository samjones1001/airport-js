function Airport(){
	this._planes = []
};

Airport.prototype.receive = function(plane, weather) {
	if (weather.isStormy() === true) {
		throw new Error ("Can't land");
	}
	this._planes.push(plane);
	return "the plane has landed";
};

Airport.prototype.planeReturn = function() {
	return this._planes;
}

Airport.prototype.takeOff = function(plane, weather){
	console.log("one",airport._planes)
	if (weather.isStormy() === true) {
		throw new Error ("Can't take off");}
	console.log("two",airport._planes)
	var position = this._planes.indexOf(plane); 
	this._planes.splice(position,1);
	console.log("three",airport._planes)
	return "the plane has taken off";
}


airport = new Airport();
plane = new Plane();
airport.receive(plane);
airport.takeOff(plane,weather);