package br.com.senac.repository;

import java.util.List;

import br.com.senac.domain.Pessoa;

public interface PessoaRepository {

	public List<Pessoa> allPessoas();

	public Long savePessoa(final Pessoa pessoa);

	Integer countUser(String name, String cpf);

	public List<Pessoa> findUser(int fistItem, int lastItem, String name, String cpf);
}
