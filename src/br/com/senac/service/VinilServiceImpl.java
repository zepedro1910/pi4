package br.com.senac.service;

import java.util.List;
import java.util.Map;
import java.util.Objects;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import br.com.senac.domain.Vinil;
import br.com.senac.repository.VinilRepository;

@Service
public class VinilServiceImpl implements VinilService {

      private final VinilRepository vinilRepository;

      @Inject
      public VinilServiceImpl(final VinilRepository vinilRepository) {
            super();
            this.vinilRepository = vinilRepository;
      }

      @Override
      public Integer countVinil(final Map<String, Object> map) {
            final String nome = getNameKey(map);
            final Long id = getIdKey(map);
            return vinilRepository.countVinil(nome, id);
      }

      @Override
      public void save(final Vinil vinil) {
            vinilRepository.saveVinil(vinil);
      }

      @Override
      public List<Vinil> findVinil(final Map<String, Object> map) {
            final int fistItem = (int) map.get("fistItem");
            final int lastItem = (int) map.get("maxResult");
            final String name = getNameKey(map);
            final Long id = getIdKey(map);
            return vinilRepository.find(fistItem, lastItem, name, id);
      }

      private String getNameKey(final Map<String, Object> map) {
            String name = null;
            if (map.containsKey("nome")) {
                  name = (String) map.get("nome");
            }
            return name;
      }

      private Long getIdKey(final Map<String, Object> map) {
            Long id = null;
            if (map.containsKey("codProd") && Objects.nonNull(map.get("codProd"))) {
                  id = ((Integer) map.get("codProd")).longValue();
            }
            return id;
      }

      @Override
      public List<Vinil> buscaPorCategoria(final Map<String, Object> map) {
            String categoria = null;
            if (map.containsKey("categoria")) {
                  categoria = (String) map.get("categoria");
            }
            return vinilRepository.buscaPorCategoria(categoria);
      }
}
