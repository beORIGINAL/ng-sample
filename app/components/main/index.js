import {MainComponent} from './main.component';

export default angular
	.module('app.main', [])
	.component('appMain', MainComponent)
	.config(function ($stateProvider) {
		'ngInject';
		$stateProvider
			.state('app-main', {
				url: '/',
				template: '<app-main><app-main/>'
			})
	})
	.name;
