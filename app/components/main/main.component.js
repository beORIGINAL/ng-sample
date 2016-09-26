export class MainComponentController {
	/*@ngInject*/
	constructor(){
		this.x = 0;
		this.y = 0;
		this.sum = null;
	}

	calculateSum (x, y = 1) {
		alert(`Your sum is ${x + y}`);
		this.sum = x + y;
		return this.sum;
	}

	saveSum () {
		this.sum = this.x + this.y;
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
					<button class="calculation" ng-click="ctrl.calculateSum(ctrl.x)">calculate</button>
				</article>`
};