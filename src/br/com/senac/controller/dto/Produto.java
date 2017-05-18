package br.com.senac.controller.dto;

import br.com.senac.domain.Vinil;

public class Produto {
	
	private Vinil vinil;
	private Integer quantidade;
	
	public Produto(Vinil vinil) {
		this.vinil = vinil;
		this.quantidade = 1;
		
	}
	
}
