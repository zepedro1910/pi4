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

import br.com.senac.domain.Vinil;

@Repository
public class VinilRepositoryImpl implements VinilRepository {

      private final HibernateTemplate hibernateTemplate;

      @Inject
      public VinilRepositoryImpl(final HibernateTemplate hibernateTemplate) {
            super();
            this.hibernateTemplate = hibernateTemplate;
      }

      @Override
      public Integer countVinil(final String nome, final Integer id) {
            final DetachedCriteria criteria = extracted(nome, id);
            final ProjectionList list = Projections.projectionList();
            list.add(Projections.count("ID_VINIL"));
            criteria.setProjection(list);
            return ((Long) hibernateTemplate.findByCriteria(criteria).get(0)).intValue();
      }

      private DetachedCriteria extracted(final String name, final Integer id) {
            final DetachedCriteria criteria = DetachedCriteria.forClass(Vinil.class);
            if (Objects.nonNull(name)) {
                  criteria.add(Restrictions.like("nome", name, MatchMode.ANYWHERE).ignoreCase());
            }
            if (Objects.nonNull(id)) {
                  criteria.add(Restrictions.eq("ID_VINIL", id));
            }
            return criteria;
      }

      @Override
      @Transactional(propagation = Propagation.REQUIRED)
      public Long saveVinil(final Vinil vinil) {
            final Vinil vinilMerge = hibernateTemplate.merge(vinil);
            return vinilMerge.getId();

      }

      @SuppressWarnings("unchecked")
      @Override
      public List<Vinil> find(final int fistItem, final int lastItem, final String name, final Integer id) {
            final DetachedCriteria criteria = extracted(name, id).addOrder(Order.asc("nome"));
            return (List<Vinil>) hibernateTemplate.findByCriteria(criteria, fistItem, lastItem);
      }
}
