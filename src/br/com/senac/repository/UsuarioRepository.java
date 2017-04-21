package br.com.senac.repository;

import java.util.List;

import br.com.senac.domain.Usuario;

public interface UsuarioRepository {

      Integer countUser(String name, String cpf);

      public List<Usuario> findUser(int fistItem, int lastItem, String name, String cpf);

      public Long saveUsuario(Usuario usuario);

}
