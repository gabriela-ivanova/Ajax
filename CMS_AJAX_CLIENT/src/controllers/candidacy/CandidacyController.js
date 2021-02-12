(function () {
//ще съдържа всички html ел., които взимаме с getElementById() (document object model)
    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('candidacy/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

        $dom.candidacyPosition  = document.getElementById('employee-candidacy')   ;
        $dom.candidacyWrapper   = document.getElementById('candidacy--wrapper')   ;
        $dom.getAllCandidate    = document.getElementById('list-all-candidate')   ;
        $dom.candidacyAction    = document.getElementById('candidacy-action')     ;

        if (localStorage.getItem("_candidacy") != undefined || localStorage.getItem("_candidacy") !== null) {
            $dom.candidacyPosition.innerHTML = localStorage.getItem("_candidacy");
        }

        var obj = JSON.parse(localStorage.getItem("_employee_data"))

        for (var key in obj) {
            var objectKeys = obj[key] ;
            var id = obj[key]['id']   ;
            $dom.candidacyWrapper.innerHTML += `<li class="candidate-name" data-id="${id}">${objectKeys['fname']} ${objectKeys['lname']}<br>
                                                <span class = "candidate-info">#    ${objectKeys['company']}# ${objectKeys['phone']}# ${objectKeys['email']}# ${objectKeys['nationality']}#
                                                                                    ${objectKeys['birthdate']}# ${objectKeys['drivelicense']}# ${objectKeys['workexperience']}#
                                                                                    ${objectKeys['education']}# ${objectKeys['language']}# ${objectKeys['skill']}# ${objectKeys['message']}</span><br>
                                                </li>` ;

            $('.candidate-info').hide()   ;
            $('#candidacy-action').hide() ;
            $dom.candidacyWrapper.addEventListener('click', function (e) {

                $(e.target).removeClass('candidate-name')   ;
                $(e.target).addClass('show-candidate-name') ;

                if ('.show-candidate-name') {
                    $(e.target).show();
                    $('.candidate-name').hide()                            ;
                    $('#candidacy-action').show()                          ;

                    var candidateInfo = e.target.textContent               ;   
                    localStorage.setItem("_candidate_info", candidateInfo) ;
                };
            });
        };

        $dom.getAllCandidate.addEventListener('click', function () {
            eval(`CandidacyController.init(contentPlaceholder)`);
        });

        if (Auth.isHR() || Auth.isSuper()) {

            $dom.candidacyAction.addEventListener('click', function () {
                eval(`EmployeeinfoController.init(contentPlaceholder)`);
            });
        }

        if (Auth.isEmployer()) {

            $dom.candidacyAction.addEventListener('click', function () {
                eval(`EmployerreferenceController.init(contentPlaceholder)`);
            });
        }
    };

    //когато няма var отпред конструкторът е глобално дефиниран, иначе е локално
    CandidacyController = {
        init: _templateBootstrap
    };

})();

 