package br.com.senac.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_FUNCIONARIO")
public class Funcionario extends Pessoa {

      private Cargo cargo;
      private Double salario;

      public Funcionario() {
            super();
      }

      public Funcionario(final Cargo cargo, final Double salario) {
            super();
            this.cargo = cargo;
            this.salario = salario;
      }

      @Id
      @GeneratedValue(strategy = GenerationType.TABLE)
      private Long id;

      public Long getId() {
            return id;
      }

      public void setId(final Long id) {
            this.id = id;
      }

      public void setSalario(final Double salario) {
            this.salario = salario;
      }

      public Cargo getCargo() {
            return cargo;
      }

      public void setCargo(final Cargo cargo) {
            this.cargo = cargo;
      }

      public Double getSalario() {
            return salario;
      }

      public void setSalario(final double d) {
            salario = d;
      }

}
