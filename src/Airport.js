function Airport(){
	this._planes = []
};

Airport.prototype.receive = function(plane) {
	this._planes.push(plane);
	return "the plane has landed";
};

Airport.prototype.planeReturn = function() {
	return this._planes;
}

Airport.prototype.takeOff = function(plane, weather){
	if (weather.isStormy === true) {
		throw "Can't take off";}
	var position = this._planes.indexOf(plane); 
	this._planes.splice(position,1);
	return "the plane has taken off";}


console.log(airport = new Airport());
console.log(plane = new Plane());
console.log(weather = new Weather());
console.log(airport.receive(plane));
console.log(airport.planeReturn());
console.log(airport.takeOff(plane,weather));