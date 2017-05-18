package br.com.senac.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_USUARIO")
public class Usuario extends Pessoa {

      @Id
      @GeneratedValue(strategy = GenerationType.TABLE)
      private Long id;

      //@OneToOne(cascade = CascadeType.ALL)
      //private CarrinhoDeCompra carrinho;

      public Usuario() {
            super();
      }

      public Usuario(final boolean isInativo) {
            super();
      }

      public Long getId() {
            return id;
      }

      public void setId(final Long id) {
            this.id = id;
      }

}
