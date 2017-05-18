package br.com.senac.service;

import java.util.List;
import java.util.Map;

import br.com.senac.domain.Vinil;

public interface VinilService {

      public Integer countVinil(Map<String, Object> map);

      public void save(Vinil vinil);

      public List<Vinil> findVinil(Map<String, Object> map);

      public List<Vinil> buscaPorCategoria(Map<String, Object> map);

}
