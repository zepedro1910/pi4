package br.com.senac.repository;

import java.util.List;
import java.util.Objects;

import javax.inject.Inject;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.senac.domain.Funcionario;

@Repository
public class FuncionarioRepositoryImpl implements FuncionarioRepository {

      private final HibernateTemplate hibernateTemplate;

      @Inject
      public FuncionarioRepositoryImpl(final HibernateTemplate hibernateTemplate) {
            super();
            this.hibernateTemplate = hibernateTemplate;
      }

      @Override
      @Transactional(propagation = Propagation.REQUIRED)
      public Long save(final Funcionario funcionario) {
            final Funcionario funcionarioMerge = hibernateTemplate.merge(funcionario);
            return funcionarioMerge.getId();
      }

      @Override
      public Integer countUser(final String name, final String cpf) {
            final DetachedCriteria criteria = extracted(name, cpf);
            final ProjectionList list = Projections.projectionList();
            list.add(Projections.count("id"));
            criteria.setProjection(list);
            return ((Long) hibernateTemplate.findByCriteria(criteria).get(0)).intValue();
      }

      private DetachedCriteria extracted(final String name, final String cpf) {
            final DetachedCriteria criteria = DetachedCriteria.forClass(Funcionario.class);
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
      public List<Funcionario> findUser(final int fistItem, final int lastItem, final String name, final String cpf) {
            final DetachedCriteria criteria = extracted(name, cpf).addOrder(Order.asc("nome"));
            return (List<Funcionario>) hibernateTemplate.findByCriteria(criteria, fistItem, lastItem);
      }
}
