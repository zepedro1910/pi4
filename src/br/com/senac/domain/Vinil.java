package br.com.senac.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_VINIL")
public class Vinil {

      @Id
      @GeneratedValue(strategy = GenerationType.TABLE)
      @Column(name = "ID_VINIL")
      private Long id;

      @Column(nullable = false)
      private String nome;

      @Column(nullable = false)
      private Double preco;

      @Column(nullable = false)
      private String descricao;

      @Column(nullable = false)
      private Integer quantidade;

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

      @Column(nullable = false)
      private Categoria categoria;

}
