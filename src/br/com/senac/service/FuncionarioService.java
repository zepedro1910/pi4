package br.com.senac.service;

import java.util.List;
import java.util.Map;

import br.com.senac.domain.Funcionario;

public interface FuncionarioService {

      public Long save(Funcionario funcionario) throws Exception;

      public Integer count(Map<String, Object> map);

      public List<Funcionario> find(Map<String, Object> map);

}
