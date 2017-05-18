package br.com.senac.service;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import br.com.senac.domain.Usuario;
import br.com.senac.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {

      private final UsuarioRepository userRepository;

      @Inject
      public UsuarioServiceImpl(final UsuarioRepository pessoaRepository) {
            super();
            userRepository = pessoaRepository;
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

}
