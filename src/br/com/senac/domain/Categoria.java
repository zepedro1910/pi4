package br.com.senac.domain;

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
      DIVERSOS("DIVERSOS"), //
      TODOS("TODOS");

      private Categoria(final String descricao) {
            this.descricao = descricao;
      }

      private String descricao;

      public String getDescricao() {
            return descricao;
      }

}
