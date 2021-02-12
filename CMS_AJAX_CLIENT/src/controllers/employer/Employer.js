(function () {
    
    var $dom = {};

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('employer/template.html', (result) => {
            htmlPlaceholder.innerHTML = result;
            _constructor();
        });
    };

    var _constructor = () => {

        $dom.employerCompanyNameInput = $('#employer--company-name') ;
        $dom.employerJobTitleInput    = $('#employer--job-title')    ;
        $dom.employerJobContentInput  = $('#employer--job-content')  ;
        $dom.message                  = $('#message-create')         ;


        $dom.employerSubmitAction = $('#employer--submit'); // document.getElementById('signin--submit')

        $dom.employerSubmitAction.on('click', function () {

            if ($dom.employerCompanyNameInput.val().length == 0) { 
                $dom.employerCompanyNameInput.before("<p class='employer_error_message'>Company name field is required</p>")  
                return;
            };

            if ($dom.employerJobTitleInput.val().length == 0) {  
                $dom.employerJobTitleInput.before("<p class='employer_error_message'>Job title field is required</p>") 
                return;
            };

            if ($dom.employerJobContentInput.val().length == 0) { 
                $dom.employerJobContentInput.after("<p class='employer_error_message'>Job content field is required</p>") 
                return;
            };

            var request = {
                company_name: $dom.employerCompanyNameInput.val() ,
                title: $dom.employerJobTitleInput.val()           ,
                content: $dom.employerJobContentInput.val()
            };
               
            Api.http.jobOffer.create(request, (result) => {
       
                var message = result[Object.keys(result)[1]]                  ;
                document.getElementById('message-create').innerHTML = message ;
                $('#message-create').show()                                   ;
                $('.employer_error_message').hide()                           ;
                $dom.employerCompanyNameInput.hide()                          ;
                $dom.employerJobTitleInput.hide()                             ;
                $dom.employerJobContentInput.hide()                           ;
                $dom.employerSubmitAction.hide()                              ;
            });  
        });
    };

    EmployerController = {
        init: _templateBootstrap
    };

})();

 