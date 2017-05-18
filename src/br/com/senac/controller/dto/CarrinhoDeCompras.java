package br.com.senac.controller.dto;

import java.util.Collection;
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

	public Collection<Produto> produtos() {
		
		return produtos.values();
		
	}
	
	public CarrinhoDeCompras removeProduto(Long id){
		produtos.remove(id);
		
		return this;
	}

	public CarrinhoDeCompras aumentaQuantidadeProduto(Long id) {
		
		produtos.get(id).aumentaQuantidade();
		return this;
	}

	public CarrinhoDeCompras diminuiQuantidadeProduto(Long id) {
		produtos.get(id).diminuiQuantidade();
		return this;
	}

}
