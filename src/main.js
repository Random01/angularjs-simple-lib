angular
	.module('app', ['gridReport']);

angular
	.module('app')
	.controller('main', [
		'$scope',
		function ($scope) {
			$scope.message = 'Hello!';
		}
	]);