function Airport(){
	this._planes = []
};

Airport.prototype.receive = function(plane) {
	this._planes.push(plane);
	console.log(this._planes);
	return "the plane has landed";
};

Airport.prototype.planeReturn = function() {
	return this._planes;
}

Airport.prototype.takeOff = function(plane){
	var position = this._planes.indexOf(plane); 
	this._planes.splice(position,1);
	return "the plane has taken off"
}