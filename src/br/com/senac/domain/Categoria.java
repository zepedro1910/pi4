package br.com.senac.domain;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonValue;

public enum Categoria {

      ROCK_INTERNACIONAL("ROCK INTERNACIONAL"), //
      ROCK_NACIONAL("ROCK NACIONAL"), //
      MPB_E_SAMBA("MPB E SAMBA"), //
      POP("POP"), //
      BLUES_E_JAZZ("BLUES E JAZZ"), //
      FOLK_E_COUNTRY("FOLK E COUNTRY"), //
      TRILHAS("TRILHAS"), //
      REGGAE("REGGAE"), //
      RAP_E_RIPHOP("RAP E RIP-HOP"), //
      DIVERSOS("DIVERSOS"); //

      private Categoria(final String descricao) {
            this.descricao = descricao;
      }

      private String descricao;

      @JsonValue
      public String getDescricao() {
            return descricao;
      }

      public static Categoria getEnum(final String descricao) {
            for (final Categoria categoria : Categoria.values()) {
                  if (categoria.getDescricao().equalsIgnoreCase(descricao)) {
                        return categoria;
                  }
            }
            return null;
      }

      public static List<String> getCategorias() {
            final List<String> categorias = new ArrayList<>();
            for (final Categoria c : Categoria.values()) {
                  categorias.add(c.getDescricao());
            }
            return categorias;
      }

}
