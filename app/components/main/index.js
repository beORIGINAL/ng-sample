import {MainComponent} from './main.component';

export default angular
	.module('app.main', [])
	.component('appMain', MainComponent)
	.config(function ($stateProvider) {
		$stateProvider
			.state('main', {
				url: '/',
				template: '<app-main><app-main/>'
			})
	})
	.name;