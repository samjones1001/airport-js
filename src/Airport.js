function Airport(capacity, weather){
	this._planes = []
	this._capacity = (typeof capacity !== 'undefined') ?  capacity : 20;
	this._weather = (typeof weather !== 'undefined') ?  weather : new Weather;
};

Airport.prototype.receive = function(plane, weather) {
	if (weather.isStormy() === true || this._planes.length >= this._capacity) {
		throw new Error ("Can't land");
	}
	this._planes.push(plane);
	return "the plane has landed";
};

Airport.prototype.planeReturn = function() {
	return this._planes;
}

Airport.prototype.takeOff = function(plane, weather){
	if (weather.isStormy() === true) {
		throw new Error ("Can't take off");}
	var position = this._planes.indexOf(plane); 
	this._planes.splice(position,1);
	return "the plane has taken off";
}


airport = new Airport();
console.log(airport);