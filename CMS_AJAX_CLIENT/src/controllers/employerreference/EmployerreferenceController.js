(function () {

    var $dom = {};
    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('employerreference/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

        $dom.appliedPositionReference                       = document.getElementById('candidate-position-reference')   ;
        $dom.candidateCompanyReference                      = document.getElementById('candidate-company-reference')    ;
        $dom.candidateFullNameReference                     = document.getElementById('candidate-fname-reference')      ;
        $dom.candidatePhoneReference                        = document.getElementById('candidate-phone-reference')      ;
        $dom.candidateEmailReference                        = document.getElementById('candidate-email-reference')      ;
        $dom.candidateNationalityReference                  = document.getElementById('candidate-nationality-reference');
        $dom.candidateDateOfBirthReference                  = document.getElementById('candidate-birth-reference')      ;
        $dom.candidateDriveLicenseReference                 = document.getElementById('candidate-drive-reference')      ;
        $dom.candidateWorkExperienceReference               = document.getElementById('candidate-work-reference')       ;
        $dom.candidateEducationReference                    = document.getElementById('candidate-education-reference')  ;
        $dom.candidateLanguageReference                     = document.getElementById('candidate-language-reference')   ;
        $dom.candidateSkillReference                        = document.getElementById('candidate-skill-reference')      ;
        $dom.candidateMessageReference                      = document.getElementById('candidate-message-reference')    ;
        $dom.candidateStatusReference                       = document.getElementById('candidate-status-reference')     ;


        if (localStorage.getItem("_candidate_info") != undefined || localStorage.getItem("_candidate_info") !== null &&
                localStorage.getItem("_candidacy")  != undefined || localStorage.getItem("_candidacy")      !== null) {

            $dom.appliedPositionReference.innerHTML         = localStorage.getItem("_candidacy")                        ;
            $dom.candidateFullNameReference.innerHTML       = (localStorage.getItem("_candidate_info")).split('#')[0]   ;
            $dom.candidateCompanyReference.innerHTML        = (localStorage.getItem("_candidate_info")).split('#')[1]   ;
            $dom.candidatePhoneReference.innerHTML          = (localStorage.getItem("_candidate_info")).split('#')[2]   ;   
            $dom.candidateEmailReference.innerHTML          = (localStorage.getItem("_candidate_info")).split('#')[3]   ; 
            $dom.candidateNationalityReference.innerHTML    = (localStorage.getItem("_candidate_info")).split('#')[4]   ;   
            $dom.candidateDateOfBirthReference.innerHTML    = (localStorage.getItem("_candidate_info")).split('#')[5]   ;  
            $dom.candidateDriveLicenseReference.innerHTML   = (localStorage.getItem("_candidate_info")).split('#')[6]   ;        
            $dom.candidateWorkExperienceReference.innerHTML = (localStorage.getItem("_candidate_info")).split('#')[7]   ;       
            $dom.candidateEducationReference.innerHTML      = (localStorage.getItem("_candidate_info")).split('#')[8]   ;     
            $dom.candidateLanguageReference.innerHTML       = (localStorage.getItem("_candidate_info")).split('#')[9]   ;     
            $dom.candidateSkillReference.innerHTML          = (localStorage.getItem("_candidate_info")).split('#')[10]  ;    
            $dom.candidateMessageReference.innerHTML        = (localStorage.getItem("_candidate_info")).split('#')[11]  ;
        };

        Api.http.status.get((dataCollection) => {

            var responseCollection = dataCollection[Object.keys(dataCollection)[1]]                                  ;
            for (var element of responseCollection) {

                if (element['email'] == (localStorage.getItem("_candidate_info")).split('#')[3] &&
                        element['position'] == localStorage.getItem("_candidacy")) {
                     $dom.candidateStatusReference.innerHTML = element['status']                                               ;
                };
            };
        });
    };

    EmployerreferenceController = {
        init: _templateBootstrap
    };


})();

 