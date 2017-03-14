package br.com.senac.service;

import java.util.List;

import br.com.senac.domain.Pessoa;

public interface PessoaService {

	public List<Pessoa> all();

	public void save(final Pessoa pessoa);
}
