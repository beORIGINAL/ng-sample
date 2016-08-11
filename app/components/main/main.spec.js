import {MainComponentController} from './main.component';
describe("Testing out main-module functionality", () => {
	let ctrl = null;
	beforeEach(mock.inject(($injector) => {
		const $timeout = $injector.get('$timeout');
		ctrl = new MainComponentController($timeout);
	}));

	it("Check sum calculation with two arguments", () => {
		ctrl.x = 2;
		ctrl.y = 3;
		expect(ctrl.calculateSum(ctrl.x, ctrl.y)).toBe(5);
	});

	it("Check sum calculation with default argument", () => {
		ctrl.x = 2;
		expect(ctrl.calculateSum(ctrl.x)).toBe(3);
	});
});