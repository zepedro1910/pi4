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
      public List<Usuario> all() {
            return userRepository.allUsers();
      }

      @Override
      public void save(final Usuario usuario) {
            userRepository.saveUsuario(usuario);
      }

      @Override
      public Integer countUser(final Map<String, Object> map) {

            String name = null;
            String cpf = null;

            if (map.containsKey("name")) {
                  name = (String) map.get("name");
            }
            if (map.containsKey("cpf")) {
                  cpf = (String) map.get("cpf");
            }
            return userRepository.countUser(name, cpf);
      }

      @Override
      public List<Usuario> findUser(final Map<String, Object> map) {

            final int fistItem = (int) map.get("fistItem");
            final int lastItem = (int) map.get("maxResult");

            String name = null;
            String cpf = null;

            if (map.containsKey("name")) {
                  name = (String) map.get("name");
            }
            if (map.containsKey("cpf")) {
                  cpf = (String) map.get("cpf");
            }
            return userRepository.findUser(fistItem, lastItem, name, cpf);
      }

}
