class MainComponentController {
	constructor($timeout){
		this.$timeout = $timeout;
		this.messageModel = '';
	}

	sayHello (msg) {
		this.$timeout(() => {alert(msg)}, 1000)
	}
}

export const MainComponent = {
	controller: MainComponentController,
	template: `<article>
					<h1>I'm component</h1>
					<input type="text" ng-model="$ctrl.messageModel">
					<button ng-click="$ctrl.sayHello($ctrl.messageModel)">Say Hello</button>
				</article>`
};