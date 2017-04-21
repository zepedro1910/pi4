package br.com.senac.resource;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.senac.domain.Categoria;
import br.com.senac.domain.Vinil;
import br.com.senac.service.VinilService;

@RestController
@RequestMapping(value = "/vinil")
public class VinilResource {

      private final VinilService vinilService;

      @Inject
      public VinilResource(final VinilService vinilService) {
            super();
            this.vinilService = vinilService;
      }

      @RequestMapping(value = "categorias", method = RequestMethod.GET)
      public List<String> getCategorias() {
            final List<String> categorias = new ArrayList<>();
            for (final Categoria c : Categoria.values()) {
                  categorias.add(c.getDescricao());
            }
            return categorias;
      }

      @RequestMapping(value = "/count", method = RequestMethod.POST)
      public Integer countVinil(@RequestBody final Map<String, Object> map) {
            return vinilService.countVinil(map);
      }

      @RequestMapping(value = "/save", method = RequestMethod.POST)
      public void save(@RequestBody final Vinil vinil) {
            vinilService.save(vinil);
      }

      @RequestMapping(value = "/find", method = RequestMethod.POST)
      public List<Vinil> findBy(@RequestBody final Map<String, Object> map) {
            return vinilService.findVinil(map);
      }

}
