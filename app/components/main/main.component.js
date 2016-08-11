export class MainComponentController {
	/*@ngInject*/
	constructor($timeout){
		this.$timeout = $timeout;
		this.x = 0;
		this.y = 0;
	}

	calculateSum (x, y = 1) {
		alert(`Your sum is ${x + y}`);
		return x + y;
	}
}

export const MainComponent = {
	controller: MainComponentController,
	controllerAs: 'ctrl',
	template: `<article>
					<h1>I'm component</h1>
					<input type="number" ng-model="ctrl.x">
					+
					<input type="number" ng-model="ctrl.y">
					<button ng-click="ctrl.calculateSum(ctrl.x)">calculate</button>
				</article>`
};