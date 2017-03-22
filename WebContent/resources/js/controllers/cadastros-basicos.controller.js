cadastroModule.controller('cadastroController', [
      '$scope', '$http', 'PessoaService', function($scope, $http, service) {

	      $scope.selectAll = function() {
		      service.all().then(function(res) {
			      $scope.pessoas = res.data;
		      }, function(err) {
			      console.log(err);
		      });
	      };

	      $scope.save = function(pessoa) {
		      service.save(pessoa);
		      $scope.pessoa = {};
	      };
      }
]);
