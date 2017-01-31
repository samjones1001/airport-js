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
		weatherStormy = new Weather();
		weatherSunny = new Weather();
	});
	
	describe('accepts a landing plane', function() {

		beforeEach(function() {
			spyOn(weatherSunny, "isStormy").and.returnValue(false);
		});

		it('and confirms it has landed', function() {
			expect(airport.receive(plane, weatherSunny)).toEqual("the plane has landed");
		});

		it('and stores it', function() {
			(airport.receive(plane, weatherSunny))
			expect(airport.planeReturn()).toContain(plane)	
		});
	});

	describe('take off a landed plane when weather is sunny', function() {

		beforeEach(function() {
			spyOn(weatherSunny, "isStormy").and.returnValue(false);
			airport.receive(plane, weatherSunny);
			
		});

		it('and confirms it has taken off', function() {
			expect(airport.takeOff(plane, weatherSunny)).toEqual("the plane has taken off");
		});

		it('and stores it', function() {
			airport.takeOff(plane, weatherSunny);
			expect(airport.planeReturn()).not.toContain(plane);
		});
	});

	describe('cannot take off a landed plane weather is stormy', function() {
		
		beforeEach(function() {
		spyOn(weatherSunny, "isStormy").and.returnValue(false);
		airport.receive(plane, weatherSunny);
		spyOn(weatherStormy, "isStormy").and.returnValue(true);
		});
		
		it('raise an error', function() {
			expect(function() {airport.takeOff(plane,weatherStormy); } ).toThrowError("Can't take off")
			//expect(airport.takeOff(plane)).toEqual("the plane has taken off");
		});

		it('plane still in array', function() {
			// airport.takeOff(plane, weatherStormy);
			expect(function() {airport.takeOff(plane,weatherStormy); } ).toThrowError("Can't take off")
			expect(airport.planeReturn()).toContain(plane);
			});
	});

});

