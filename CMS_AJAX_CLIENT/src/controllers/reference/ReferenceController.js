(function () {

    var $dom = {};

    var dynamicPositionTemplate = (templateItem) => {

        var id           = templateItem.id           ;
        var title        = templateItem.title        ;
        var company_name = templateItem.company_name ;

        return `<div id="reference" class = "flex-reference">
                <span id   = "company" class = "company-title"> ${company_name} </span>
                <span id   = "title"   class = "position-title" data-id = "${id}">  ${title} </span>
                </div>`;
    };

    var PositionContentTemplate = (templateItem) => {

        var fname   = templateItem.fname   ;
        var lname   = templateItem.lname   ;
        var email   = templateItem.email   ;
        var message = templateItem.message ;
        var id      = templateItem.id      ;

        return `<div    class   = "position-container" 
                        data-id = "${id}">
                <div id = "content-container">
                    <p id = "position-content">${fname} ${lname}, <br> ${email} <br> ${message}</p>
                </div>  
            </div>`;
    };

    var populatePositionCollection = (responseCollection) => {

        $dom.PositionPlaceholder.innerHTML = Template.collection.build(PositionContentTemplate, responseCollection);
    }

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('reference/template.html', function (result) {
            htmlPlaceholder.innerHTML = result;
            _contructor();
        });
    };

    var _contructor = () => {

        $dom.PositionPlaceholder   = document.getElementById("position--content")    ;
        $dom.contentPlaceholder    = document.getElementById("position-placeholder") ;
        $dom.listAllPosition       = document.getElementById("get-all-position")     ;
        $dom.moreInformationAction = document.getElementById('action-button')        ;


        Api.http.jobOffer.getAll((responseCollection) => {

            $dom.contentPlaceholder.innerHTML = Template.collection.build(dynamicPositionTemplate, responseCollection);

            $("#error-message").hide();
            $("#action-button").hide();
   
            $dom.contentPlaceholder.addEventListener('click', function (e) {

                if (!e.target.dataset.id)
                    return

                $(e.target).removeClass('position-title')                 ;
                $(e.target).addClass("show")                              ;
                if ('.show') {

                    $(e.target).show()                                    ;
                    $('.position-title').hide()                           ;
                    $('#placeholder').parent().prepend($('#placeholder')) ;
                }

                $('.company-title').hide()                                ;


                Api.http.employee.byPosition(e.target.dataset.id, function (data) {     //викаме резултатите на самата страница

                    var resultArray = Object.values(data)[1];
                    let positionArray = resultArray.map(({ position }) => ({position}))
                    var getPosition = positionArray.find(element => element);

                    var arrayToObject = Object.assign({}, resultArray);

                    if (getPosition === undefined || getPosition === null) {

                        $("#error-message").show()                       ;
                        $("#action-button").hide()                       ;
                    }

                    if (getPosition) {

                        $("#error-message").hide();

                        localStorage.setItem("_employee_data", JSON.stringify(arrayToObject));

                        var resultPosition = Object.values(getPosition)[0];


                        $("#action-button").show();

                        localStorage.setItem("_candidacy", resultPosition);
                    }
                });
            });

            $dom.moreInformationAction.addEventListener('click', function () {
                eval(`CandidacyController.init(contentPlaceholder)`);
            });

            $dom.listAllPosition.addEventListener('click', function () {
                Api.http.jobOffer.getAll((responseCollection) => {
                    $dom.contentPlaceholder.innerHTML = Template.collection.build(dynamicPositionTemplate, responseCollection);
                    $('#error-message').hide();
                    $('#action-button').hide();
                });
            });
        });
    };

    ReferenceController = {
        init: _templateBootstrap
    };

})();







