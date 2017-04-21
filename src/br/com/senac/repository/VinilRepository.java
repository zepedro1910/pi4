package br.com.senac.repository;

import java.util.List;

import br.com.senac.domain.Vinil;

public interface VinilRepository {

      public Integer countVinil(String nome, Integer id);

      public Long saveVinil(Vinil vinil);

      public List<Vinil> find(int fistItem, int lastItem, String name, Integer id);

}
