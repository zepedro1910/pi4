package br.com.senac.service;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.senac.domain.Usuario;
import br.com.senac.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {

      private final UsuarioRepository userRepository;
      private final HibernateTemplate hibernateTemplate;

      @Inject
      public UsuarioServiceImpl(final UsuarioRepository pessoaRepository, HibernateTemplate hibernateTemplate) {
            super();
            userRepository = pessoaRepository;
            this.hibernateTemplate = hibernateTemplate;
      }

      @Override
      public void save(final Usuario usuario) {
          //TODO  
    	  
    	  userRepository.saveUsuario(usuario);
      }

      @Override
      public Integer countUser(final Map<String, Object> map) {
            final String nome = getNameKey(map);
            final String cpf = getCpfKey(map);
            return userRepository.countUser(nome, cpf);
      }

      @Override
      public List<Usuario> findUser(final Map<String, Object> map) {
            final int fistItem = (int) map.get("fistItem");
            final int lastItem = (int) map.get("maxResult");
            final String nome = getNameKey(map);
            final String cpf = getCpfKey(map);
            return userRepository.findUser(fistItem, lastItem, nome, cpf);
      }

      private String getNameKey(final Map<String, Object> map) {
            String nome = null;
            if (map.containsKey("nome")) {
                  nome = (String) map.get("nome");
            }
            return nome;
      }

      private String getCpfKey(final Map<String, Object> map) {
            String cpf = null;
            if (map.containsKey("cpf")) {
                  cpf = (String) map.get("cpf");
            }
            return cpf;
      }

	@Override
	public List<Usuario> checkLoginData(String email, String senha) {
		if(email != "" && senha != ""){
			userRepository.checkLoginDataUser(email,senha);
		}
		return null;
	}

	@SuppressWarnings("unchecked")
	@Override
	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public Usuario findByCpf(Map<String, Object> map) {
		String cpf = null;
		if (map.containsKey("cpf")) {
			cpf = (String) map.get("cpf");
		}
		DetachedCriteria criteria = DetachedCriteria.forClass(Usuario.class);
		criteria.add(Restrictions.eq("cpf", cpf));
		List<Usuario> list = (List<Usuario>) hibernateTemplate.findByCriteria(criteria);
		
		if (!list.isEmpty()) {
			return list.get(0);
		}
		
		return null;
	}
	

	@SuppressWarnings("unchecked")
	@Override
	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public Usuario login(Map<String, Object> map) {
		String email = null, senha = null;
		if (map.containsKey("email")) {
			email = (String) map.get("email");
		}
		if (map.containsKey("senha")) {
			senha = (String) map.get("senha");
		}
		
		if(email != null && senha != null){
			DetachedCriteria criteria = DetachedCriteria.forClass(Usuario.class);
			criteria.add(Restrictions.eq("email", email));
			List<Usuario> list = (List<Usuario>) hibernateTemplate.findByCriteria(criteria);
			
			if (!list.isEmpty()) {
				Usuario user = list.get(0);
				if(user.getSenha().equals(senha)){
					return user;
				}else{
					return null;
				}
			}
		}
		
		return null;
	}
	
	
	

}
