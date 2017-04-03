﻿var app = angular.module('app', []);

//controller ==> index-ecommerce.html
app.controller('appController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.produtos1 = [{
        img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
        titulo: 'Classico',
        subtitulo: 'White',
        preco: 'R$650,00'
    }, {
        img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
        titulo: 'Classico',
        subtitulo: 'White',
        preco: 'R$550,00'
    }, {
        img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
        titulo: 'Classico',
        subtitulo: 'White',
        preco: 'R$450,00'
    }, {
        img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
        titulo: 'Classico',
        subtitulo: 'White',
        preco: 'R$350,00'
    }, {
        img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
        titulo: 'Classico',
        subtitulo: 'White',
        preco: 'R$950,00'
    }, {
        img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
        titulo: 'Classico',
        subtitulo: 'White',
        preco: 'R$850,00'
    }];
}]);

//controller ==> details-ecommerce.html
app.controller('produtoController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    $scope.produto = {
        nome: 'Caneca Game of Thrones',
        img: '#',
        preco: 'R$ 25,00',
        descricao: 'Caneca em cerâmica da série Game of Thrones'
    };
}]);

//controller ==> login-ecommerce.html
app.controller('loginController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
}]);

// app.controller('paymentController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
//   $scope.isEditMode = false;
//   $scope.usuario = {Endereco:'Rua 13 de Maio, 123',
//                     Pais: 'BR', 
//                     Cidade: 'São Paulo',
//                     Cep: '04674-080',
//                     Telefone: '(11) 95610-0878'};
// }]);


app.controller('autenticacaoController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
  $scope.usuario = {Nome:'Edward Carvalho',Id:'123'};
  $scope.usuarioAutenticado = true ;
}]);

//controller ==> register-ecommerce.html
app.controller('accountController',['$scope', '$filter', '$http', function ($scope, $filter, $http){

  $scope.paises = [
      { 
      "gentilico" : "afegãne",
      "nome_pais" : "Afeganistão",
      "nome_pais_int" : "Afghanistan",
      "sigla" : "AF"
    },
    { "gentilico" : "sul-africana",
      "nome_pais" : "África do Sul",
      "nome_pais_int" : "South Africa",
      "sigla" : "ZA"
    },
    { "gentilico" : "albanesa",
      "nome_pais" : "Albânia",
      "nome_pais_int" : "Albania",
      "sigla" : "AL"
    },
    { "gentilico" : "alemã",
      "nome_pais" : "Alemanha",
      "nome_pais_int" : "Germany",
      "sigla" : "DE"
    },
    { "gentilico" : "andorrana",
      "nome_pais" : "Andorra",
      "nome_pais_int" : "Andorra",
      "sigla" : "AD"
    },
    { "gentilico" : "angolana",
      "nome_pais" : "Angola",
      "nome_pais_int" : "Angola",
      "sigla" : "AO"
    },
    { "gentilico" : "anguillana",
      "nome_pais" : "Anguilla",
      "nome_pais_int" : "Anguilla",
      "sigla" : "AI"
    },
    { "gentilico" : "de antártida",
      "nome_pais" : "Antártida",
      "nome_pais_int" : "Antarctica",
      "sigla" : "AQ"
    },
    { "gentilico" : "antiguana",
      "nome_pais" : "Antígua e Barbuda",
      "nome_pais_int" : "Antigua & Barbuda",
      "sigla" : "AG"
    },
    { "gentilico" : "saudita",
      "nome_pais" : "Arábia Saudita",
      "nome_pais_int" : "Saudi Arabia",
      "sigla" : "SA"
    },
    { "gentilico" : "argelina",
      "nome_pais" : "Argélia",
      "nome_pais_int" : "Algeria",
      "sigla" : "DZ"
    },
    { "gentilico" : "argentina",
      "nome_pais" : "Argentina",
      "nome_pais_int" : "Argentina",
      "sigla" : "AR"
    },
    { "gentilico" : "armênia",
      "nome_pais" : "Armênia",
      "nome_pais_int" : "Armenia",
      "sigla" : "AM"
    },
    { "gentilico" : "arubana",
      "nome_pais" : "Aruba",
      "nome_pais_int" : "Aruba",
      "sigla" : "AW"
    },
    { "gentilico" : "australiana",
      "nome_pais" : "Austrália",
      "nome_pais_int" : "Australia",
      "sigla" : "AU"
    },
    { "gentilico" : "austríaca",
      "nome_pais" : "Áustria",
      "nome_pais_int" : "Austria",
      "sigla" : "AT"
    },
    { "gentilico" : "azerbaijano",
      "nome_pais" : "Azerbaijão",
      "nome_pais_int" : "Azerbaijan",
      "sigla" : "AZ"
    },
    { "gentilico" : "bahamense",
      "nome_pais" : "Bahamas",
      "nome_pais_int" : "Bahamas",
      "sigla" : "BS"
    },
    { "gentilico" : "barenita",
      "nome_pais" : "Bahrein",
      "nome_pais_int" : "Bahrain",
      "sigla" : "BH"
    },
    { "gentilico" : "bengali",
      "nome_pais" : "Bangladesh",
      "nome_pais_int" : "Bangladesh",
      "sigla" : "BD"
    },
    { "gentilico" : "barbadiana",
      "nome_pais" : "Barbados",
      "nome_pais_int" : "Barbados",
      "sigla" : "BB"
    },
    { "gentilico" : "bielo-russa",
      "nome_pais" : "Belarus",
      "nome_pais_int" : "Belarus",
      "sigla" : "BY"
    },
    { "gentilico" : "belga",
      "nome_pais" : "Bélgica",
      "nome_pais_int" : "Belgium",
      "sigla" : "BE"
    },
    { "gentilico" : "belizenha",
      "nome_pais" : "Belize",
      "nome_pais_int" : "Belize",
      "sigla" : "BZ"
    },
    { "gentilico" : "beninense",
      "nome_pais" : "Benin",
      "nome_pais_int" : "Benin",
      "sigla" : "BJ"
    },
    { "gentilico" : "bermudiana",
      "nome_pais" : "Bermudas",
      "nome_pais_int" : "Bermuda",
      "sigla" : "BM"
    },
    { "gentilico" : "boliviana",
      "nome_pais" : "Bolívia",
      "nome_pais_int" : "Bolivia",
      "sigla" : "BO"
    },
    { "gentilico" : "bósnia",
      "nome_pais" : "Bósnia-Herzegóvina",
      "nome_pais_int" : "Bosnia & Herzegovina",
      "sigla" : "BA"
    },
    { "gentilico" : "betchuana",
      "nome_pais" : "Botsuana",
      "nome_pais_int" : "Botswana",
      "sigla" : "BW"
    },
    { "gentilico" : "brasileira",
      "nome_pais" : "Brasil",
      "nome_pais_int" : "Brazil",
      "sigla" : "BR"
    },
    { "gentilico" : "bruneiana",
      "nome_pais" : "Brunei",
      "nome_pais_int" : "Brunei",
      "sigla" : "BN"
    },
    { "gentilico" : "búlgara",
      "nome_pais" : "Bulgária",
      "nome_pais_int" : "Bulgaria",
      "sigla" : "BG"
    },
    { "gentilico" : "burquinês",
      "nome_pais" : "Burkina Fasso",
      "nome_pais_int" : "Burkina Faso",
      "sigla" : "BF"
    },
    { "gentilico" : "burundinesa",
      "nome_pais" : "Burundi",
      "nome_pais_int" : "Burundi",
      "sigla" : "BI"
    },
    { "gentilico" : "butanesa",
      "nome_pais" : "Butão",
      "nome_pais_int" : "Bhutan",
      "sigla" : "BT"
    },
    { "gentilico" : "cabo-verdiana",
      "nome_pais" : "Cabo Verde",
      "nome_pais_int" : "Cape Verde",
      "sigla" : "CV"
    },
    { "gentilico" : "camaronesa",
      "nome_pais" : "Camarões",
      "nome_pais_int" : "Cameroon",
      "sigla" : "CM"
    },
    { "gentilico" : "cambojana",
      "nome_pais" : "Camboja",
      "nome_pais_int" : "Cambodia",
      "sigla" : "KH"
    },
    { "gentilico" : "canadense",
      "nome_pais" : "Canadá",
      "nome_pais_int" : "Canada",
      "sigla" : "CA"
    },
    { "gentilico" : "canário",
      "nome_pais" : "Canárias",
      "nome_pais_int" : "Canary Islands",
      "sigla" : "IC"
    },
    { "gentilico" : "cazaque",
      "nome_pais" : "Cazaquistão",
      "nome_pais_int" : "Kazakhstan",
      "sigla" : "KZ"
    },
    { "gentilico" : "de ceuta e melilla",
      "nome_pais" : "Ceuta e Melilla",
      "nome_pais_int" : "Ceuta & Melilla",
      "sigla" : "EA"
    },
    { "gentilico" : "chadiana",
      "nome_pais" : "Chade",
      "nome_pais_int" : "Chad",
      "sigla" : "TD"
    },
    { "gentilico" : "chilena",
      "nome_pais" : "Chile",
      "nome_pais_int" : "Chile",
      "sigla" : "CL"
    },
    { "gentilico" : "chinesa",
      "nome_pais" : "China",
      "nome_pais_int" : "China",
      "sigla" : "CN"
    },
    { "gentilico" : "cipriota",
      "nome_pais" : "Chipre",
      "nome_pais_int" : "Cyprus",
      "sigla" : "CY"
    },
    { "gentilico" : "cingapuriana",
      "nome_pais" : "Cingapura",
      "nome_pais_int" : "Singapore",
      "sigla" : "SG"
    },
    { "gentilico" : "colombiana",
      "nome_pais" : "Colômbia",
      "nome_pais_int" : "Colombia",
      "sigla" : "CO"
    },
    { "gentilico" : "comorense",
      "nome_pais" : "Comores",
      "nome_pais_int" : "Comoros",
      "sigla" : "KM"
    },
    { "gentilico" : "congolesa",
      "nome_pais" : "Congo",
      "nome_pais_int" : "Congo (Republic)",
      "sigla" : "CG"
    },
    { "gentilico" : "norte-coreano",
      "nome_pais" : "Coréia do Norte",
      "nome_pais_int" : "North Korea",
      "sigla" : "KP"
    },
    { "gentilico" : "norte-coreana",
      "nome_pais" : "Coréia do Sul",
      "nome_pais_int" : "South Korea",
      "sigla" : "KR"
    },
    { "gentilico" : "marfinense",
      "nome_pais" : "Costa do Marfim",
      "nome_pais_int" : "Côte d¿Ivoire",
      "sigla" : "CI"
    },
    { "gentilico" : "costarriquenha",
      "nome_pais" : "Costa Rica",
      "nome_pais_int" : "Costa Rica",
      "sigla" : "CR"
    },
    { "gentilico" : "croata",
      "nome_pais" : "Croácia",
      "nome_pais_int" : "Croatia",
      "sigla" : "HR"
    },
    { "gentilico" : "cubana",
      "nome_pais" : "Cuba",
      "nome_pais_int" : "Cuba",
      "sigla" : "CU"
    },
    { "gentilico" : "curaçauense",
      "nome_pais" : "Curaçao",
      "nome_pais_int" : "Curaçao",
      "sigla" : "CW"
    },
    { "gentilico" : "chagositano",
      "nome_pais" : "Diego Garcia",
      "nome_pais_int" : "Diego Garcia",
      "sigla" : "DG"
    },
    { "gentilico" : "dinamarquesa",
      "nome_pais" : "Dinamarca",
      "nome_pais_int" : "Denmark",
      "sigla" : "DK"
    },
    { "gentilico" : "djibutiana",
      "nome_pais" : "Djibuti",
      "nome_pais_int" : "Djibouti",
      "sigla" : "DJ"
    },
    { "gentilico" : "dominiquense",
      "nome_pais" : "Dominica",
      "nome_pais_int" : "Dominica",
      "sigla" : "DM"
    },
    { "gentilico" : "egípcia",
      "nome_pais" : "Egito",
      "nome_pais_int" : "Egypt",
      "sigla" : "EG"
    },
    { "gentilico" : "salvadorenha",
      "nome_pais" : "El Salvador",
      "nome_pais_int" : "El Salvador",
      "sigla" : "SV"
    },
    { "gentilico" : "árabe",
      "nome_pais" : "Emirados Árabes Unidos",
      "nome_pais_int" : "United Arab Emirates",
      "sigla" : "AE"
    },
    { "gentilico" : "equatoriana",
      "nome_pais" : "Equador",
      "nome_pais_int" : "Ecuador",
      "sigla" : "EC"
    },
    { "gentilico" : "eritreia",
      "nome_pais" : "Eritréia",
      "nome_pais_int" : "Eritrea",
      "sigla" : "ER"
    },
    { "gentilico" : "eslovaco",
      "nome_pais" : "Eslováquia",
      "nome_pais_int" : "Slovakia",
      "sigla" : "SK"
    },
    { "gentilico" : "esloveno",
      "nome_pais" : "Eslovênia",
      "nome_pais_int" : "Slovenia",
      "sigla" : "SI"
    },
    { "gentilico" : "espanhola",
      "nome_pais" : "Espanha",
      "nome_pais_int" : "Spain",
      "sigla" : "ES"
    },
    { "gentilico" : "norte-americana",
      "nome_pais" : "Estados Unidos",
      "nome_pais_int" : "United States",
      "sigla" : "US"
    },
    { "gentilico" : "estoniana",
      "nome_pais" : "Estônia",
      "nome_pais_int" : "Estonia",
      "sigla" : "EE"
    },
    { "gentilico" : "etíope",
      "nome_pais" : "Etiópia",
      "nome_pais_int" : "Ethiopia",
      "sigla" : "ET"
    },
    { "gentilico" : "fijiana",
      "nome_pais" : "Fiji",
      "nome_pais_int" : "Fiji",
      "sigla" : "FJ"
    },
    { "gentilico" : "filipina",
      "nome_pais" : "Filipinas",
      "nome_pais_int" : "Philippines",
      "sigla" : "PH"
    },
    { "gentilico" : "finlandesa",
      "nome_pais" : "Finlândia",
      "nome_pais_int" : "Finland",
      "sigla" : "FI"
    },
    { "gentilico" : "francesa",
      "nome_pais" : "França",
      "nome_pais_int" : "France",
      "sigla" : "FR"
    },
    { "gentilico" : "gabonesa",
      "nome_pais" : "Gabão",
      "nome_pais_int" : "Gabon",
      "sigla" : "GA"
    },
    { "gentilico" : "gambiana",
      "nome_pais" : "Gâmbia",
      "nome_pais_int" : "Gambia",
      "sigla" : "GM"
    },
    { "gentilico" : "ganense",
      "nome_pais" : "Gana",
      "nome_pais_int" : "Ghana",
      "sigla" : "GH"
    },
    { "gentilico" : "georgiana",
      "nome_pais" : "Geórgia",
      "nome_pais_int" : "Georgia",
      "sigla" : "GE"
    },
    { "gentilico" : "gibraltariana",
      "nome_pais" : "Gibraltar",
      "nome_pais_int" : "Gibraltar",
      "sigla" : "GI"
    },
    { "gentilico" : "inglesa",
      "nome_pais" : "Grã-Bretanha (Reino Unido, UK)",
      "nome_pais_int" : "United Kingdom",
      "sigla" : "GB"
    },
    { "gentilico" : "granadina",
      "nome_pais" : "Granada",
      "nome_pais_int" : "Grenada",
      "sigla" : "GD"
    },
    { "gentilico" : "grega",
      "nome_pais" : "Grécia",
      "nome_pais_int" : "Greece",
      "sigla" : "GR"
    },
    { "gentilico" : "groenlandesa",
      "nome_pais" : "Groelândia",
      "nome_pais_int" : "Greenland",
      "sigla" : "GL"
    },
    { "gentilico" : "guadalupense",
      "nome_pais" : "Guadalupe",
      "nome_pais_int" : "Guadeloupe",
      "sigla" : "GP"
    },
    { "gentilico" : "guamês",
      "nome_pais" : "Guam (Território dos Estados Unidos)",
      "nome_pais_int" : "Guam",
      "sigla" : "GU"
    },
    { "gentilico" : "guatemalteca",
      "nome_pais" : "Guatemala",
      "nome_pais_int" : "Guatemala",
      "sigla" : "GT"
    },
    { "gentilico" : "guernesiano",
      "nome_pais" : "Guernsey",
      "nome_pais_int" : "Guernsey",
      "sigla" : "GG"
    },
    { "gentilico" : "guianense",
      "nome_pais" : "Guiana",
      "nome_pais_int" : "Guyana",
      "sigla" : "GY"
    },
    { "gentilico" : "franco-guianense",
      "nome_pais" : "Guiana Francesa",
      "nome_pais_int" : "French Guiana",
      "sigla" : "GF"
    },
    { "gentilico" : "guinéu-equatoriano ou equatoguineana",
      "nome_pais" : "Guiné",
      "nome_pais_int" : "Guinea",
      "sigla" : "GN"
    },
    { "gentilico" : "guinéu-equatoriano",
      "nome_pais" : "Guiné Equatorial",
      "nome_pais_int" : "Equatorial Guinea",
      "sigla" : "GQ"
    },
    { "gentilico" : "guineense",
      "nome_pais" : "Guiné-Bissau",
      "nome_pais_int" : "Guinea-Bissau",
      "sigla" : "GW"
    },
    { "gentilico" : "haitiana",
      "nome_pais" : "Haiti",
      "nome_pais_int" : "Haiti",
      "sigla" : "HT"
    },
    { "gentilico" : "holandês",
      "nome_pais" : "Holanda",
      "nome_pais_int" : "Netherlands",
      "sigla" : "NL"
    },
    { "gentilico" : "hondurenha",
      "nome_pais" : "Honduras",
      "nome_pais_int" : "Honduras",
      "sigla" : "HN"
    },
    { "gentilico" : "hong-konguiana ou chinesa",
      "nome_pais" : "Hong Kong",
      "nome_pais_int" : "Hong Kong",
      "sigla" : "HK"
    },
    { "gentilico" : "húngara",
      "nome_pais" : "Hungria",
      "nome_pais_int" : "Hungary",
      "sigla" : "HU"
    },
    { "gentilico" : "iemenita",
      "nome_pais" : "Iêmen",
      "nome_pais_int" : "Yemen",
      "sigla" : "YE"
    },
    { "gentilico" : "da ilha bouvet",
      "nome_pais" : "Ilha Bouvet",
      "nome_pais_int" : "Bouvet Island",
      "sigla" : "BV"
    },
    { "gentilico" : "da ilha de ascensão",
      "nome_pais" : "Ilha de Ascensão",
      "nome_pais_int" : "Ascension Island",
      "sigla" : "AC"
    },
    { "gentilico" : "da ilha de clipperton",
      "nome_pais" : "Ilha de Clipperton",
      "nome_pais_int" : "Clipperton Island",
      "sigla" : "CP"
    },
    { "gentilico" : "manês",
      "nome_pais" : "Ilha de Man",
      "nome_pais_int" : "Isle of Man",
      "sigla" : "IM"
    },
    { "gentilico" : "natalense",
      "nome_pais" : "Ilha Natal",
      "nome_pais_int" : "Christmas Island",
      "sigla" : "CX"
    },
    { "gentilico" : "pitcairnense",
      "nome_pais" : "Ilha Pitcairn",
      "nome_pais_int" : "Pitcairn Islands",
      "sigla" : "PN"
    },
    { "gentilico" : "reunionense",
      "nome_pais" : "Ilha Reunião",
      "nome_pais_int" : "Réunion",
      "sigla" : "RE"
    },
    { "gentilico" : "alandês",
      "nome_pais" : "Ilhas Aland",
      "nome_pais_int" : "Åland Islands",
      "sigla" : "AX"
    },
    { "gentilico" : "caimanês",
      "nome_pais" : "Ilhas Cayman",
      "nome_pais_int" : "Cayman Islands",
      "sigla" : "KY"
    },
    { "gentilico" : "coquense",
      "nome_pais" : "Ilhas Cocos",
      "nome_pais_int" : "Cocos (Keeling) Islands",
      "sigla" : "CC"
    },
    { "gentilico" : "cookense",
      "nome_pais" : "Ilhas Cook",
      "nome_pais_int" : "Cook Islands",
      "sigla" : "CK"
    },
    { "gentilico" : "faroense",
      "nome_pais" : "Ilhas Faroes",
      "nome_pais_int" : "Faroe Islands",
      "sigla" : "FO"
    },
    { "gentilico" : "das ilhas geórgia do sul e sandwich do sul",
      "nome_pais" : "Ilhas Geórgia do Sul e Sandwich do Sul",
      "nome_pais_int" : "South Georgia & South Sandwich Islands",
      "sigla" : "GS"
    },
    { "gentilico" : "das ilhas heard e mcdonald",
      "nome_pais" : "Ilhas Heard e McDonald (Território da Austrália)",
      "nome_pais_int" : "Heard & McDonald Islands",
      "sigla" : "HM"
    },
    { "gentilico" : "malvinense",
      "nome_pais" : "Ilhas Malvinas",
      "nome_pais_int" : "Falkland Islands (Islas Malvinas)",
      "sigla" : "FK"
    },
    { "gentilico" : "norte-marianense",
      "nome_pais" : "Ilhas Marianas do Norte",
      "nome_pais_int" : "Northern Mariana Islands",
      "sigla" : "MP"
    },
    { "gentilico" : "marshallino",
      "nome_pais" : "Ilhas Marshall",
      "nome_pais_int" : "Marshall Islands",
      "sigla" : "MH"
    },
    { "gentilico" : "das ilhas menores afastadas",
      "nome_pais" : "Ilhas Menores dos Estados Unidos",
      "nome_pais_int" : "U.S. Outlying Islands",
      "sigla" : "UM"
    },
    { "gentilico" : "norfolquino",
      "nome_pais" : "Ilhas Norfolk",
      "nome_pais_int" : "Norfolk Island",
      "sigla" : "NF"
    },
    { "gentilico" : "salomônico",
      "nome_pais" : "Ilhas Salomão",
      "nome_pais_int" : "Solomon Islands",
      "sigla" : "SB"
    },
    { "gentilico" : "seichelense",
      "nome_pais" : "Ilhas Seychelles",
      "nome_pais_int" : "Seychelles",
      "sigla" : "SC"
    },
    { "gentilico" : "toquelauano",
      "nome_pais" : "Ilhas Tokelau",
      "nome_pais_int" : "Tokelau",
      "sigla" : "TK"
    },
    { "gentilico" : "turquês",
      "nome_pais" : "Ilhas Turks e Caicos",
      "nome_pais_int" : "Turks & Caicos Islands",
      "sigla" : "TC"
    },
    { "gentilico" : "virginense",
      "nome_pais" : "Ilhas Virgens (Estados Unidos)",
      "nome_pais_int" : "U.S. Virgin Islands",
      "sigla" : "VI"
    },
    { "gentilico" : "virginense",
      "nome_pais" : "Ilhas Virgens (Inglaterra)",
      "nome_pais_int" : "British Virgin Islands",
      "sigla" : "VG"
    },
    { "gentilico" : "indiano",
      "nome_pais" : "Índia",
      "nome_pais_int" : "India",
      "sigla" : "IN"
    },
    { "gentilico" : "indonésia",
      "nome_pais" : "Indonésia",
      "nome_pais_int" : "Indonesia",
      "sigla" : "ID"
    },
    { "gentilico" : "iraniano",
      "nome_pais" : "Irã",
      "nome_pais_int" : "Iran",
      "sigla" : "IR"
    },
    { "gentilico" : "iraquiana",
      "nome_pais" : "Iraque",
      "nome_pais_int" : "Iraq",
      "sigla" : "IQ"
    },
    { "gentilico" : "irlandesa",
      "nome_pais" : "Irlanda",
      "nome_pais_int" : "Ireland",
      "sigla" : "IE"
    },
    { "gentilico" : "islandesa",
      "nome_pais" : "Islândia",
      "nome_pais_int" : "Iceland",
      "sigla" : "IS"
    },
    { "gentilico" : "israelense",
      "nome_pais" : "Israel",
      "nome_pais_int" : "Israel",
      "sigla" : "IL"
    },
    { "gentilico" : "italiana",
      "nome_pais" : "Itália",
      "nome_pais_int" : "Italy",
      "sigla" : "IT"
    },
    { "gentilico" : "jamaicana",
      "nome_pais" : "Jamaica",
      "nome_pais_int" : "Jamaica",
      "sigla" : "JM"
    },
    { "gentilico" : "japonesa",
      "nome_pais" : "Japão",
      "nome_pais_int" : "Japan",
      "sigla" : "JP"
    },
    { "gentilico" : "canalina",
      "nome_pais" : "Jersey",
      "nome_pais_int" : "Jersey",
      "sigla" : "JE"
    },
    { "gentilico" : "jordaniana",
      "nome_pais" : "Jordânia",
      "nome_pais_int" : "Jordan",
      "sigla" : "JO"
    },
    { "gentilico" : "kiribatiana",
      "nome_pais" : "Kiribati",
      "nome_pais_int" : "Kiribati",
      "sigla" : "KI"
    },
    { "gentilico" : "kosovar",
      "nome_pais" : "Kosovo",
      "nome_pais_int" : "Kosovo",
      "sigla" : "XK"
    },
    { "gentilico" : "kuwaitiano",
      "nome_pais" : "Kuait",
      "nome_pais_int" : "Kuwait",
      "sigla" : "KW"
    },
    { "gentilico" : "laosiana",
      "nome_pais" : "Laos",
      "nome_pais_int" : "Laos",
      "sigla" : "LA"
    },
    { "gentilico" : "lesota",
      "nome_pais" : "Lesoto",
      "nome_pais_int" : "Lesotho",
      "sigla" : "LS"
    },
    { "gentilico" : "letão",
      "nome_pais" : "Letônia",
      "nome_pais_int" : "Latvia",
      "sigla" : "LV"
    },
    { "gentilico" : "libanesa",
      "nome_pais" : "Líbano",
      "nome_pais_int" : "Lebanon",
      "sigla" : "LB"
    },
    { "gentilico" : "liberiana",
      "nome_pais" : "Libéria",
      "nome_pais_int" : "Liberia",
      "sigla" : "LR"
    },
    { "gentilico" : "líbia",
      "nome_pais" : "Líbia",
      "nome_pais_int" : "Libya",
      "sigla" : "LY"
    },
    { "gentilico" : "liechtensteiniense",
      "nome_pais" : "Liechtenstein",
      "nome_pais_int" : "Liechtenstein",
      "sigla" : "LI"
    },
    { "gentilico" : "lituana",
      "nome_pais" : "Lituânia",
      "nome_pais_int" : "Lithuania",
      "sigla" : "LT"
    },
    { "gentilico" : "luxemburguesa",
      "nome_pais" : "Luxemburgo",
      "nome_pais_int" : "Luxembourg",
      "sigla" : "LU"
    },
    { "gentilico" : "macauense",
      "nome_pais" : "Macau",
      "nome_pais_int" : "Macau",
      "sigla" : "MO"
    },
    { "gentilico" : "macedônio",
      "nome_pais" : "Macedônia (República Yugoslava)",
      "nome_pais_int" : "Macedonia (FYROM)",
      "sigla" : "MK"
    },
    { "gentilico" : "malgaxe",
      "nome_pais" : "Madagascar",
      "nome_pais_int" : "Madagascar",
      "sigla" : "MG"
    },
    { "gentilico" : "malaia",
      "nome_pais" : "Malásia",
      "nome_pais_int" : "Malaysia",
      "sigla" : "MY"
    },
    { "gentilico" : "malauiano",
      "nome_pais" : "Malaui",
      "nome_pais_int" : "Malawi",
      "sigla" : "MW"
    },
    { "gentilico" : "maldívia",
      "nome_pais" : "Maldivas",
      "nome_pais_int" : "Maldives",
      "sigla" : "MV"
    },
    { "gentilico" : "malinesa",
      "nome_pais" : "Mali",
      "nome_pais_int" : "Mali",
      "sigla" : "ML"
    },
    { "gentilico" : "maltesa",
      "nome_pais" : "Malta",
      "nome_pais_int" : "Malta",
      "sigla" : "MT"
    },
    { "gentilico" : "marroquina",
      "nome_pais" : "Marrocos",
      "nome_pais_int" : "Morocco",
      "sigla" : "MA"
    },
    { "gentilico" : "martiniquense",
      "nome_pais" : "Martinica",
      "nome_pais_int" : "Martinique",
      "sigla" : "MQ"
    },
    { "gentilico" : "mauriciana",
      "nome_pais" : "Maurício",
      "nome_pais_int" : "Mauritius",
      "sigla" : "MU"
    },
    { "gentilico" : "mauritana",
      "nome_pais" : "Mauritânia",
      "nome_pais_int" : "Mauritania",
      "sigla" : "MR"
    },
    { "gentilico" : "maiotense",
      "nome_pais" : "Mayotte",
      "nome_pais_int" : "Mayotte",
      "sigla" : "YT"
    },
    { "gentilico" : "mexicana",
      "nome_pais" : "México",
      "nome_pais_int" : "Mexico",
      "sigla" : "MX"
    },
    { "gentilico" : "micronésia",
      "nome_pais" : "Micronésia",
      "nome_pais_int" : "Micronesia",
      "sigla" : "FM"
    },
    { "gentilico" : "moçambicana",
      "nome_pais" : "Moçambique",
      "nome_pais_int" : "Mozambique",
      "sigla" : "MZ"
    },
    { "gentilico" : "moldavo",
      "nome_pais" : "Moldova",
      "nome_pais_int" : "Moldova",
      "sigla" : "MD"
    },
    { "gentilico" : "monegasca",
      "nome_pais" : "Mônaco",
      "nome_pais_int" : "Monaco",
      "sigla" : "MC"
    },
    { "gentilico" : "mongol",
      "nome_pais" : "Mongólia",
      "nome_pais_int" : "Mongolia",
      "sigla" : "MN"
    },
    { "gentilico" : "montenegra",
      "nome_pais" : "Montenegro",
      "nome_pais_int" : "Montenegro",
      "sigla" : "ME"
    },
    { "gentilico" : "montserratiano",
      "nome_pais" : "Montserrat",
      "nome_pais_int" : "Montserrat",
      "sigla" : "MS"
    },
    { "gentilico" : "birmanês",
      "nome_pais" : "Myanma",
      "nome_pais_int" : "Myanmar (Burma)",
      "sigla" : "MM"
    },
    { "gentilico" : "namíbia",
      "nome_pais" : "Namíbia",
      "nome_pais_int" : "Namibia",
      "sigla" : "NA"
    },
    { "gentilico" : "nauruana",
      "nome_pais" : "Nauru",
      "nome_pais_int" : "Nauru",
      "sigla" : "NR"
    },
    { "gentilico" : "nepalesa",
      "nome_pais" : "Nepal",
      "nome_pais_int" : "Nepal",
      "sigla" : "NP"
    },
    { "gentilico" : "nicaraguense",
      "nome_pais" : "Nicarágua",
      "nome_pais_int" : "Nicaragua",
      "sigla" : "NI"
    },
    { "gentilico" : "nigerina",
      "nome_pais" : "Níger",
      "nome_pais_int" : "Niger",
      "sigla" : "NE"
    },
    { "gentilico" : "nigeriana",
      "nome_pais" : "Nigéria",
      "nome_pais_int" : "Nigeria",
      "sigla" : "NG"
    },
    { "gentilico" : "niueana",
      "nome_pais" : "Niue",
      "nome_pais_int" : "Niue",
      "sigla" : "NU"
    },
    { "gentilico" : "norueguesa",
      "nome_pais" : "Noruega",
      "nome_pais_int" : "Norway",
      "sigla" : "NO"
    },
    { "gentilico" : "caledônia",
      "nome_pais" : "Nova Caledônia",
      "nome_pais_int" : "New Caledonia",
      "sigla" : "NC"
    },
    { "gentilico" : "neozelandesa",
      "nome_pais" : "Nova Zelândia",
      "nome_pais_int" : "New Zealand",
      "sigla" : "NZ"
    },
    { "gentilico" : "omani",
      "nome_pais" : "Omã",
      "nome_pais_int" : "Oman",
      "sigla" : "OM"
    },
    { "gentilico" : "dos países baixos caribenhos",
      "nome_pais" : "Países Baixos Caribenhos",
      "nome_pais_int" : "Caribbean Netherlands",
      "sigla" : "BQ"
    },
    { "gentilico" : "palauense",
      "nome_pais" : "Palau",
      "nome_pais_int" : "Palau",
      "sigla" : "PW"
    },
    { "gentilico" : "palestino",
      "nome_pais" : "Palestina",
      "nome_pais_int" : "Palestine",
      "sigla" : "PS"
    },
    { "gentilico" : "zona do canal do panamá",
      "nome_pais" : "Panamá",
      "nome_pais_int" : "Panama",
      "sigla" : "PA"
    },
    { "gentilico" : "pauásia",
      "nome_pais" : "Papua-Nova Guiné",
      "nome_pais_int" : "Papua New Guinea",
      "sigla" : "PG"
    },
    { "gentilico" : "paquistanesa",
      "nome_pais" : "Paquistão",
      "nome_pais_int" : "Pakistan",
      "sigla" : "PK"
    },
    { "gentilico" : "paraguaia",
      "nome_pais" : "Paraguai",
      "nome_pais_int" : "Paraguay",
      "sigla" : "PY"
    },
    { "gentilico" : "peruana",
      "nome_pais" : "Peru",
      "nome_pais_int" : "Peru",
      "sigla" : "PE"
    },
    { "gentilico" : "franco-polinésia",
      "nome_pais" : "Polinésia Francesa",
      "nome_pais_int" : "French Polynesia",
      "sigla" : "PF"
    },
    { "gentilico" : "polonesa",
      "nome_pais" : "Polônia",
      "nome_pais_int" : "Poland",
      "sigla" : "PL"
    },
    { "gentilico" : "portorriquenha",
      "nome_pais" : "Porto Rico",
      "nome_pais_int" : "Puerto Rico",
      "sigla" : "PR"
    },
    { "gentilico" : "portuguesa",
      "nome_pais" : "Portugal",
      "nome_pais_int" : "Portugal",
      "sigla" : "PT"
    },
    { "gentilico" : "catarense",
      "nome_pais" : "Qatar",
      "nome_pais_int" : "Qatar",
      "sigla" : "QA"
    },
    { "gentilico" : "queniano",
      "nome_pais" : "Quênia",
      "nome_pais_int" : "Kenya",
      "sigla" : "KE"
    },
    { "gentilico" : "quirguiz",
      "nome_pais" : "Quirguistão",
      "nome_pais_int" : "Kyrgyzstan",
      "sigla" : "KG"
    },
    { "gentilico" : "centro-africana",
      "nome_pais" : "República Centro-Africana",
      "nome_pais_int" : "Central African Republic",
      "sigla" : "CF"
    },
    { "gentilico" : "congolesa",
      "nome_pais" : "República Democrática do Congo",
      "nome_pais_int" : "Congo (DRC)",
      "sigla" : "CD"
    },
    { "gentilico" : "dominicana",
      "nome_pais" : "República Dominicana",
      "nome_pais_int" : "Dominican Republic",
      "sigla" : "DO"
    },
    { "gentilico" : "tcheco",
      "nome_pais" : "República Tcheca",
      "nome_pais_int" : "Czech Republic",
      "sigla" : "CZ"
    },
    { "gentilico" : "romena",
      "nome_pais" : "Romênia",
      "nome_pais_int" : "Romania",
      "sigla" : "RO"
    },
    { "gentilico" : "ruandesa",
      "nome_pais" : "Ruanda",
      "nome_pais_int" : "Rwanda",
      "sigla" : "RW"
    },
    { "gentilico" : "russa",
      "nome_pais" : "Rússia (antiga URSS) - Federação Russa",
      "nome_pais_int" : "Russia",
      "sigla" : "RU"
    },
    { "gentilico" : "saariano",
      "nome_pais" : "Saara Ocidental",
      "nome_pais_int" : "Western Sahara",
      "sigla" : "EH"
    },
    { "gentilico" : "pedro-miquelonense",
      "nome_pais" : "Saint-Pierre e Miquelon",
      "nome_pais_int" : "St. Pierre & Miquelon",
      "sigla" : "PM"
    },
    { "gentilico" : "samoana",
      "nome_pais" : "Samoa Americana",
      "nome_pais_int" : "American Samoa",
      "sigla" : "AS"
    },
    { "gentilico" : "samoano",
      "nome_pais" : "Samoa Ocidental",
      "nome_pais_int" : "Samoa",
      "sigla" : "WS"
    },
    { "gentilico" : "samarinês",
      "nome_pais" : "San Marino",
      "nome_pais_int" : "San Marino",
      "sigla" : "SM"
    },
    { "gentilico" : "helenense",
      "nome_pais" : "Santa Helena",
      "nome_pais_int" : "St. Helena",
      "sigla" : "SH"
    },
    { "gentilico" : "santa-lucense",
      "nome_pais" : "Santa Lúcia",
      "nome_pais_int" : "St. Lucia",
      "sigla" : "LC"
    },
    { "gentilico" : "são-bartolomeense",
      "nome_pais" : "São Bartolomeu",
      "nome_pais_int" : "St. Barthélemy",
      "sigla" : "BL"
    },
    { "gentilico" : "são-cristovense",
      "nome_pais" : "São Cristóvão e Névis",
      "nome_pais_int" : "St. Kitts & Nevis",
      "sigla" : "KN"
    },
    { "gentilico" : "são-martinhense",
      "nome_pais" : "São Martim",
      "nome_pais_int" : "St. Martin",
      "sigla" : "MF"
    },
    { "gentilico" : "são-martinhense",
      "nome_pais" : "São Martinho",
      "nome_pais_int" : "Sint Maarten",
      "sigla" : "SX"
    },
    { "gentilico" : "são-tomense",
      "nome_pais" : "São Tomé e Príncipe",
      "nome_pais_int" : "São Tomé & Príncipe",
      "sigla" : "ST"
    },
    { "gentilico" : "sao-vicentino",
      "nome_pais" : "São Vicente e Granadinas",
      "nome_pais_int" : "St. Vincent & Grenadines",
      "sigla" : "VC"
    },
    { "gentilico" : "senegalesa",
      "nome_pais" : "Senegal",
      "nome_pais_int" : "Senegal",
      "sigla" : "SN"
    },
    { "gentilico" : "leonesa",
      "nome_pais" : "Serra Leoa",
      "nome_pais_int" : "Sierra Leone",
      "sigla" : "SL"
    },
    { "gentilico" : "sérvia",
      "nome_pais" : "Sérvia",
      "nome_pais_int" : "Serbia",
      "sigla" : "RS"
    },
    { "gentilico" : "síria",
      "nome_pais" : "Síria",
      "nome_pais_int" : "Syria",
      "sigla" : "SY"
    },
    { "gentilico" : "somali",
      "nome_pais" : "Somália",
      "nome_pais_int" : "Somalia",
      "sigla" : "SO"
    },
    { "gentilico" : "cingalesa",
      "nome_pais" : "Sri Lanka",
      "nome_pais_int" : "Sri Lanka",
      "sigla" : "LK"
    },
    { "gentilico" : "suazi",
      "nome_pais" : "Suazilândia",
      "nome_pais_int" : "Swaziland",
      "sigla" : "SZ"
    },
    { "gentilico" : "sudanesa",
      "nome_pais" : "Sudão",
      "nome_pais_int" : "Sudan",
      "sigla" : "SD"
    },
    { "gentilico" : "sul-sudanês",
      "nome_pais" : "Sudão do Sul",
      "nome_pais_int" : "South Sudan",
      "sigla" : "SS"
    },
    { "gentilico" : "sueca",
      "nome_pais" : "Suécia",
      "nome_pais_int" : "Sweden",
      "sigla" : "SE"
    },
    { "gentilico" : "suíça",
      "nome_pais" : "Suíça",
      "nome_pais_int" : "Switzerland",
      "sigla" : "CH"
    },
    { "gentilico" : "surinamesa",
      "nome_pais" : "Suriname",
      "nome_pais_int" : "Suriname",
      "sigla" : "SR"
    },
    { "gentilico" : "svalbardense",
      "nome_pais" : "Svalbard",
      "nome_pais_int" : "Svalbard & Jan Mayen",
      "sigla" : "SJ"
    },
    { "gentilico" : "tadjique",
      "nome_pais" : "Tadjiquistão",
      "nome_pais_int" : "Tajikistan",
      "sigla" : "TJ"
    },
    { "gentilico" : "tailandesa",
      "nome_pais" : "Tailândia",
      "nome_pais_int" : "Thailand",
      "sigla" : "TH"
    },
    { "gentilico" : "taiwanês",
      "nome_pais" : "Taiwan",
      "nome_pais_int" : "Taiwan",
      "sigla" : "TW"
    },
    { "gentilico" : "tanzaniana",
      "nome_pais" : "Tanzânia",
      "nome_pais_int" : "Tanzania",
      "sigla" : "TZ"
    },
    { "gentilico" : "do território britânico do oceano índico",
      "nome_pais" : "Território Britânico do Oceano índico",
      "nome_pais_int" : "British Indian Ocean Territory",
      "sigla" : "IO"
    },
    { "gentilico" : "do territórios do sul da frança",
      "nome_pais" : "Territórios do Sul da França",
      "nome_pais_int" : "French Southern Territories",
      "sigla" : "TF"
    },
    { "gentilico" : "timorense",
      "nome_pais" : "Timor-Leste",
      "nome_pais_int" : "Timor-Leste",
      "sigla" : "TL"
    },
    { "gentilico" : "togolesa",
      "nome_pais" : "Togo",
      "nome_pais_int" : "Togo",
      "sigla" : "TG"
    },
    { "gentilico" : "tonganesa",
      "nome_pais" : "Tonga",
      "nome_pais_int" : "Tonga",
      "sigla" : "TO"
    },
    { "gentilico" : "trinitário-tobagense",
      "nome_pais" : "Trinidad e Tobago",
      "nome_pais_int" : "Trinidad & Tobago",
      "sigla" : "TT"
    },
    { "gentilico" : "tristanita",
      "nome_pais" : "Tristão da Cunha",
      "nome_pais_int" : "Tristan da Cunha",
      "sigla" : "TA"
    },
    { "gentilico" : "tunisiana",
      "nome_pais" : "Tunísia",
      "nome_pais_int" : "Tunisia",
      "sigla" : "TN"
    },
    { "gentilico" : "turcomana",
      "nome_pais" : "Turcomenistão",
      "nome_pais_int" : "Turkmenistan",
      "sigla" : "TM"
    },
    { "gentilico" : "turca",
      "nome_pais" : "Turquia",
      "nome_pais_int" : "Turkey",
      "sigla" : "TR"
    },
    { "gentilico" : "tuvaluana",
      "nome_pais" : "Tuvalu",
      "nome_pais_int" : "Tuvalu",
      "sigla" : "TV"
    },
    { "gentilico" : "ucraniana",
      "nome_pais" : "Ucrânia",
      "nome_pais_int" : "Ukraine",
      "sigla" : "UA"
    },
    { "gentilico" : "ugandense",
      "nome_pais" : "Uganda",
      "nome_pais_int" : "Uganda",
      "sigla" : "UG"
    },
    { "gentilico" : "uruguaia",
      "nome_pais" : "Uruguai",
      "nome_pais_int" : "Uruguay",
      "sigla" : "UY"
    },
    { "gentilico" : "uzbeque",
      "nome_pais" : "Uzbequistão",
      "nome_pais_int" : "Uzbekistan",
      "sigla" : "UZ"
    },
    { "gentilico" : "vanuatuense",
      "nome_pais" : "Vanuatu",
      "nome_pais_int" : "Vanuatu",
      "sigla" : "VU"
    },
    { "gentilico" : "vaticano",
      "nome_pais" : "Vaticano",
      "nome_pais_int" : "Vatican City",
      "sigla" : "VA"
    },
    { "gentilico" : "venezuelana",
      "nome_pais" : "Venezuela",
      "nome_pais_int" : "Venezuela",
      "sigla" : "VE"
    },
    { "gentilico" : "vietnamita",
      "nome_pais" : "Vietnã",
      "nome_pais_int" : "Vietnam",
      "sigla" : "VN"
    },
    { "gentilico" : "wallis-futunense",
      "nome_pais" : "Wallis e Futuna",
      "nome_pais_int" : "Wallis & Futuna",
      "sigla" : "WF"
    },
    { "gentilico" : "zambiana",
      "nome_pais" : "Zâmbia",
      "nome_pais_int" : "Zambia",
      "sigla" : "ZM"
    },
    { "gentilico" : "zimbabuana",
      "nome_pais" : "Zimbábue",
      "nome_pais_int" : "Zimbabwe",
      "sigla" : "ZW"
    }
  ];
  
  $scope.errorMessage = false;
  $scope.verifyPassword = function (data1, data2){
      if(data1 != data2){
          $scope.usuario.SenhaConfirma = "";
          $scope.usuario.Senha = "";
          $scope.errorMessage = true;
      }else{
          $scope.errorMessage = false;
      }
  }

//payment mode
  $scope.usuario = {Nome:'Camaleão Ferreira', 
                    Endereco:'Rua 13 de Maio, 123',
                    Pais: 'BR', 
                    Cidade: 'São Paulo',
                    Cep: '04674-080',
                    Telefone: '(11) 95610-0878',
                    ValorCompra: 1250};
  
  //data de vencimento do boleto
  $scope.dateToday = new Date();
  $scope.date = new Date();
  $scope.date.setDate($scope.date.getDate() + 7);

}]);

  //controller ==> shop-ecommerce.html
app.controller('shopCatalogController',['$scope', '$filter', '$http', function ($scope, $filter, $http){


  $scope.produtosSecao = [{
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '1'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '2'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '3'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '4'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '5'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '6'
      },{
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '7'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '8'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '9'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '10'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '11'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '12'
      },{
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '13'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '14'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '15'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '16'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '17'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '18'
      },{
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '19'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '20'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '21'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '22'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner1.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '23'
      }, {
          img: 'C:/Users/edward.silva/Documents/pi4/WebContent/resources/images/banner2.jpg',
          titulo: 'Classico',
          subtitulo: 'White',
          preco: '24'
      }];


  $scope.currentpage = 0;
  $scope.pageSize = 9;
  $scope.numberOfPages = Math.ceil($scope.produtosSecao.length/$scope.pageSize) - 1;

  $scope.prevPage = function (){
    if($scope.currentpage > 0){
      $('#listaProdutos ul li span:first').show();
      $scope.currentpage = $scope.currentpage - 1;
        if($scope.currentpage < $scope.numberOfPages)
          $('#listaProdutos ul li span:last').show();
    }
    if($scope.currentpage == 0){
      $('#listaProdutos ul li span:first').hide();
    }
  }

  $scope.fwdPage = function (){
    if($scope.currentpage < $scope.numberOfPages){
      $('#listaProdutos ul li span:last').show();
        $scope.currentpage = $scope.currentpage + 1;
          if($scope.currentpage > 0)
            $('#listaProdutos ul li span:first').show();
    }
    if($scope.currentpage == $scope.numberOfPages){
      $('#listaProdutos ul li span:last').hide();
    }
  };
}]);

app.filter('startFrom', function() {
  return function(input, start) {
      start = +start; //parse to int
      return input.slice(start).length > 0 ? input.slice(start) : "" ;
  }
});

app.controller('checkOutController', ['$scope', '$filter', '$http', function ($scope, $filter, $http){
  
  $scope.carrinhoCompras = [{
    Quantidade : 1,
    Nome: 'Caneca São Paulo FC',
    Preco : 35
  },{
    Quantidade : 2,
    Nome: 'Caneca Seleção Brasileira',
    Preco : 15
  }];
  $scope.messageEmptyCart = $scope.carrinhoCompras.length > 0;

  $scope.totalCarrinho = function (){
    var array = $scope.carrinhoCompras;
    var total = 0;
    array.forEach(function(produto) {
      total += (produto.Quantidade * produto.Preco);
    });
    return total;
  }

  $scope.removerProdutoCarrinho = function(produto){
    angular.forEach($scope.carrinhoCompras, function (item, i) {
        if (item.Nome === produto.Nome) {
            $scope.carrinhoCompras.splice(i, 1);
        }
    });
    $scope.messageEmptyCart = $scope.carrinhoCompras.length > 0;
  }
}]);