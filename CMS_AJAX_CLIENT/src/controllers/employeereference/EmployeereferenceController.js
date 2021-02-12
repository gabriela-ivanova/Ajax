(function () {
//ще съдържа всички html ел., които взимаме с getElementById() (document object model)
    var $dom = {};
    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('employeereference/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

        $dom.dataContent = document.getElementById('data-content');

        Api.http.employee.getAll((responseCollection) => {

            var employeeCollection = responseCollection[Object.keys(responseCollection)[1]];

            for (var element of employeeCollection) {

                if (element['email'] == localStorage.getItem("_email")) {
                    $dom.dataContent.innerHTML += `<span id  = 'data-position'>Position : </span> ${element['position']} <br>
                                                    <span id = 'data-company'>Company   : </span> ${element['company']} <br><br>`;
                };
            };
        });
    };

    //когато няма var отпред конструкторът е глобално дефиниран иначе е локално
    EmployeereferenceController = {
        init: _templateBootstrap
    };

})();
