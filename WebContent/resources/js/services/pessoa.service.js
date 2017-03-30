cadastroModule.factory('PessoaService', [
      '$q', '$http', function($q, $http) {
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
	         },
	         findUser : function(findBy) {
		         return $http({
		            method : 'POST',
		            url : 'pessoa/findUser',
		            data : findBy
		         });
	         },
	         countUser : function(findBy){
	         	return $http({
	         		method : 'POST',
	         		url : 'pessoa/countUser',
	         		data : findBy
	         	});
	         }
	      };
      }
]);
