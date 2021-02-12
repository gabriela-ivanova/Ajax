(function () {

    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('signin/template.html', function (result) {
            htmlPlaceholder.innerHTML = result;
            _contructor();
        });
    };

    var _contructor = () => {

        //  form input
        $dom.signinUserEmailInput    = $("#signin--user-email")    ;
        $dom.signinUserPasswordInput = $("#signin--user-password") ;

        // form action
        $dom.signinSubmitAction      = $("#signin--submit")        ;

        // addEventListener
        $dom.signinSubmitAction.on('click', function () {

            if ($dom.signinUserEmailInput.val().length == 0) {
                $dom.signinUserEmailInput.after("<p>This field is required</p>")    ;
                return;
            }

            if ($dom.signinUserPasswordInput.val().length == 0) {
                $dom.signinUserPasswordInput.after("<p>This field is required</p>") ;
                return;
            }

            var request = {
                email: $dom.signinUserEmailInput.val(),
                password: $dom.signinUserPasswordInput.val()
            };

            // * PubSub 

            Api.http.user.signin(request, (result) => {

                if (result.data && result.data.tokken) {
                    localStorage.setItem("_tokken", result.data.tokken) ;
                    localStorage.setItem("_role"  , result.data.role)   ;
                    localStorage.setItem("_fname" , result.data.fname)  ;
                    localStorage.setItem("_lname" , result.data.lname)  ;
                    localStorage.setItem("_cname" , result.data.cname)  ;
                    localStorage.setItem("_email" , result.data.email)  ;
                }

                var message = result[Object.keys(result)[1]];
                document.getElementById('signin-message').innerHTML = message;

                if (Auth.isAuthenticated()) {

                    $('#menu-signout').show()          ;
                    $('#menu-signup').hide()           ;
                    $('#menu-signin').hide()           ;
                    $('#menu-about').hide()            ;

                    $('#signin--user-email').hide()    ;
                    $('#signin--user-password').hide() ;
                    $('#signin--submit').hide()        ;
                } else {

                    $('#menu-signout').hide()          ;
                    $('#menu-signup').show()           ;
                    $('#menu-signin').show()           ;

                    $('#signin--user-email').show()    ;
                    $('#signin--user-password').show() ;
                    $('#signin--submit').show()        ;
                }

                // Задаваме при какво положение ще се показва бутона в менюто
                if (Auth.isEmployee()) {
                    $('#menu-contact').show()                               ;
                    $('#menu-job').show()                                   ;
                    $('#menu-employee-reference').show()                    ;
                    eval(`JobController.init(contentPlaceholder)`)          ;
                }


                if (Auth.isEmployer()) {
                    $('#menu-employer-home').hide()                         ;
                    $('#menu-employer-create').show()                       ;
                    $("#menu-reference").show()                             ;
                    $('#menu-job').show()                                   ;
                    $('#menu-status').show()                                ;
                    eval(`EmployerhomeController.init(contentPlaceholder)`) ;
                }

                if (Auth.isHR() || Auth.isSuper()) {
                    $('#menu-job').show()                                   ;
                    $("#menu-reference").show()                             ;
                    eval(`HrhomeController.init(contentPlaceholder)`) ;
                }

                if (Auth.isSuper()) {
                    $('#menu-reference').show()                             ;
                    $('#menu-job').show()                                   ;
                    $('#menu-super-home').hide()                            ;
                    eval(`SuperhomeController.init(contentPlaceholder)`)    ;
                }
            });
        });
    };

    SigninController = {
        init: _templateBootstrap
    };

})();










