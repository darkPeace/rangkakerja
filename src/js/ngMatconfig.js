angular.module('themeConfig', ['ngMaterial'])
.config(['$mdThemingProvider', function(material) {
	material
    .theme('light')
	.primaryPalette('grey',{'default': '900'})
	.accentPalette('grey',{'default': '700'})
    ;

    material
    .theme('default')
    .dark();

    material.setDefaultTheme('default');
    material.alwaysWatchTheme(false);

    material.enableBrowserColor({
    	palette: 'accent',
    	hue: '200',
    })
    /*
    .primaryPalette('blue')
    .accentPalette('teal')
    .warnPalette('red')
    .backgroundPalette('grey');*/
}]);