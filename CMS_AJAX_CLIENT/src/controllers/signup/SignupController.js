(function () {
//ще съдържа всички html ел., които взимаме с getElementById() (document object model)
    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('signup/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

        //form input      
        $dom.signupUserFnameInput  = $('#signup--user-fname')       ;
        $dom.signupUserLnameInput  = $('#signup--user-lname')       ;
        $dom.signupUserAge         = $('#signup--user-age')         ;

        $dom.signupCompanyUIC      = $('#signup--company-uic')      ;
        $dom.signupCompanyName     = $('#signup--company-name')     ;
        $dom.signupCompanyIndustry = $('#signup--company-industry') ;
        $dom.signupUserActivity    = $('#signup--company-activity') ;

        $dom.signupCountry         = $('#signup--country')          ;
        $dom.signupCityTown        = $('#signup--city-town')        ;
        $dom.signupUserName        = $('#signup--user-name')        ;
        $dom.signupEmail           = $('#signup--email')            ;
        $dom.signupPassword        = $('#signup--password')         ;
        $dom.signupPasswordRepeat  = $('#signup--password-repeat')  ;

        $dom.employeeSignupText    = $('#employee-signup-text')     ;
        $dom.employerSignupText    = $('#employer-signup-text')     ;

        $dom.employeeParagraph     = $('#employee-paragraph')       ;
        $dom.employerParagraph     = $('#employer-paragraph')       ;

        $dom.buttonEmployee        = $('#btn-employee')             ;
        $dom.buttonEmployer        = $('#btn-employer')             ;


        $('#signup--user-fname').hide()                             ;
        $('#signup--user-lname').hide()                             ;
        $('#signup--user-age').hide()                               ;

        $('#signup--company-uic').hide()                            ;
        $('#signup--company-name').hide()                           ;
        $('#signup--company-industry').hide()                       ;
        $('#signup--company-activity').hide()                       ;

        $('#signup--country').hide()                                ;
        $('#signup--city-town').hide()                              ;
        $('#signup--user-name').hide()                              ;
        $('#signup--email').hide()                                  ;
        $('#signup--password').hide()                               ;
        $('#signup--password-repeat').hide()                        ;
        $('#signup--submit').hide()                                 ;
        $('#user-message').hide()                                   ;
        $('#company-message').hide()                                ;
        $('#for-all-message').hide()                                ;
        $('.hr-user').hide()                                        ;
        $('#employee-signup-text').hide()                           ;
        $('#employer-signup-text').hide()                           ;
        $('#signup-img').show()                                     ;


        $dom.buttonEmployee.on('click', function () {
            $('#signup--user-fname').show()                         ;
            $('#signup--user-lname').show()                         ;
            $('#signup--user-age').show()                           ;

            $('#signup--country').show()                            ;
            $('#signup--city-town').show()                          ;
            $('#signup--user-name').show()                          ;
            $('#signup--email').show()                              ;
            $('#signup--password').show()                           ;
            $('#signup--password-repeat').show()                    ;
            $('#signup--submit').show()                             ;

            $('#signup--company-uic').hide()                        ;
            $('#signup--company-name').hide()                       ;
            $('#signup--company-industry').hide()                   ;
            $('#signup--company-activity').hide()                   ;

            $('#employee-signup-text').show()                       ;
            $('#employer-signup-text').hide()                       ;

            $('#employee-paragraph').hide()                         ;
            $('#employer-paragraph').hide()                         ;

            $('#btn-employee').hide()                               ;
            $('#btn-employer').hide()                               ;

            $('.flex-employee-wrapper').hide()                      ;
            $('.flex-employer-wrapper').hide()                      ;
            $('#signup-img').hide()                                 ;
        });

        $dom.buttonEmployer.on('click', function () {
            $('#signup--company-uic').show()                        ;
            $('#signup--company-name').show()                       ;
            $('#signup--company-industry').show()                   ;
            $('#signup--company-activity').show()                   ;

            $('#signup--country').show()                            ;
            $('#signup--city-town').show()                          ;
            $('#signup--user-name').show()                          ;
            $('#signup--email').show()                              ;
            $('#signup--password').show()                           ;
            $('#signup--password-repeat').show()                    ;
            $('#signup--submit').show()                             ;

            $('#signup--user-fname').hide()                         ;
            $('#signup--user-lname').hide()                         ;
            $('#signup--user-age').hide()                           ;

            $('#employee-signup-text').hide()                       ;
            $('#employer-signup-text').show()                       ;

            $('#employee-paragraph').hide()                         ;
            $('#employer-paragraph').hide()                         ;

            $('#btn-employee').hide()                               ;
            $('#btn-employer').hide()                               ;

            $('.flex-employee-wrapper').hide()                      ;
            $('.flex-employer-wrapper').hide()                      ;
            $('#signup-img').hide()                                 ;
        });


        //form action
        $dom.signupSubmitAction = $('#signup--submit'); // document.getElementById('signin--submit')

        $dom.signupSubmitAction.on('click', function () {


            if ($dom.signupUserName.val().length < 4) { 
                $dom.signupUserName.after("<p class = 'error_message'>Min lengt 2 characters of user_name field is required</p>")
                return;
            }

            if ($dom.signupEmail.val().length < 5) { 
                $dom.signupEmail.after("<p class = 'error_message'>Min lengt 5 characters of Email field is required</p>") 
                return;
            }

            if ($dom.signupPassword.val().length == 0) { 
                $dom.signupPassword.after("<p class = 'error_message'>Password field is required</p>") 
                return;
            }

            if ($dom.signupPasswordRepeat.val().length == 0) { 
                $dom.signupPasswordRepeat.after("<p class = 'error_message'>Repeat your password</p>")  
                return;
            }

            var userPassword = $dom.signupPassword.val();
            var userPasswordRepeat = $dom.signupPasswordRepeat.val();

            if (userPassword != userPasswordRepeat) {
                return $dom.signupPassword.after("<p>User password and password repeat must be the same strring</p>")
            }
                                                                   
            var request = {

                fname     : $dom.signupUserFnameInput.val()   ,
                lname     : $dom.signupUserLnameInput.val()   ,
                age       : $dom.signupUserAge.val()          ,
                uic       : $dom.signupCompanyUIC.val()       ,
                cname     : $dom.signupCompanyName.val()      ,
                industry  : $dom.signupCompanyIndustry.val()  ,
                activity  : $dom.signupUserActivity.val()     ,
                country   : $dom.signupCountry.val()          ,
                city_town : $dom.signupCityTown.val()         ,
                user_name : $dom.signupUserName.val()         ,
                email     : $dom.signupEmail.val()            ,
                password  : $dom.signupPassword.val()
            };

            Api.http.user.signup(request, (result) => {
                var message = result[Object.keys(result)[1]];
                document.getElementById('signup-message').innerHTML = message;

                if (message == 'User created successfully') {
                    $('#menu-signup').hide();


                    $('#signup--user-fname').hide()       ;
                    $('#signup--user-lname').hide()       ;
                    $('#signup--user-age').hide()         ;

                    $('#signup--company-uic').hide()      ;
                    $('#signup--company-name').hide()     ;
                    $('#signup--company-industry').hide() ;
                    $('#signup--company-activity').hide() ;

                    $('#signup--country').hide()          ;
                    $('#signup--city-town').hide()        ;
                    $('#signup--user-name').hide()        ;
                    $('#signup--email').hide()            ;
                    $('#signup--password').hide()         ;
                    $('#signup--password-repeat').hide()  ;
                    $('#signup--submit').hide()           ;
                    $('#user-message').hide()             ;
                    $('#company-message').hide()          ;
                    $('#for-all-message').hide()          ;
                    $('.error_message').hide()            ;
                    $('.hr-user').hide()                  ;

                }
            });
        });
    };

    //когато няма var отпред конструкторът е глобално дефиниран илаче е локално
    SignupController = {
        init: _templateBootstrap
    };

})();
                  