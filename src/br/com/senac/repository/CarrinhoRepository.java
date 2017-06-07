package br.com.senac.repository;

import java.util.List;

import javax.inject.Inject;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.senac.domain.CarrinhoDeCompra;
import br.com.senac.domain.Usuario;

@Repository
public class CarrinhoRepository {
	
	private final HibernateTemplate hibernateTemplate;

    @Inject
    public CarrinhoRepository(final HibernateTemplate hibernateTemplate) {
          super();
          this.hibernateTemplate = hibernateTemplate;
    }
    @Transactional
	public Long finalizar(CarrinhoDeCompra cart) {
		hibernateTemplate.merge(cart);
		DetachedCriteria criteria = DetachedCriteria.forClass(CarrinhoDeCompra.class);
		criteria.add(Restrictions.eq("idCliente", cart.getIdCliente()));
		List<CarrinhoDeCompra> list = (List<CarrinhoDeCompra>) hibernateTemplate.findByCriteria(criteria);
		return list.get(0).getId();
	}

}
