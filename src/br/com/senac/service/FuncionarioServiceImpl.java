package br.com.senac.service;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import br.com.senac.domain.Funcionario;
import br.com.senac.repository.FuncionarioRepository;

@Service
public class FuncionarioServiceImpl implements FuncionarioService {

      private final FuncionarioRepository funcionarioRepository;

      @Inject
      public FuncionarioServiceImpl(final FuncionarioRepository funcionarioRepository) {
            super();
            this.funcionarioRepository = funcionarioRepository;
      }

      @Override
      public Long save(final Funcionario funcionario) throws Exception {
            if (funcionario.getSenha().equals(funcionario.getPrimeiraSenha())) {
                  return funcionarioRepository.save(funcionario);
            }
            throw new Exception();
      }

      @Override
      public Integer count(final Map<String, Object> map) {

            String name = null;
            String cpf = null;

            if (map.containsKey("name")) {
                  name = (String) map.get("name");
            }
            if (map.containsKey("cpf")) {
                  cpf = (String) map.get("cpf");
            }
            return funcionarioRepository.countUser(name, cpf);

      }

      @Override
      public List<Funcionario> find(final Map<String, Object> map) {
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
            return funcionarioRepository.findUser(fistItem, lastItem, name, cpf);
      }

}
