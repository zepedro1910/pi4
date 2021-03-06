package br.com.senac.controller;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.senac.controller.dto.AtualizaProdutoRequest;
import br.com.senac.controller.dto.CarrinhoDeCompras;
import br.com.senac.controller.dto.CarrinhoRequest;
import br.com.senac.controller.dto.Produto;
import br.com.senac.controller.dto.ProdutoRequest;
import br.com.senac.domain.CarrinhoDeCompra;
import br.com.senac.domain.Vinil;
import br.com.senac.repository.CarrinhoRepository;
import br.com.senac.service.VinilService;

@RestController
@RequestMapping(value = "carrinhos")
public class CarrinhoDeComprasController {

	@Autowired
	private CarrinhoDeCompras carrinhoDeCompras;
	@Autowired
	private VinilService vinilService;
	@Autowired
	private CarrinhoRepository carrinhoRepository;

	@RequestMapping(value = "/produtos", method = RequestMethod.POST)
	public ResponseEntity<Vinil> cadastra(@RequestBody ProdutoRequest request) {
		Vinil produto = vinilService.find(request.getId());
		carrinhoDeCompras.adiciona(produto);
		return new ResponseEntity<Vinil>(produto, HttpStatus.CREATED);

	}

	@RequestMapping(value = "/produtos", method = RequestMethod.GET)
	public ResponseEntity<Collection<Produto>> lista() {

		Collection<Produto> produtos = carrinhoDeCompras.produtos();

		return new ResponseEntity<Collection<Produto>>(produtos, HttpStatus.OK);
	}

	@RequestMapping(value = "/produtos/ex", method = RequestMethod.POST)
	public ResponseEntity<Collection<Produto>> exclui(@RequestBody ProdutoRequest request) {

		Long idProd = request.getId();
		Collection<Produto> produtos = carrinhoDeCompras.removeProduto(idProd).produtos();

		return new ResponseEntity<Collection<Produto>>(produtos, HttpStatus.OK);

	}

	@RequestMapping(value = "/produtos", method = RequestMethod.PATCH)
	public ResponseEntity<Collection<Produto>> atualiza(@RequestBody AtualizaProdutoRequest request) {

		Collection<Produto> produtos = null;
		if (request.deveAdicionarProduto()) {
			produtos = carrinhoDeCompras.aumentaQuantidadeProduto(request.getId()).produtos();
		} else {
			produtos = carrinhoDeCompras.diminuiQuantidadeProduto(request.getId()).produtos();
		}

		return new ResponseEntity<Collection<Produto>>(produtos, HttpStatus.OK);

	}
	
	@RequestMapping(value = "/produtos/finaliza", method = RequestMethod.POST)
	public ResponseEntity<Long> fechar(@RequestBody CarrinhoRequest request) {
		
		
		CarrinhoDeCompra cart = new CarrinhoDeCompra();
		cart.setIdCliente(request.getIdCliente());
		cart.setCarrinho(request.getCarrinho());
		
		Long idCart = carrinhoRepository.finalizar(cart);
		
		carrinhoDeCompras.produtos().clear();
		
		return  new ResponseEntity<Long>(idCart,HttpStatus.OK);

	}



}
