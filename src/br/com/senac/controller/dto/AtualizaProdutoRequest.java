package br.com.senac.controller.dto;

public class AtualizaProdutoRequest {
	
	private Long id;
	private Boolean adiciona;
	
	public Long getId() {
		return id;
	}
	
	public Boolean deveAdicionarProduto() {
		return adiciona;
	}
	
	public Boolean getAdiciona() {
		return adiciona;
	}
	
}
