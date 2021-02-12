(function () {

    var $dom = {};
    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('employeeinfo/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

        $dom.appliedPosition               = document.getElementById('candidate-position')        ;
        $dom.candidateCompany              = document.getElementById('candidate-company')         ;

        $dom.candidateFullNameInput        = document.getElementById('candidate-fname')           ;
        $dom.candidatePhone                = document.getElementById('candidate-phone')           ;
        $dom.candidateEmail                = document.getElementById('candidate-email-input')     ;
        
        $dom.candidateNationality          = document.getElementById('candidate-nationality')     ;
        $dom.candidateDateOfBirth          = document.getElementById('candidate-date-of-birth')   ;
        $dom.candidateDriveLicense         = document.getElementById('candidate-drive-license')   ;
        $dom.candidateWorkExperience       = document.getElementById('candidate-work-experience') ;
        $dom.candidateEducation            = document.getElementById('candidate-education')       ;
        $dom.candidateLanguage             = document.getElementById('candidate-language')        ;
        $dom.candidateSkill                = document.getElementById('candidate-skill')           ;
 
        $dom.candidateMessageContent       = document.getElementById('message-content')           ;

        $dom.candidateStatus               = document.getElementById('candidate-status')          ;

        $dom.approvedForInterview          = document.getElementById('appr-int')                  ;
        $dom.interviewed                   = document.getElementById('interviewed')               ;
        $dom.approved                      = document.getElementById('approved')                  ;
        $dom.rejected                      = document.getElementById('rejected')                  ;

        $dom.sendAction                    = document.getElementById('send-button')               ;

        if (localStorage.getItem("_candidate_info") != undefined || localStorage.getItem("_candidate_info") !== null &&
                localStorage.getItem("_candidacy") != undefined || localStorage.getItem("_candidacy") !== null) {

            $dom.appliedPosition.innerHTML         = localStorage.getItem("_candidacy")                       ;
            $dom.candidateFullNameInput.innerHTML  = (localStorage.getItem("_candidate_info")).split('#')[0]  ;
            $dom.candidateCompany.innerHTML        = (localStorage.getItem("_candidate_info")).split('#')[1]  ;
            $dom.candidatePhone.innerHTML          = (localStorage.getItem("_candidate_info")).split('#')[2]  ;
            $dom.candidateEmail.value              = (localStorage.getItem("_candidate_info")).split('#')[3]  ;
            $dom.candidateNationality.innerHTML    = (localStorage.getItem("_candidate_info")).split('#')[4]  ;
            $dom.candidateDateOfBirth.innerHTML    = (localStorage.getItem("_candidate_info")).split('#')[5]  ;
            $dom.candidateDriveLicense.innerHTML   = (localStorage.getItem("_candidate_info")).split('#')[6]  ;
            $dom.candidateWorkExperience.innerHTML = (localStorage.getItem("_candidate_info")).split('#')[7]  ;
            $dom.candidateEducation.innerHTML      = (localStorage.getItem("_candidate_info")).split('#')[8]  ;
            $dom.candidateLanguage.innerHTML       = (localStorage.getItem("_candidate_info")).split('#')[9]  ;
            $dom.candidateSkill.innerHTML          = (localStorage.getItem("_candidate_info")).split('#')[10] ;
            $dom.candidateMessageContent.innerHTML = (localStorage.getItem("_candidate_info")).split('#')[11] ;
        }

        Api.http.status.getAll((responseCollection) => {

            Api.http.status.get((dataCollection) => {

                var responseCollection = dataCollection[Object.keys(dataCollection)[1]];
                for (var element of responseCollection) {

                    if (element['email'] == (localStorage.getItem("_candidate_info")).split('#')[3] &&
                            element['position'] == localStorage.getItem("_candidacy")) {

                        $dom.candidateStatus.innerHTML = element['status'];
                    }
                }
            });

            $dom.approvedForInterview.addEventListener('click', function () {

                var arrayCollection = responseCollection[Object.keys(responseCollection)[1]] ;
                var resultArray = arrayCollection[Object.keys(arrayCollection)[0]]           ;
                var getResult = resultArray.title                                            ;
                $dom.candidateStatus.innerHTML = getResult                                   ;
              
                    var request = {

                    status:          getResult                                               ,
                    position:        localStorage.getItem("_candidacy")                      ,
                    fullname:       (localStorage.getItem("_candidate_info")).split('#')[0]  ,
                    company:        (localStorage.getItem("_candidate_info")).split('#')[1]  ,
                    phone:          (localStorage.getItem("_candidate_info")).split('#')[2]  ,
                    email:          (localStorage.getItem("_candidate_info")).split('#')[3]  ,
                    nationality:    (localStorage.getItem("_candidate_info")).split('#')[4]  ,
                    birthdate:      (localStorage.getItem("_candidate_info")).split('#')[5]  ,
                    drivelicense:   (localStorage.getItem("_candidate_info")).split('#')[6]  ,
                    workexperience: (localStorage.getItem("_candidate_info")).split('#')[7]  ,
                    education:      (localStorage.getItem("_candidate_info")).split('#')[8]  ,
                    language:       (localStorage.getItem("_candidate_info")).split('#')[9]  ,
                    skill:          (localStorage.getItem("_candidate_info")).split('#')[10] ,
                    message:        (localStorage.getItem("_candidate_info")).split('#')[11] ,
                };

                Api.http.status.insert(request, (result) => {
                    Api.http.status.update(request, (result) => {

                    });
                });
            });

            $dom.interviewed.addEventListener('click', function () {

                var arrayCollection = responseCollection[Object.keys(responseCollection)[1]] ;
                var resultArray = arrayCollection[Object.keys(arrayCollection)[1]]           ;
                var getResult = resultArray.title                                            ;
                $dom.candidateStatus.innerHTML = getResult                                   ;

                    var request = {

                    status:          getResult                                               ,
                    position:        localStorage.getItem("_candidacy")                      ,
                    fullname:       (localStorage.getItem("_candidate_info")).split('#')[0]  ,
                    company:        (localStorage.getItem("_candidate_info")).split('#')[1]  ,
                    phone:          (localStorage.getItem("_candidate_info")).split('#')[2]  ,
                    email:          (localStorage.getItem("_candidate_info")).split('#')[3]  ,
                    nationality:    (localStorage.getItem("_candidate_info")).split('#')[4]  ,
                    birthdate:      (localStorage.getItem("_candidate_info")).split('#')[5]  ,
                    drivelicense:   (localStorage.getItem("_candidate_info")).split('#')[6]  ,
                    workexperience: (localStorage.getItem("_candidate_info")).split('#')[7]  ,
                    education:      (localStorage.getItem("_candidate_info")).split('#')[8]  ,
                    language:       (localStorage.getItem("_candidate_info")).split('#')[9]  ,
                    skill:          (localStorage.getItem("_candidate_info")).split('#')[10] ,
                    message:        (localStorage.getItem("_candidate_info")).split('#')[11] ,
                };

                Api.http.status.insert(request, (result) => {
                    Api.http.status.update(request, (result) => {

                    });
                });
            });

            $dom.approved.addEventListener('click', function () {

                var arrayCollection = responseCollection[Object.keys(responseCollection)[1]] ;
                var resultArray = arrayCollection[Object.keys(arrayCollection)[2]]           ;
                var getResult = resultArray.title                                            ;
                $dom.candidateStatus.innerHTML = getResult                                   ;          
                
                    var request = {

                    status:          getResult                                               ,
                    position:        localStorage.getItem("_candidacy")                      ,
                    fullname:       (localStorage.getItem("_candidate_info")).split('#')[0]  ,
                    company:        (localStorage.getItem("_candidate_info")).split('#')[1]  ,
                    phone:          (localStorage.getItem("_candidate_info")).split('#')[2]  ,
                    email:          (localStorage.getItem("_candidate_info")).split('#')[3]  ,
                    nationality:    (localStorage.getItem("_candidate_info")).split('#')[4]  ,
                    birthdate:      (localStorage.getItem("_candidate_info")).split('#')[5]  ,
                    drivelicense:   (localStorage.getItem("_candidate_info")).split('#')[6]  ,
                    workexperience: (localStorage.getItem("_candidate_info")).split('#')[7]  ,
                    education:      (localStorage.getItem("_candidate_info")).split('#')[8]  ,
                    language:       (localStorage.getItem("_candidate_info")).split('#')[9]  ,
                    skill:          (localStorage.getItem("_candidate_info")).split('#')[10] ,
                    message:        (localStorage.getItem("_candidate_info")).split('#')[11] ,
                };

                Api.http.status.insert(request, (result) => {
                    Api.http.status.update(request, (result) => {
                    });
                });
            });

            $dom.rejected.addEventListener('click', function () {

                var arrayCollection = responseCollection[Object.keys(responseCollection)[1]] ;
                var resultArray = arrayCollection[Object.keys(arrayCollection)[3]]           ;
                var getResult = resultArray.title                                            ;
                $dom.candidateStatus.innerHTML = getResult                                   ;
                
                    var request = {

                    status:          getResult                                               ,
                    position:        localStorage.getItem("_candidacy")                      ,
                    fullname:       (localStorage.getItem("_candidate_info")).split('#')[0]  ,
                    company:        (localStorage.getItem("_candidate_info")).split('#')[1]  ,
                    phone:          (localStorage.getItem("_candidate_info")).split('#')[2]  ,
                    email:          (localStorage.getItem("_candidate_info")).split('#')[3]  ,
                    nationality:    (localStorage.getItem("_candidate_info")).split('#')[4]  ,
                    birthdate:      (localStorage.getItem("_candidate_info")).split('#')[5]  ,
                    drivelicense:   (localStorage.getItem("_candidate_info")).split('#')[6]  ,
                    workexperience: (localStorage.getItem("_candidate_info")).split('#')[7]  ,
                    education:      (localStorage.getItem("_candidate_info")).split('#')[8]  ,
                    language:       (localStorage.getItem("_candidate_info")).split('#')[9]  ,
                    skill:          (localStorage.getItem("_candidate_info")).split('#')[10] ,
                    message:        (localStorage.getItem("_candidate_info")).split('#')[11] ,
                };

                Api.http.status.insert(request, (result) => {
                    Api.http.status.update(request, (result) => {

                    });
                });
            });
        });

        $dom.sendAction.addEventListener('click', function () {
            eval(`ReferenceController.init(contentPlaceholder)`);
        });
    };

    EmployeeinfoController = {
        init: _templateBootstrap
    };

})();

 