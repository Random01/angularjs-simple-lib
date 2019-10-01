angular
	.module('gridReport', []);

angular
	.module('gridReport')
	.directive('gfSimple', [
		function () {
			return {
				restrict: 'E',
				replace: true,
				scope: {
					message: '='
				},
				template: '<div>{{message}}</div>'
			};
		}
	]);