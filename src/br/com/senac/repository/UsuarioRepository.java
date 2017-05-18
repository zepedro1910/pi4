package br.com.senac.repository;

import java.util.List;

import br.com.senac.domain.Pessoa;
import br.com.senac.domain.Usuario;

public interface UsuarioRepository {

      Integer countUser(String name, String cpf);

      public List<Pessoa> findUser(int fistItem, int lastItem, String name, String cpf);

      public Long saveUsuario(Pessoa usuario);

	public Usuario checkLoginDataUser(String email, String senha);

}
