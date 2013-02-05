angularApp.directive('matcher', [function(){
    return {
        require: 'ngModel',
        link: function(scope, elm, attr, ctrl){
            var form_name = $(elm).parents("form").attr("name");
            var params = eval("(" + attr.matcher + ")");
            var field_to_match = params.field_to_match;
            var error_name = params.error_name;
            ctrl.$parsers.unshift(function(viewValue, $scope){
                viewValue === eval("scope." + form_name + "." + field_to_match + ".$viewValue")
                  ? ctrl.$setValidity(error_name, true)
                  : ctrl.$setValidity(error_name, false);
            });
        }
    };
}]);
