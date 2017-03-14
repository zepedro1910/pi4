pessoaModule.factory('PessoaService',
		['$q', '$http', function($q, $http) {
			return {
				all : function() {
					return $http({
						method : 'GET',
						url : 'pessoa/all'
					});
				},
				save : function(pessoa) {
					return $http({
						method : 'POST',
						url : 'pessoa/save',
						data : pessoa
					});
				}
			};
		} ]);