
pessoaModule.controller('PessoaController',[ '$scope', 'PessoaService', function($scope, service){
	
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