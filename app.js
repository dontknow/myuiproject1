(function() {
    var app = angular.module('store', []);
    
    app.controller('StoreController', function() {
        this.product = gem;
    });
    
    var gem = {
        name: "Kohinoor",
        price: 2.95,
        description: 'Not a gem'
    }
})();

