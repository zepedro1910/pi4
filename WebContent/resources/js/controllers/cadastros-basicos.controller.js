cadastroModule.controller('cadastroController', [
      '$scope', '$http', 'PessoaService', function($scope, $http, service) {
    	  
    	  $scope.isNovo = false;
    	  
    	  service.all().then(function(res) {
		      $scope.pessoas = res.data;
	      }, function(err) {
		      console.log(err);
	      });
    	  
    	  
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
		      
		      $scope.isNovo = false;
	      };
	      
	      $scope.novoCliente = function() {
			$scope.isNovo = true;
		}
      
      }
]);
