package br.com.senac.controller.dto;

import java.io.Serializable;

import br.com.senac.domain.Vinil;

public class Produto implements Serializable{
	
	private Vinil vinil;
	private Integer quantidade;
	
	public Produto(Vinil vinil) {
		this.vinil = vinil;
		this.quantidade = 1;
		
	}
	
	public Long getId() {
		return vinil.getId();
	}
	
	public Integer getQuantidade() {
		return quantidade;
	}
	
	public String getNome() {
		return vinil.getNome();
				
	}
	
	public String getDescricao() {
		return vinil.getDescricao();
				
	}
	
	public Double getPrecoUnitario() {
		return vinil.getPreco();
	}
	
	public Double getPrecoTotal(){
		return vinil.getPreco() * quantidade;
	}

	public void aumentaQuantidade() {
		
		this.quantidade++;
		
	}
	
public void diminuiQuantidade() {
		
	if(this.quantidade > 1)
		this.quantidade--;
	}
}
