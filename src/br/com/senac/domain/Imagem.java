package br.com.senac.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "TB_IMAGEM")
public class Imagem {

      @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long id;

      @Lob
      private byte[] base64;

      public Long getId() {
            return id;
      }

      public void setId(final Long id) {
            this.id = id;
      }

      public String getBase64() {
            return new String(base64);
      }

      public void setBase64(final String base64) {
            this.base64 = base64.getBytes();
      }

}
