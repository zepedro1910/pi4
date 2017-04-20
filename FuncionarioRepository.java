package br.com.senac.repository;

import java.util.List;

import br.com.senac.domain.Funcionario;

public interface FuncionarioRepository {

      public Long save(Funcionario funcionario);

      public Integer countUser(String name, String cpf);

      public List<Funcionario> findUser(int fistItem, int lastItem, String name, String cpf);

}
