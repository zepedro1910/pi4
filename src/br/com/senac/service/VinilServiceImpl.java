package br.com.senac.service;

import java.util.List;
import java.util.Map;

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
            final Integer id = getIdKey(map);
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
            final Integer id = getIdKey(map);
            return vinilRepository.find(fistItem, lastItem, name, id);
      }

      private String getNameKey(final Map<String, Object> map) {
            String name = null;
            if (map.containsKey("nome")) {
                  name = (String) map.get("nome");
            }
            return name;
      }

      private Integer getIdKey(final Map<String, Object> map) {
            Integer id = null;
            if (map.containsKey("id")) {
                  id = (Integer) map.get("id");
            }
            return id;
      }
}
