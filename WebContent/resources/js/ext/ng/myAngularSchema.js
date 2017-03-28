var app = angular.module('app', []);
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