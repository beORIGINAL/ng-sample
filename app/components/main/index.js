import uiRouter from 'angular-ui-router';
import {MainComponent} from './main.component';

export default angular
	.module('app.main', [
		uiRouter
	])
	.component('appMain', MainComponent)
	.config(function ($stateProvider) {
		'ngInject';
		$stateProvider
			.state('app-main', {
				url: '/app-main',
				template: `<app-main><app-main/>`
			})
	})
	.name;
