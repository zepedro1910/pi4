package br.com.senac.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "TB_VINIL")
public class Vinil {

      @Id
      @GeneratedValue(strategy = GenerationType.TABLE)
      private Long id;

      //@Column(nullable = false)
      private String nome;

      private Categoria categoria;

      private Double preco;

      private String descricao;

      private Integer quantidade;

      @OneToOne(cascade = CascadeType.ALL)
      private Imagem imagem;

      private boolean isInactive;

      public Imagem getImagem() {
            return imagem;
      }

      public void setImagem(final Imagem imagem) {
            this.imagem = imagem;
      }

      public boolean isInactive() {
            return isInactive;
      }

      public void setInactive(final boolean isInactive) {
            this.isInactive = isInactive;
      }

      public Integer getQuantidade() {
            return quantidade;
      }

      public void setQuantidade(final Integer quantidade) {
            this.quantidade = quantidade;
      }

      public Long getId() {
            return id;
      }

      public void setId(final Long id) {
            this.id = id;
      }

      public String getNome() {
            return nome;
      }

      public void setNome(final String nome) {
            this.nome = nome;
      }

      public Double getPreco() {
            return preco;
      }

      public void setPreco(final Double preco) {
            this.preco = preco;
      }

      public String getDescricao() {
            return descricao;
      }

      public void setDescricao(final String descricao) {
            this.descricao = descricao;
      }

      public Categoria getCategoria() {
            return categoria;
      }

      public void setCategoria(final Categoria categoria) {
            this.categoria = categoria;
      }

      @JsonProperty(value = "isInactive")
      public boolean isInative() {
            return isInactive;
      }

      public void setInative(final boolean isInative) {
            isInactive = isInative;
      }

}
