(function () {
//ще съдържа всички html ел., които взимаме с getElementById() (document object model)

    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('articlefirst/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

    };

    ArticlefirstController = {
        init: _templateBootstrap
    };


})();
