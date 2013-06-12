'use strict';

describe('angularjsGruntExampleApp app', function() {

	beforeEach(function() {
		browser().navigateTo('/');
	});

	describe('Homepage', function() {
		it('should display the correct route', function() {
			expect(browser().location().path()).toBe('/');
		});
	});

});