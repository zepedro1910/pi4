
cadastroModule.controller('PessoaController',[ '$scope','$http','PessoaService', function($scope, $http, service){
	
	service.all().then(function(res) {
		$scope.pessoas = res.data;
	}, function(err) {
		console.log(err);
	});
	
	$scope.save = function(pessoa){
		service.save(pessoa);
		$scope.pessoa = {};
		service.all().then(function(res) {
			$scope.pessoas = res.data;
		}, function(err) {
			console.log(err);
		});
	};
	
}]);