package br.com.senac.resource;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.ui.Model;
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
      public void save(@RequestBody final Usuario usuario,  HttpServletRequest request, HttpServletResponse response) {
            userService.save(usuario);
            Usuario user = (Usuario) userService.findUser((Map<String, Object>) usuario);
            Cookie cookie = new Cookie("userId",user.getId().toString());
            cookie.setMaxAge(2592000); //30 dias
            response.addCookie(cookie);
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
      
      @RequestMapping(value = "/create-cookie", method = RequestMethod.GET)
      public String createCookie(Model model, HttpServletRequest request, HttpServletResponse response) {
          Cookie cookie = new Cookie("userId","cookie-value");
          cookie.setMaxAge(60*60*24); //24 hour
          response.addCookie(cookie);
          return "redirect:/";
      }
}
