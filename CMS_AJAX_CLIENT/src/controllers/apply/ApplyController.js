
(function () {
//ще съдържа всички html ел., които взимаме с getElementById() (document object model)

    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('apply/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

        $dom.jobPosition                    = document.getElementById('employee-position')        ;
        $dom.employeeCompany                = document.getElementById('employee-company')         ;
        $dom.employeeFnameInput             = document.getElementById('employee-fname')           ;
        $dom.employeeLnameInput             = document.getElementById('employee-lname')           ;
        $dom.employeePhoneInput             = document.getElementById('employee-phone')           ;
        $dom.employeeEmailInput             = document.getElementById('employee-email')           ;
        
        $dom.employeeNationalityInput       = document.getElementById('employee-nationality')     ;
        $dom.employeeDateOfBirthInput       = document.getElementById('employee-date-of-birth')   ;
        $dom.employeeDrivingLicenseInput    = document.getElementById('employee-driving-license') ;
        $dom.employeeWorkExperienceInput    = document.getElementById('employee-work-experience') ;
        $dom.employeeEducationInput         = document.getElementById('employee-education')       ;
        $dom.employeeLanguageInput          = document.getElementById('employee-language')        ;
        $dom.employeeSkillInput             = document.getElementById('employee-skill')           ;
        $dom.employeeMessageInput           = document.getElementById('employee-message')         ;

        $dom.employeeSubmitAction           = document.getElementById('employee-btn-send')        ;


        if (localStorage.getItem("_position") != undefined || localStorage.getItem("_position") !== null) {
            $dom.jobPosition.innerHTML     = localStorage.getItem("_position") ;
            $dom.employeeCompany.innerHTML = localStorage.getItem("_company")  ;
            $dom.employeeFnameInput.value  = localStorage.getItem("_fname")    ;
            $dom.employeeLnameInput.value  = localStorage.getItem("_lname")    ;
            $dom.employeeEmailInput.value  = localStorage.getItem("_email")    ; 
        }

        $dom.employeeSubmitAction.addEventListener('click', function () {

            if ($dom.employeeFnameInput.value.length == 0) {  //проверяваме дали е попълнено полето за паролата
                $dom.employeeFnameInput.before("This field is required")  //допавяме съдържание след елемента
                return;
            }

            if ($dom.employeeLnameInput.value.length == 0) {  //проверяваме дали е попълнено полето за паролата
                $dom.employeeLnameInput.before("This field is required")  //допавяме съдържание след елемента
                return;
            }

            if ($dom.employeeEmailInput.value.length == 0) {  //проверяваме дали е попълнено полето за паролата
                $dom.employeeEmailInput.before("This field is required")  //допавяме съдържание след елемента
                return;
            }

            var request = {

                position       : localStorage.getItem("_position")      ,
                company        : localStorage.getItem("_company")       ,
                fname          : $dom.employeeFnameInput.value          ,
                lname          : $dom.employeeLnameInput.value          ,
                phone          : $dom.employeePhoneInput.value          ,
                email          : $dom.employeeEmailInput.value          ,
                nationality    : $dom.employeeNationalityInput.value    ,
                birthdate      : $dom.employeeDateOfBirthInput.value    ,
                drivelicense   : $dom.employeeDrivingLicenseInput.value ,
                workexperience : $dom.employeeWorkExperienceInput.value ,
                education      : $dom.employeeEducationInput.value      ,
                language       : $dom.employeeLanguageInput.value       ,
                skill          : $dom.employeeSkillInput.value          ,
                message        : $dom.employeeMessageInput.value
                
                

                
            };

            Api.http.jobOffer.apply(request, (result) => {
                var message = result[Object.keys(result)[1]];
                document.getElementById('apply-message').innerHTML = message;

                $('#employee-position').hide()        ;
                $('#comma').hide()                    ;
                $('#employee-company').hide()         ;
                $('#apply-for-position').hide()       ;

                $('#fname-label').hide()              ;
                $('#employee-fname').hide()           ;

                $('#lname-label').hide()              ;
                $('#employee-lname').hide()           ;
                
                $('#phone-label').hide()              ;
                $('#employee-phone').hide()           ;
                
                $('#email-label').hide()              ;
                $('#employee-email').hide()           ;

                $('#nationality-label').hide()        ;
                $('#employee-nationality').hide()     ;
                                           
                $('#date-of-birth-label').hide()      ;
                $('#employee-date-of-birth').hide()   ;
                                            
                $('#driving-license-label').hide()    ;
                $('#employee-driving-license').hide() ;
                                           
                $('#work-experience-label').hide()    ;
                $('#employee-work-experience').hide() ;
                                              
                $('#education-label').hide()          ;
                $('#employee-education').hide()       ;
                                              
                $('#language-label').hide()           ;
                $('#employee-language').hide()        ;
                                            
                $('#skill-label').hide()              ;
                $('#employee-skill').hide()           ;              

                $('#message-label').hide()            ;
                $('#employee-message').hide()         ;
                
                $('#employee-btn-send').hide()        ;

            });
        });
    };

    //когато няма var отпред конструкторът е глобално дефиниран иначе е локално
    ApplyController = {
        init: _templateBootstrap
    };

})();

 