cadastroModule.controller('cadastroController', [
      '$scope', '$http', 'PessoaService', function($scope, $http, service) {

	      $scope.findBy = {itemsPerPage : 8, fistItem : 0};
	      
	      $scope.userList;
	      $scope.isNovo = false;

	      // Funcao para popular o grid quanda carregar a pagina
	      service.findUser($scope.findBy).then(function(res) {
		      $scope.userList = res.data;
		      $scope.totalUsers = $scope.userList.length;
	      }, function(err) {
		      console.log(err);
	      });

	      // Funcao para salvar usuario
	      $scope.save = function(pessoa) {
		      service.save(pessoa);
		      $scope.pessoa = {};
		      $scope.isNovo = false;
	      };

	      // Funcao para buscar usuario e atualizar o grid
	      $scope.search = function(findBy) {
		      service.findUser(findBy).then(function(res) {
			      $scope.userList = res.data;
		      }, function(err) {
			      console.log(err);
		      });

		      delete $scope.findBy;
	      };

	      // Funcao para editar usuario
	      $scope.editUser = function(user) {
		      $scope.pessoa = user;
		      $scope.isNovo = true;
	      }

	      // Exibe formulario de novo cliente
	      $scope.novoCliente = function() {
		      $scope.isNovo = true;
	      }

      }
]);
