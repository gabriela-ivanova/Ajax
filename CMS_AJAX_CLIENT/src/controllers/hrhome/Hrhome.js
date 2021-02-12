(function () {

    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('hrhome/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

    };

    HrhomeController = {
        init: _templateBootstrap
    };

})();

 