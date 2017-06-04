package br.com.senac.controller.dto;

public class CarrinhoRequest {
	
	Long id;
	Long idCliente;
	String carrinho;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdCliente() {
		return idCliente;
	}
	public void setIdCliente(Long idCliente) {
		this.idCliente = idCliente;
	}
	public String getCarrinho() {
		return carrinho;
	}
	public void setCarrinho(String carrinho) {
		this.carrinho = carrinho;
	}

}
