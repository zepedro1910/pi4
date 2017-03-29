package br.com.senac.repository;

import java.util.List;
import java.util.Objects;

import javax.inject.Inject;

import org.hibernate.Criteria;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projection;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
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

	@SuppressWarnings("unchecked")
	@Override
	public List<Pessoa> allPessoas() {
		final DetachedCriteria criteria = DetachedCriteria.forClass(Pessoa.class);
		criteria.addOrder(Order.asc("nome"));
		return (List<Pessoa>) hibernateTemplate.findByCriteria(criteria);

	}

	@Override
	@Transactional(propagation = Propagation.REQUIRED)
	public Long savePessoa(final Pessoa pessoa) {
		final List<ConstraintViolation> validate = validator.validate(pessoa);
		System.out.println(validate.toString());
		if (validate.size() == 0) {
			final Pessoa mergePessoa = hibernateTemplate.merge(pessoa);
			return mergePessoa.getId();
		}
		return (long) 0;
	}

	@Override
	public Integer countUser(String name, String cpf) {
		final DetachedCriteria criteria = extracted(name, cpf);
		ProjectionList list = Projections.projectionList();
		list.add(Projections.count("id"));
		criteria.setProjection(list);
		return (Integer) hibernateTemplate.findByCriteria(criteria).get(0);
	}

	private DetachedCriteria extracted(String name, String cpf) {
		final DetachedCriteria criteria = DetachedCriteria.forClass(Pessoa.class);
		if (Objects.nonNull(name)) {
			criteria.add(Restrictions.like("nome", name, MatchMode.ANYWHERE).ignoreCase());
		}
		if (Objects.nonNull(cpf)) {
			criteria.add(Restrictions.like("cpf", cpf, MatchMode.EXACT));
		}
		return criteria;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Pessoa> findUser(int fistItem, int lastItem, String name, String cpf) {
		final DetachedCriteria criteria = extracted(name, cpf).addOrder(Order.asc("nome"));
		return (List<Pessoa>) hibernateTemplate.findByCriteria(criteria, fistItem, lastItem);
	}
}
