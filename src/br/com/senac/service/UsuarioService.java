package br.com.senac.service;

import java.util.List;
import java.util.Map;

import br.com.senac.domain.Usuario;

public interface UsuarioService {

      public List<Usuario> findUser(Map<String, Object> map);

      public Integer countUser(Map<String, Object> map);

      public void save(Usuario usuario);

	public List<Usuario> checkLoginData(String email, String senha);

	public Usuario findByCpf(Map<String, Object> map);
}
