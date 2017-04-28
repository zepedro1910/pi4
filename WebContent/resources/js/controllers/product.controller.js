cadastroModule
		.controller(
				'productController',
				[
						'$scope',
						'$http',
						'PessoaService',
						function($scope, $http, service) {

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

							service.getCategorias().then(function(res) {
								$scope.categorias = res.data;
							});

							// Conta o numero total de produtos para paginacao
							service.countVinil({}).then(function(res) {
								$scope.totalItems = res.data;
							}, function(err) {
								console.log(err);
							});

							// Funcao para popular o grid quando carregar a
							// pagina
							service
									.findVinil(
											getPagination($scope.currentPage))
									.then(function(res) {
										$scope.vinilList = res.data;
									}, function(err) {
										console.log(err);
									});

							// Popula o grid conforme a paginacao
							$scope.changePage = function(currentPage, findBy) {

								findBy = findBy ? findBy : {};
								findBy.maxResult = getPagination(currentPage).maxResult;
								findBy.fistItem = getPagination(currentPage).fistItem;

								service.findVinil(findBy).then(function(res) {
									$scope.vinilList = res.data;
								}, function(err) {
									console.log(err);
								});
							};

							// Funcao para salvar produto
							$scope.save = function(produto /* ,isValid */) {

								service.saveProduto(produto);
								$scope.produto = {};
								$scope.isNovo = false;

								/*
								 * service.findUser(getPagination($scope.currentPage)).then(function(res) {
								 * $scope.userList = res.data; }, function(err) {
								 * console.log(err); });
								 */
							};

							// Funcao para buscar usuario e atualizar o grid
							$scope.search = function(findBy) {

								service.countVinil(findBy).then(function(res) {
									$scope.totalItems = res.data;
								}, function(err) {
									console.log(err);
								});

								delete $scope.currentPage;
								$scope.currentPage = 1;
								findBy.maxResult = $scope.itemsPerPage;
								findBy.fistItem = ($scope.itemsPerPage * ($scope.currentPage - 1));

								service.findVinil(findBy).then(function(res) {
									$scope.vinilList = res.data;
								}, function(err) {
									console.log(err);
								});
							};

							// Funcao para editar produto
							$scope.editProduto = function(produto) {
								$scope.produto = produto;
								$scope.produto.id = produto.id;
								$scope.isNovo = true;
							}

							// Exibe formulario de novo produto
							$scope.novoProduto = function() {
								$scope.produto = {};
								$scope.isNovo = true;
							}
						} ]);