import app from './app';

angular.element(document).ready(() => {
	angular.bootstrap(document.body, [ app ], { strictDi: true });
});
