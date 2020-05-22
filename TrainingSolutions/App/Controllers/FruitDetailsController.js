app.controller('FruitDetailsController', function ($scope, $rootScope, $routeParams) {



    function findId(data, idToLookFor) {
        //debugger;
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == idToLookFor) {
                return (data[i]);
            }
        }
    }
    $scope.PriceD;
    var item = findId($rootScope.Fruit, $routeParams.Id);
    console.log(item);
    $scope.priceDetails = item.priceDetails;
    $scope.Priceobj = item.priceDetails[0];
    $scope.PriceD = item.priceDetails[0].Price;

    $scope.name = item.name;
    $scope.description = item.description;
    $scope.photoUrl = item.photoUrl;


    $scope.ChangeQty = function () {
        //debugger;
        $scope.PriceD = $scope.Priceobj.Price;
    }

    $rootScope.CartData = [];

    $scope.AddCart = function () {
        debugger;
        
        //alert(angular.toJson(item));


        for (var i = 0; i < $rootScope.CartData.length; i++) {
            if ($rootScope.CartData[i].priceDetails.Qty == $scope.Priceobj.Qty) {
                alert($rootScope.CartData[i].name + " with " + $scope.Priceobj.Qty + " already in cart")
                return
            }
            //else {
               
            //}
        }
        //item.priceDetails = $scope.Priceobj;

        $rootScope.CartData.push({
            id: item.id,
            name: item.name,
            description: item.description,
            photoUrl: item.photoUrl,
            priceDetails: { Price: $scope.Priceobj.Price, Qty: $scope.Priceobj.Qty }});
        alert("Your Fruit added in Cart");

    }
});