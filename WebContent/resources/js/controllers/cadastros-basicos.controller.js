cadastroModule
		.controller(
				'cadastroController',
				[
						'$scope',
						'$http',
						'PessoaService',
						'$timeout',
						function($scope, $http, service, $timeout) {

							$scope.isNovo = false;

							$scope.currentPage = 1;
							$scope.maxSize = 5;
							$scope.itemsPerPage = 8;

							function getPagination(currentPage) {
								var pagination = {
									maxResult : $scope.itemsPerPage,
									fistItem : ($scope.itemsPerPage * (currentPage - 1))
								};
								return pagination;
							}
							;
							
							// Recebe os estados do back-end
							service.listEstate().then(function(res) {
								$scope.listEstates = res.data;
							});

							// Conta o numero total de usuarios para paginacao
							service.countUser({}).then(function(res) {
								$scope.totalItems = res.data;
							}, function(err) {
								console.log(err);
							});

							// Funcao para popular o grid quando carregar a
							// pagina
							service.findUser(getPagination($scope.currentPage))
									.then(function(res) {
										$scope.userList = res.data;
									}, function(err) {
										console.log(err);
									});

							// Faz a requisicao para o banco trazer os usuarios
							// e popula o
							// grid
							// conforme a paginacao
							$scope.changePage = function(currentPage, findBy) {

								findBy = findBy ? findBy : {};
								findBy.maxResult = getPagination(currentPage).maxResult;
								findBy.fistItem = getPagination(currentPage).fistItem;

								service.findUser(findBy).then(function(res) {
									$scope.userList = res.data;
								}, function(err) {
									console.log(err);
								});
							};

							// Funcao para salvar usuario
							$scope.save = function(pessoa /* ,isValid */) {

								service.save(pessoa);
								$scope.pessoa = {};
								$scope.isNovo = false;
								
								
								setTimeout(function () {
									service.countUser({}).then(function(res) {
										$scope.totalItems = res.data;
									}, function(err) {
										console.log(err);
									});
						        }, 0);
								
								setTimeout(function () {
									service.findUser(getPagination($scope.currentPage))
									.then(function(res) {
										$scope.userList = res.data;
									}, function(err) {
										console.log(err);
									});
								},0);
							};

							// Funcao para buscar usuario e atualizar o grid
							$scope.search = function(findBy) {

								if (!findBy) {
									findBy = {};
								}
								service.countUser(findBy).then(function(res) {
									$scope.totalItems = res.data;
								}, function(err) {
									console.log(err);
								});

								delete $scope.currentPage;
								$scope.currentPage = 1;

								findBy.maxResult = $scope.itemsPerPage;
								findBy.fistItem = ($scope.itemsPerPage * ($scope.currentPage - 1));

								service.findUser(findBy).then(function(res) {
									$scope.userList = res.data;
								}, function(err) {
									console.log(err);
								});

							};

							// Funcao para editar usuario
							$scope.editUser = function(user) {
								$scope.pessoa = user;
								$scope.isNovo = true;
							}

							// Exibe formulario de novo cliente
							$scope.novoCliente = function() {
								$scope.pessoa = {};
								$scope.isNovo = true;
							}

						} ]);
