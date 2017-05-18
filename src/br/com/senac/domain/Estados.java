package br.com.senac.domain;

public enum Estados {

      Acre("AC"), //	
      ALAGOAS("AL"), //	 
      AMAPA("AP"), //	 
      AMAZONAS("AM"), //	
      BAHIA("BA"), //	 
      CEARA("CE"), //	 
      DISTRITO_FEDERAL("DF"), //	 
      ESPIRITO_SANTO("ES"), //	 
      GOIAS("GO"), //	 
      MARANHÃO("MA"), //	 
      MATO_GROSSO("MT"), //	 
      MATO_GROSSO_DO_SUL("MS"), //	 
      MINAS_GERAIS("MG"), //	 
      PARA("PA"), //	 
      PARAIBA("PB"), //	 
      PARANA("PR"), //	 
      PERNAMBUCO("PE"), //	 
      PIAUI("PI"), //	 
      RIO_DE_JANEIRO("RJ"), //	 
      RIO_GRANDE_DO_NORTE("RN"), //	 
      RIO_GRANDE_DO_SUL("RS"), //	 
      RONDONIA("RO"), //	 
      RORAIMA("RR"), //	 
      SANTA_CATARINA("SC"), //	 
      SAO_PAULO("SP"), //	 
      SERGIPE("SE"), //	 
      TOCANTINS("TO");

      private String abrev;

      Estados(final String abrev) {
            this.abrev = abrev;
      }

      public String getAbrev() {
            return abrev;
      }

}
