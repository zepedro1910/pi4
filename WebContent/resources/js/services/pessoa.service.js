cadastroModule.factory('PessoaService', [ '$q', '$http', function($q, $http) {
	return {
		save : function(pessoa) {
			return $http({
				method : 'POST',
				url : 'pessoa/save',
				data : pessoa
			});
		},
		findUser : function(findBy) {
			return $http({
				method : 'POST',
				url : 'pessoa/findUser',
				data : findBy
			});
		},
		countUser : function(findBy) {
			return $http({
				method : 'POST',
				url : 'pessoa/countUser',
				data : findBy
			});
		},
		listEstate : function() {
			return $http({
				method : 'GET',
				url : 'pessoa/listEstate'
			})
		},
		saveEmployee : function(funcionario) {
			return $http({
				method : 'POST',
				url : 'funcionario/save',
				data : funcionario
			})
		},
		countEmployees : function(findBy) {
			return $http({
				method : 'POST',
				url : 'funcionario/countEmployees',
				data : findBy
			})
		},
		findEmployee : function(findBy) {
			return $http({
				method : 'POST',
				url : 'funcionario/findEmployee',
				data : findBy
			})
		},
		getCategorias : function() {
			return $http({
				method : 'GET',
				url : 'vinil/categorias'
			})
		},
		countVinil : function(findBy) {
			return $http({
				method : 'POST',
				url : 'vinil/count',
				data : findBy
			})
		},
		findVinil : function(findBy) {
			return $http({
				method : 'POST',
				url : 'vinil/find',
				data : findBy
			})
		},
		saveProduto : function(produto){
			return $http ({
				method : 'POST',
				url : 'vinil/save',
				data : produto
			})
		},
		getCargos : function() {
			return $http({
				method : 'GET',
				url : 'funcionario/cargos'
			})
		}
	};
} ]);
