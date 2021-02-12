(function () {

    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('employerhome/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

    };

    EmployerhomeController = {
        init: _templateBootstrap
    };

})();

 