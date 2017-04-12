package br.com.senac.domain;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

import net.sf.oval.constraint.NotEmpty;
import net.sf.oval.constraint.NotNull;

@Entity
@Table(name = "pessoa")
public class Pessoa {

	public Pessoa() {
		super();
	}

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotEmpty
	@NotNull(message = "Nome nao pode ser nulo")
	@Column(name = "nome")
	private String nome;

	@Column(name = "sobrenome")
	private String sobrenome;

	@OneToOne(cascade = CascadeType.ALL)
	private Endereco endereco;
	
	@JsonDeserialize(using = LocalDateDeserializer.class)
	@JsonSerialize(using = LocalDateSerializer.class)
	@JsonFormat(shape = Shape.STRING, pattern = "ddMMyyyy")
	private LocalDate dataNasc;

	private String celular;
	private String fixo;
	private String rg;
	private String cpf;
	private String sexo;
	private String email;
	private String senha;


	public String getCelular() {
		return celular;
	}

	public String getCpf() {
		return cpf;
	}

	public LocalDate getDataNasc() {
		return dataNasc;
	}

	public String getEmail() {
		return email;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public String getFixo() {
		return fixo;
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getRg() {
		return rg;
	}

	public String getSenha() {
		return senha;
	}

	public String getSexo() {
		return sexo;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setCelular(final String celular) {
		this.celular = celular;
	}

	public void setCpf(final String cpf) {
		this.cpf = cpf;
	}

	public void setDataNasc(final LocalDate dataNasc) {
		this.dataNasc = dataNasc;
	}

	public void setEmail(final String email) {
		this.email = email;
	}

	public void setEndereco(final Endereco endereco) {
		this.endereco = endereco;
	}

	public void setFixo(final String fixo) {
		this.fixo = fixo;
	}

	public void setId(final Long id) {
		this.id = id;
	}

	public void setNome(final String nome) {
		this.nome = nome;
	}

	public void setRg(final String rg) {
		this.rg = rg;
	}

	public void setSenha(final String senha) {
		this.senha = senha;
	}

	public void setSexo(final String sexo) {
		this.sexo = sexo;
	}

	public void setSobrenome(final String sobrenome) {
		this.sobrenome = sobrenome;
	}
}
