package br.com.senac.controller;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.com.senac.controller.dto.CadastraProdutoRequest;
import br.com.senac.controller.dto.CarrinhoDeCompras;
import br.com.senac.domain.Vinil;
import br.com.senac.service.VinilService;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@Controller
@RequestMapping(value="produtos", consumes=APPLICATION_JSON_VALUE, produces=APPLICATION_JSON_VALUE)
public class ProdutoController {
	
	@Autowired
	private CarrinhoDeCompras carrinhoDeCompras;
	@Autowired
	private VinilService vinilService;
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Vinil> cadastra(@RequestBody CadastraProdutoRequest request){
		Vinil produto = vinilService.find(request.getId());
		carrinhoDeCompras.adiciona(produto);
		return new ResponseEntity<Vinil>(produto, HttpStatus.CREATED); 
		
	}

}
