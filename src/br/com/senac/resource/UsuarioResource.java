package br.com.senac.resource;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.senac.domain.Estados;
import br.com.senac.domain.Usuario;
import br.com.senac.service.UsuarioService;

@RestController
@RequestMapping("/pessoa")
public class UsuarioResource {

      private final UsuarioService userService;

      @Inject
      public UsuarioResource(final UsuarioService pessoaService) {
            super();
            userService = pessoaService;
      }

      @RequestMapping(value = "/save", method = RequestMethod.POST)
      public ResponseEntity<Usuario> save(@RequestBody final Usuario usuario) {
            userService.save(usuario);
            
            Map<String, Object> user = new HashMap<String,Object>();
            user.put("cpf", usuario.getCpf());
            Usuario userCad = (Usuario) userService.findByCpf(user);
            return new ResponseEntity<Usuario>(userCad,HttpStatus.OK);
  
      }

      @RequestMapping(value = "/findUser", method = RequestMethod.POST)
      public List<Usuario> findBy(@RequestBody final Map<String, Object> map) {
            return userService.findUser(map);
      }

      @RequestMapping(value = "/countUser", method = RequestMethod.POST)
      public Integer countUser(@RequestBody final Map<String, Object> map) {
            return userService.countUser(map);
      }

      @RequestMapping(value = "/listEstate", method = RequestMethod.GET)
      public List<Map<String, Object>> getAllState() {
            final List<Map<String, Object>> mapList = new ArrayList<>();
            Arrays.asList(Estados.values()).stream().forEach(m -> {
                  final Map<String, Object> map = new HashMap<>();
                  map.put("state", m);
                  map.put("abrev", m.getAbrev());
                  mapList.add(map);
            });
            return mapList;
      }
      
      @RequestMapping(value = "/login", method = RequestMethod.POST)
      public Usuario login(@RequestBody final Map<String, Object> map) {
            return userService.login(map);
      }
      
      @RequestMapping(value = "/findByCpf", method = RequestMethod.POST)
      public Usuario findByCpf(@RequestBody final Map<String, Object> map) {
            return userService.findByCpf(map);
      }
      
      
      
  }
