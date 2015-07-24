(function() {
    var app = angular.module('store', []);
    
    app.controller('StoreController', function() {
        this.products = gems;
    });
    
    var gems = [{
        name: "Kohinoor",
        price: 2.95,
        description: 'Not a gem',
        canPurchase: false,
        soldOut: true
    },
                {
        name: "Quartz",
        price: 149.95,
        description: 'Not a gem',
        canPurchase: true,
        soldOut: false
    },
                {
        name: "Ruby",
        price: 49.95,
        description: 'Not a gem',
        canPurchase: false,
        soldOut: false
    }]
})();

