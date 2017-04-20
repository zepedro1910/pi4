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
      private boolean isInativo;

      public Usuario() {
            super();
      }

      public Usuario(final boolean isInativo) {
            super();
            this.isInativo = isInativo;
      }

      public boolean isInativo() {
            return isInativo;
      }

      public void setInativo(final boolean isInativo) {
            this.isInativo = isInativo;
      }

      public Long getId() {
            return id;
      }

      public void setId(final Long id) {
            this.id = id;
      }

}
