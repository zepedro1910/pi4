package br.com.senac.resource;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.senac.domain.Funcionario;
import br.com.senac.service.FuncionarioService;

@RestController
@RequestMapping(value = "/funcionario")
public class FuncionarioResource {

      private final FuncionarioService funcionarioService;

      @Inject
      public FuncionarioResource(final FuncionarioService funcionarioService) {
            super();
            this.funcionarioService = funcionarioService;
      }

      @RequestMapping(value = "/save", method = RequestMethod.POST)
      public void saveFuncionario(@RequestBody final Funcionario funcionario) {
            funcionarioService.save(funcionario);
      }

      @RequestMapping(value = "/countEmployees", method = RequestMethod.POST)
      public Integer countEmployees(@RequestBody final Map<String, Object> map) {
            return funcionarioService.count(map);
      }

      @RequestMapping(value = "/findEmployee")
      public List<Funcionario> findEmployee(@RequestBody final Map<String, Object> map) {
            return funcionarioService.find(map);
      }
}