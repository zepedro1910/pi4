cadastroModule.config(function($mdDateLocaleProvider) {
	
	$mdDateLocaleProvider.shortMonths = ['Jan', 'Fev', 'Mar','Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
	$mdDateLocaleProvider.firstRenderableDate = new Date(1776, 6, 4);
	
});