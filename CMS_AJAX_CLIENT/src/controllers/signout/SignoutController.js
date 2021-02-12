(function () {

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('signout/template.html', function (result) {
            htmlPlaceholder.innerHTML = result;
            _contructor();
        });
    };

    var _contructor = () => {

    }

    SignoutController = {
        init: _templateBootstrap
    };

})();




