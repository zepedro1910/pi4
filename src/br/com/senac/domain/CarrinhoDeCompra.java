/*
 * package br.com.senac.domain;
 * 
 * import java.util.List;
 * 
 * import javax.persistence.CascadeType;
 * import javax.persistence.Entity;
 * import javax.persistence.GeneratedValue;
 * import javax.persistence.GenerationType;
 * import javax.persistence.Id;
 * import javax.persistence.JoinColumn;
 * import javax.persistence.OneToMany;
 * import javax.persistence.Table;
 * 
 * @Entity
 * 
 * @Table(name = "TB_CARRINHO_COMPRA")
 * public class CarrinhoDeCompra {
 * 
 * @Id
 * 
 * @GeneratedValue(strategy = GenerationType.TABLE)
 * private Long id;
 * 
 * @OneToMany(cascade = CascadeType.ALL)
 * 
 * @JoinColumn(name = "id")
 * private List<Vinil> listaVinil;
 * 
 * public Long getId() {
 * return id;
 * }
 * 
 * public void setId(final Long id) {
 * this.id = id;
 * }
 * 
 * public List<Vinil> getListaVinil() {
 * return listaVinil;
 * }
 * 
 * public void setListaVinil(final List<Vinil> listaVinil) {
 * this.listaVinil = listaVinil;
 * }
 * 
 * }
 */