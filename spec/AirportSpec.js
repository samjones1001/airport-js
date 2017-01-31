// As an air traffic controller 
// So I can get passengers to a destination 
// I want to instruct a plane to land at an airport and confirm that it has landed 

// As an air traffic controller 
// So I can get passengers on the way to their destination 
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

//As an air traffic controller 
//To ensure safety 
//I want to prevent takeoff when weather is stormy 

describe('Airport', function() {

	var airport;

	beforeEach(function() {
		airport = new Airport();
		plane = new Plane();
	});

	describe('accepts a landing plane', function() {
		it('and confirms it has landed', function() {
			expect(airport.receive(plane)).toEqual("the plane has landed");
		});

		it('and stores it', function() {
			(airport.receive(plane))
			expect(airport.planeReturn()).toContain(plane)	
		});
	});

	describe('take off a landed plane when weather is sunny', function() {
		it('and confirms it has taken off', function() {
			airport.receive(plane);
			expect(airport.takeOff(plane)).toEqual("the plane has taken off");
		});

		it('and stores it', function() {
			airport.receive(plane);
			airport.takeOff(plane);
			expect(airport.planeReturn()).not.toContain(plane);
		});
	});

	describe('cannot take off a landed plane weather is stormy', function() {
		it('raise an error', function() {
			airport.receive(plane);
			//expect(airport.takeOff(plane)).toEqual("the plane has taken off");
		});

		it('plane is still in array', function() {
			airport.receive(plane);
			airport.takeOff(plane);
			//expect(airport.planeReturn()).not.toContain(plane);
		});
	});

});

