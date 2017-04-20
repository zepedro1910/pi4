package br.com.senac.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_ENDERECO")
public class Endereco {

      @Id
      @Column(name = "id")
      @GeneratedValue(strategy = GenerationType.IDENTITY)
      private Long id;

      private Estados estado;
      private String cep;
      private String logradouro;
      private String numero;
      private String complemento;
      private String cidade;
      private String bairro;

      public String getCep() {
            return cep;
      }

      public void setCep(final String cep) {
            this.cep = cep;
      }

      public String getLogradouro() {
            return logradouro;
      }

      public void setLogradouro(final String logradouro) {
            this.logradouro = logradouro;
      }

      public String getNumero() {
            return numero;
      }

      public void setNumero(final String numero) {
            this.numero = numero;
      }

      public String getComplemento() {
            return complemento;
      }

      public void setComplemento(final String complemento) {
            this.complemento = complemento;
      }

      public String getCidade() {
            return cidade;
      }

      public void setCidade(final String cidade) {
            this.cidade = cidade;
      }

      public String getBairro() {
            return bairro;
      }

      public void setBairro(final String bairro) {
            this.bairro = bairro;
      }

      public Estados getEstado() {
            return estado;
      }

      public void setEstado(final Estados estado) {
            this.estado = estado;
      }
}
