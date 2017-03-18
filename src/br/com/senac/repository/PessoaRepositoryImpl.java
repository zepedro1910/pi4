package br.com.senac.repository;

import java.util.List;

import javax.inject.Inject;

import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.senac.domain.Pessoa;
import net.sf.oval.ConstraintViolation;
import net.sf.oval.Validator;

@Repository
public class PessoaRepositoryImpl implements PessoaRepository {

	private final HibernateTemplate hibernateTemplate;
	private final Validator validator;
	@Inject
	public PessoaRepositoryImpl(final HibernateTemplate hibernateTemplate, final Validator validator) {
		super();
		this.hibernateTemplate = hibernateTemplate;
		this.validator = validator;
	}

	public List<Pessoa> allPessoas() {
		return hibernateTemplate.loadAll(Pessoa.class);
	}

	@Transactional(propagation = Propagation.REQUIRED)
	public Long savePessoa(final Pessoa pessoa) {
		List<ConstraintViolation> validate = validator.validate(pessoa);
		System.out.println(validate.toString());
		if (validate.size() == 0) {
			final Pessoa mergePessoa = hibernateTemplate.merge(pessoa);
			return mergePessoa.getId();
		}
	 return (long) 0;
	}
}
