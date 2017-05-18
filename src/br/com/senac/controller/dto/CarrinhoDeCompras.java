package br.com.senac.controller.dto;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.SessionScope;

import br.com.senac.domain.Vinil;

@Component
@SessionScope
public class CarrinhoDeCompras {
	
	Map<Long,Produto> produtos = new HashMap<>();

	public void adiciona(Vinil vinil) {
		
		Produto produto = new Produto(vinil);
		
		produtos.put(vinil.getId(), produto);
		
	}

}
