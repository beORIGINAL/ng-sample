import MainModule from './index';
import {MainComponentController} from './main.component';

describe("Testing out main-module functionality", () => {
	let ctrl, $rootScope, $state, $location, $compile;

	beforeEach(window.module(MainModule));

	beforeEach(inject(($injector) => {
		$rootScope = $injector.get('$rootScope');
		$state = $injector.get('$state');
		$location = $injector.get('$location');
		$compile = $injector.get('$compile');
		ctrl = new MainComponentController();
	}));

	describe('Check module', () => {
		it("should check state change", () => {
			$location.url('/app-main');
			debugger
			$rootScope.$apply();
			expect($state.current.name).toEqual('app-main');
		})
	});

	describe('Check view', () => {
		debugger
		const scope = $rootScope.$new();
		const template = $compile('<app-main></app-main>')(scope);
		scope.$apply();

		it('Should check sum after click', () => {
			let button = template.find('.calculation');
			ctrl.x = 3;
			button.trigger('click');
			scope.$apply();
			expect(this.sum).expect(4);
		});
	});

	it("Check sum calculation with two arguments", () => {
		ctrl.x = 2;
		ctrl.y = 3;
		expect(ctrl.calculateSum(ctrl.x, ctrl.y)).toBe(5);
	});

	it("Check sum calculation with default argument", () => {
		ctrl.x = 2;
		expect(ctrl.calculateSum(ctrl.x)).toBe(3);
	});

	it("Should save value to LocaleStorage", () => {
		const storage = window.localStorage;
		ctrl.x = 2;
		ctrl.y = 6;
		ctrl.saveSum();
		storage.setItem('sum', ctrl.sum);
		expect(JSON.parse(window.localStorage.getItem('sum'))).toBe(8);
	});
});