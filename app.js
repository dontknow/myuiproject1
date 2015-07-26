(function() {
    var app = angular.module('store', []);
    
    app.controller('StoreController',['$http', function($http) {
        var store = this;
        
        store.products = [];
        
        $http.get('products.json').success(function(data) {
            store.products = data;
        });        
    }]);
    
    app.controller('PanelController', function() {
        this.tab = null;
        
        this.selectTab = function(tabValue) {
            this.tab = tabValue;
        };
        
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
    
    app.controller('ReviewController', function() {
        this.review = {};
        
        this.submitThisReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    
    app.directive('productTitle', function() {
        return {
            restrict: 'E',
            templateUrl: 'product-title.html'
        };
    });
    
   
})();

