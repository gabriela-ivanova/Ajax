(function () {

    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('articlethird/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

    };

    ArticlethirdController = {
        init: _templateBootstrap
    };

})();
