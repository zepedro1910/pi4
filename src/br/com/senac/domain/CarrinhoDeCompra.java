
package br.com.senac.domain;
 
  import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
  
  @Entity
  @Table(name = "TB_CARRINHO_COMPRA")
  public class CarrinhoDeCompra {
  
  @Id
  @GeneratedValue(strategy = GenerationType.TABLE)
  private Long id;
  
  private String carrinho;
  
  private Long idCliente;

public String getCarrinho() {
	return carrinho;
}

public void setCarrinho(String carrinho) {
	this.carrinho = carrinho;
}

public Long getId() {
	return id;
}

public void setIde(Long id) {
	this.id = id;
}
public Long getIdCliente() {
	return idCliente;
}

public void setIdCliente(Long idCliente) {
	this.idCliente = idCliente;
}
  
   
  }
 