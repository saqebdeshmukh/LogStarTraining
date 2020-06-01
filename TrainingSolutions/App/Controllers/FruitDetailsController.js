app.controller('FruitDetailsController', function ($scope, $rootScope, $routeParams, $localStorage) {



    function findId(data, idToLookFor) {
        //debugger;
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == idToLookFor) {
                return (data[i]);
            }
        }
    }


    $scope.OpenCart = function () {
        $("#myModal").modal();
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
    if (!$localStorage.CartDataStorege)
        $scope.CartData = [];
    else
        $scope.CartData = $localStorage.CartDataStorege;

    $scope.AddCart = function () {
        debugger;
        
        //alert(angular.toJson(item));


        for (var i = 0; i < $scope.CartData.length; i++) {
            //if (Id == $scope.CartData[i].Id)
            //if (!$scope.CartData[i].priceDetails && $scope.Priceobj) {
            if ($scope.CartData[i].id == $routeParams.Id && $scope.CartData[i].priceDetails.Qty == $scope.Priceobj.Qty) {
                    alert($scope.CartData[i].name + " with " + $scope.Priceobj.Qty + " already in cart")
                    return
                }
            //}
            //else {
               
            //}
        }
        //item.priceDetails = $scope.Priceobj;

        $scope.CartData.push({
            id: item.id,
            name: item.name,
            description: item.description,
            photoUrl: item.photoUrl,
            priceDetails: { Price: $scope.Priceobj.Price, Qty: $scope.Priceobj.Qty }
        });

        $localStorage.CartDataStorege = $scope.CartData
        $scope.count = $scope.CartData.length;
        alert("Your Fruit added in Cart");

    }

    $scope.count = $scope.CartData.length;

    $scope.RemoveCart = function (Id) {
        if (confirm("Do you want to remove cart Item")) {
            $scope.CartData.splice(Id, 1);
            $localStorage.CartDataStorege = $scope.CartData
            $scope.count = $scope.CartData.length;
        }
    }
});