function encerrarSessao(){
	
	while(window.sessionStorage.length > 0){
		var key = window.sessionStorage.key(0);
		window.sessionStorage.removeItem(key);
	}
	
	window.location.href='index-ecommerce.html';
}

var app = angular.module('app', []);

app.controller('headerController',['$scope', '$filter', '$http', function ($scope, $filter, $http){
	
	$scope.redirectToCategory = function(categoria){
		window.sessionStorage.setItem('categoria', JSON.stringify(categoria));
        window.location.href='shop-ecommerce.html'
	}
	
	$scope.categoria = [];
	
	$http({
		url:'vinil/categorias',
		method:'GET'
	}).then(function(response){
		$scope.categoria = response.data;
	});
}]);

// controller ==> index-ecommerce.html
app.controller('appController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
	
	
	
    $scope.produtos1 = [];
    
	$scope.loadIndexItems = function(){
    	$http({
    		method:'POST',
    		url:'vinil/find',
    		data: {maxResult:0, fistItem: 0}
    	}).then(function(response){
    		$scope.produtos1 = response.data;
    	});
	}
        	
    $scope.viewDetails = function(produto){
    	window.sessionStorage.setItem('produto', JSON.stringify(produto));
        window.location.href='details-ecommerce.html'
    }
    
    $scope.addCarrinho = function(produto){
    	$http({
    		url:'carrinhos/produtos',
    		method:'POST',
    		data: produto
    	}).then(function(response){
    		alert("Produto Adicionado ao Carrinho!");
    	});
    }
    
}]);

// controller ==> details-ecommerce.html
app.controller('produtoController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
	$scope.produto = JSON.parse(window.sessionStorage.getItem('produto'));
	
	 $scope.addCarrinho = function(produto){
	    	$http({
	    		url:'carrinhos/produtos',
	    		method:'POST',
	    		data: produto
	    	}).then(function(response){
	    		alert("Produto Adicionado ao Carrinho!");
	    	});
	    }
}]);

// controller ==> login-ecommerce.html
app.controller('loginController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
	
	$scope.logar = function(usuario){
		$http({
			url:'pessoa/login',
			method:'POST',
			data: usuario
		}).then(function(response){
			if(response.data == ""){
				alert("Senha ou Email inválido.");
			}else{
				window.sessionStorage.setItem('UsuarioLogado', JSON.stringify(response.data));
				window.location.href='index-ecommerce.html';
			}
		}).catch(function(e){
			console.log(e);
		});
	}

	
}]);

// app.controller('paymentController', ['$scope', '$filter', '$http', function
// ($scope, $filter, $http) {
// $scope.isEditMode = false;
// $scope.usuario = {Endereco:'Rua 13 de Maio, 123',
// Pais: 'BR',
// Cidade: 'São Paulo',
// Cep: '04674-080',
// Telefone: '(11) 95610-0878'};
// }]);


app.controller('autenticacaoController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
	
 	$scope.usuario = JSON.parse(window.sessionStorage.getItem('UsuarioLogado'));
	if($scope.usuario != null)
		$scope.usuarioAutenticado = true ;
	else
		$scope.usuarioAutenticado = false ;
  
}]);

// controller ==> register-ecommerce.html
app.controller('accountController',['$scope', '$filter', '$http', function ($scope, $filter, $http){

  $scope.state_selected;
  $scope.onClickOption = function (index, estado){

    if(index > -1) $scope.state_selected = index;
    
    return estado;
  }

  $scope.listEstates;
	  
  $scope.carregarEstados = function(){
	  $http({
		  url:'pessoa/listEstate',
		  method:'GET'
	  }).then(function(response){
		  $scope.listEstates = response.data;
	  }).catch(function(e){
		  console.log(e);
	  })
  }
  
  $scope.errorMessage = false;
  $scope.verifyPassword = function (data1, data2){
      if(data1 != data2){
          $scope.usuario.SenhaConfirma = "";
          $scope.usuario.Senha = "";
          $scope.errorMessage = true;
      }else{
          $scope.errorMessage = false;
      }
  }
  
  $scope.cadastrarUsuario = function(consumer){
	  $http({
		  url:'pessoa/save',
		  method:'POST',
		  data: consumer
	  }).then(function(response){
		  window.sessionStorage.setItem('UsuarioLogado', JSON.stringify(response.data));
	      window.location.href='index-ecommerce.html'
	  }).catch(function (e){
		  console.log(e);
	  });
  }

// payment mode
  $scope.usuario = JSON.parse(window.sessionStorage.getItem("UsuarioLogado"));
  
  // data de vencimento do boleto
  $scope.dateToday = new Date();
  $scope.date = new Date();
  $scope.date.setDate($scope.date.getDate() + 7);

}]);

  // controller ==> shop-ecommerce.html
app.controller('shopCatalogController',['$scope', '$filter', '$http', function ($scope, $filter, $http){


  $scope.produtosSecao= [];
  
  $scope.viewDetails = function(produto){
  	window.sessionStorage.setItem('produto', JSON.stringify(produto));
      window.location.href='details-ecommerce.html'
  }
  
  $scope.addCarrinho = function(produto){
  	$http({
  		url:'carrinhos/produtos',
  		method:'POST',
  		data: produto
  	}).then(function(response){
  		alert("Produto Adicionado ao Carrinho!");
  	});
  }

  $scope.categoria = JSON.parse(window.sessionStorage.getItem('categoria'));
      
  $http({
		method:'POST',
		url:'vinil/buscaPorCategoria',
		data: {categoria:$scope.categoria}
	}).then(function(response){
		$scope.produtosSecao = response.data;
	});

  $scope.currentpage = 0;
  $scope.pageSize = 9;
  $scope.numberOfPages = Math.ceil($scope.produtosSecao.length/$scope.pageSize) - 1 == -1 ? 0:Math.ceil($scope.produtosSecao.length/$scope.pageSize) - 1;

  if($scope.currentpage == $scope.numberOfPages){
      $('#listaProdutos ul li span:last').hide();
    }
  
  if($scope.currentpage == 0){
      $('#listaProdutos ul li span:first').hide();
    }
  
  $scope.prevPage = function (){
    if($scope.currentpage > 0){
      $('#listaProdutos ul li span:first').show();
      $scope.currentpage = $scope.currentpage - 1;
        if($scope.currentpage < $scope.numberOfPages)
          $('#listaProdutos ul li span:last').show();
    }
    if($scope.currentpage == 0){
      $('#listaProdutos ul li span:first').hide();
    }
  }

  $scope.fwdPage = function (){
    if($scope.currentpage < $scope.numberOfPages){
      $('#listaProdutos ul li span:last').show();
        $scope.currentpage = $scope.currentpage + 1;
          if($scope.currentpage > 0)
            $('#listaProdutos ul li span:first').show();
    }
    if($scope.currentpage == $scope.numberOfPages){
      $('#listaProdutos ul li span:last').hide();
    }
  };
}]);

app.filter('startFrom', function() {
  return function(input, start) {
      start = +start; // parse to int
      return input.slice(start).length > 0 ? input.slice(start) : "" ;
  }
});

app.controller('orderController', ['$scope', '$filter', '$http', function ($scope, $filter, $http){
	
	$scope.pgto = window.sessionStorage.getItem('tipoPgto') == 'boleto'; 
	$scope.pedido = window.sessionStorage.getItem('numPedido');
	
}]);

app.controller('checkOutController', ['$scope', '$filter', '$http', function ($scope, $filter, $http){
  
  $scope.carrinhoCompras = [];
  $scope.messageEmptyCart = true;
  $scope.numeroPedido;
  
  $http({
  	url:'carrinhos/produtos',
  	method:'GET'
  }).then(function(response){
  	$scope.carrinhoCompras = response.data;
  	$scope.messageEmptyCart = $scope.carrinhoCompras.length > 0;
  }).catch(function(e){
	  console.log(e);
  });
  
  $scope.mudaQuantidade = function(id,flag){
	  $http({
		  url:'carrinhos/produtos',
		  method:'PATCH',
		  data: {'id': id, 'adiciona': flag}
	  }).then(function(response){
		  $scope.carrinhoCompras = response.data;
	  		$scope.messageEmptyCart = $scope.carrinhoCompras.length > 0;
	  }).catch(function(e){
		  console.log(e);
	  })
  }
  
  $scope.totalCarrinho = function (){
    var array = $scope.carrinhoCompras;
    var total = 0;
    array.forEach(function(produto) {
      total += (produto.quantidade * produto.precoUnitario);
    });
    return total;
  }

  $scope.removerProdutoCarrinho = function(id){
	  $http({
		  url:'carrinhos/produtos/ex',
		  method:'POST',
		  data: {'id': id}
	  }).then(function(response){
		  $scope.carrinhoCompras = response.data;
	  		$scope.messageEmptyCart = $scope.carrinhoCompras.length > 0;
	  }).catch(function(e){
		  console.log(e);
	  })
  }
  
  $scope.redirectToPayment = function(carrinhoCompras){
	  if(window.sessionStorage.getItem('UsuarioLogado') != null){
		  if(carrinhoCompras.length > 0){
			  window.sessionStorage.setItem('carrinho', JSON.stringify(carrinhoCompras));
		      window.location.href='payment-ecommerce.html';
		  }else{
			  alert("Carrinho de compras Vazio!");
		  }
	  }else{
		  window.location.href='login-ecommerce.html';
	  }
  }
  
  $scope.finalizarCompra = function(tab){
	  
	  $http({
		  url:'carrinhos/produtos/finaliza',
		  method:'POST',
		  data: {'idCliente': 1,'carrinho':JSON.stringify($scope.carrinhoCompras)}
	  }).then(function(response){
		  
		  $scope.carrinhoCompras = [];
		  
		  switch(tab){
		  case 3:
			  window.sessionStorage.setItem('numPedido', response.data);
			  window.sessionStorage.setItem('tipoPgto', 'boleto');
			  window.location.href='order-ecommerce.html';
			  break;
		  case 2:
			  window.sessionStorage.setItem('numPedido', response.data);
			  window.sessionStorage.setItem('tipoPgto', 'transf');
			  window.location.href='order-ecommerce.html';
			  break;
		  case 1:
			  window.sessionStorage.setItem('numPedido', response.data);
			  window.sessionStorage.setItem('tipoPgto', 'cartao');
			  window.location.href='order-ecommerce.html';
			  break;
		  }
		  $scope.numeroPedido = response.data;
		  console.log(response.data);
	  }).catch(function(e){
		  
		  console.log(e);
	  })
	  
  }
  
}]);