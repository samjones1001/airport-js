// As an air traffic controller 
// So I can get passengers to a destination 
// I want to instruct a plane to land at an airport and confirm that it has landed 

// As an air traffic controller 
// So I can get passengers on the way to their destination 
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

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
			expect(airport._planes).toContain(plane)	
		});
	});

});

