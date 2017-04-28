cadastroModule.controller('employeeController', ['$scope', '$http',
		'PessoaService', '$mdDialog', function($scope, $http, service, $mdDialog) {
			
	$scope.alerts = [
	    { type: 'danger', msg: 'Senhas não conferem.' },
	  ];
	
	$scope.closeAlert = function(index) {
	    $scope.alerts.splice(index, 1);
	  };
	
	
			$scope.isNovo = false;
			$scope.currentPage = 1;
		    $scope.maxSize = 5;
		    $scope.itemsPerPage = 8;
			$scope.senhaInvalida = false;
		    
		    service.countEmployees({
			      name : null
		      }).then(function(res) {
			      $scope.totalItems = res.data;
		      }, function(err) {
			      console.log(err);
		      });
		    
		    service.getCargos().then(function(res){
		    	$scope.cargos = res.data;
		    });
		    
		    function getPagination(currentPage) {
			      var pagination = {
			         maxResult : $scope.itemsPerPage,
			         fistItem : ($scope.itemsPerPage * (currentPage - 1))
			      };
			      return pagination;
		      };
			
			
			 // Funcao para popular o grid quando carregar a pagina
		      service.findEmployee(getPagination($scope.currentPage)).then(function(res) {
			      $scope.employeeList = res.data;
		      }, function(err) {
			      console.log(err);
		      });

			// Exibe formulario de funcionario
			$scope.novoFuncionario = function() {
				$scope.funcionario = {};
				$scope.isNovo = true;
			}

			// Funcao para salvar usuario
			$scope.save = function(funcionario, ev) {
				$scope.senhaInvalida = false;
				if(funcionario.primeiraSenha != funcionario.senha){
					funcionario.primeiraSenha = "";
					funcionario.senha = "";
					$scope.senhaInvalida = true;
					return;
				}
				service.saveEmployee(funcionario);
				$scope.funcionario = {};
				$scope.isNovo = false;
			};
			
			//Funcao para buscar usuario
			$scope.search = function(findBy) {
			service.countEmployees(findBy).then(function(res) {
			$scope.totalItems = res.data;
			 }, function(err) {
			 console.log(err);
			});

			delete $scope.currentPage;
			$scope.currentPage = 1;
			findBy.maxResult = $scope.itemsPerPage;
			findBy.fistItem = ($scope.itemsPerPage * ($scope.currentPage - 1));
			
			service.findEmployee(findBy).then(function(res) {
				      $scope.employeeList = res.data;
			      }, function(err) {
				      console.log(err);
			      });

		      };
		      
		   // Faz a requisicao para o banco trazer os usuarios e popula o
				// grid
		      // conforme a paginacao
		      $scope.changePage = function(currentPage, findBy) {

			      findBy = findBy ? findBy : {};
			      findBy.maxResult = getPagination(currentPage).maxResult;
			      findBy.fistItem = getPagination(currentPage).fistItem;

			      service.findEmployee(findBy).then(function(res) {
				      $scope.employeeList = res.data;
			      }, function(err) {
				      console.log(err);
			      });
		      };
		      
		      $scope.editUser = function(user) {
			      $scope.funcionario = user;
			      $scope.isNovo = true;
		      }
			
		} ]);
