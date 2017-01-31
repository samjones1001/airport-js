function Airport(){
	this._planes = []
};

Airport.prototype.receive = function(plane) {
	this._planes.push(plane);
	console.log(this._planes);
	return "the plane has landed";
};