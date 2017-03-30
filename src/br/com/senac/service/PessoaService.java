package br.com.senac.service;

import java.util.List;
import java.util.Map;

import br.com.senac.domain.Pessoa;

public interface PessoaService {

	public List<Pessoa> all();

	public void save(final Pessoa pessoa);

	public List<Pessoa> findUser(Map<String, Object> map);

	Integer countUser(Map<String, Object> map);
}
