package br.com.senac.repository;

import java.util.List;

import br.com.senac.domain.Pessoa;

public interface PessoaRepository {

	public List<Pessoa> allPessoas();

	public Long savePessoa(final Pessoa pessoa);
}
