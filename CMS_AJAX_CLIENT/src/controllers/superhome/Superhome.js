(function () {

    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('superhome/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

    };

    SuperhomeController = {
        init: _templateBootstrap
    };

})();

 