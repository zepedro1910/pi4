package br.com.senac.repository;

import java.util.List;

import javax.inject.Inject;

import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.senac.domain.Pessoa;

@Repository
public class PessoaRepositoryImpl implements PessoaRepository {

	private final HibernateTemplate hibernateTemplate;

	@Inject
	public PessoaRepositoryImpl(final HibernateTemplate hibernateTemplate) {
		super();
		this.hibernateTemplate = hibernateTemplate;
	}

	public List<Pessoa> allPessoas() {
		return hibernateTemplate.loadAll(Pessoa.class);
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public Long savePessoa(final Pessoa pessoa) {
		final Pessoa mergePessoa = hibernateTemplate.merge(pessoa);
		return mergePessoa.getId();
	}
}
