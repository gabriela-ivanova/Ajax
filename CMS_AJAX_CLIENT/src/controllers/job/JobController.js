(function () {

    var $dom = {};

    var dynamicCategoryMenuTemplate = (templateItem) => {

        var title = templateItem.title ;
        var id    = templateItem.id    ;

        return `<li class="category-placeholder--category" data-id="${id}">
                    ${title}
                </li>`
    };

    var jobOfferTemplate = (templateItem) => {

        var title        = templateItem.title        ;
        var company_name = templateItem.company_name ;
        var content      = templateItem.content      ;
        var id           = templateItem.id           ;


        return `<div    class   ="job-container" 
                        id      ="job"
                        data-id ="${id}">
                
                <span id="job-title" class="title"> ${title} </span>
                <span id="cname" class="cname"> ${company_name} </span>
                </div>
        
                <div class="job-entity-container">
                    <div class="title-cname">
                        <span class="get-job-title">${title}</span>
                        <span class="get-cname">, ${company_name}</span>
                    </div>
                    <p class="job-content"> ${content} </p>
                </div>`
    };

    var populateJobOfferCollection = (responseCollection) => {
        $dom.applyAction  = document.getElementById('apply') ;
        $dom.jobContainer = document.getElementById('job')   ;


        $dom.jobOfferPlaceholder.innerHTML = Template.collection.build(jobOfferTemplate, responseCollection);

        $('#searchCompanyName').show() ;
        $('#searchJobTitle').show()    ;
        $(".job-content").hide()       ;
        $('.get-job-title').hide()     ;
        $('.get-cname').hide()         ;
        $("#apply").hide()             ;




        $dom.jobOfferPlaceholder.addEventListener('click', function (e) {

            if (!e.target.dataset.id)
                return
            $('#searchCompanyName').hide() ;
            $('#searchJobTitle').hide()    ;


            var jobId = e.target.dataset.id;
            Api.http.jobOffer.get(jobId, function (entity) {

                $dom.jobOfferPlaceholder.innerHTML = jobOfferTemplate(entity);

                $('#job').css('display', 'none');

                localStorage.setItem("_position", Object.values(entity)[1]) ;
                localStorage.setItem("_company", Object.values(entity)[2])  ;

                $("#apply").show();
            });
        });

        $dom.applyAction.addEventListener('click', function () {
            if (Auth.isEmployee()) {
                eval(`ApplyController.init(contentPlaceholder)`)
            }
        });
    };

    var _templateBootstrap = (htmlPlaceholder) => {

        Template.load('job/template.html', function (result) {
            htmlPlaceholder.innerHTML = result;
            _contructor();
        });
    };

    var _contructor = () => {

        $dom.jobOfferPlaceholder = document.getElementById("job-offer--content");
        $dom.categoryPlaceholder = document.getElementById("category-placeholder");
        $dom.listAllJobOffer = document.getElementById('list-all-job-offer');
        $dom.applyAction = document.getElementById('apply');


        /* Search Bar */
        var searchCompanyName = document.querySelector('#searchCompanyName');
        searchCompanyName.addEventListener('keyup', function (e) {
            // UI Element
            var cnamesLI = document.getElementsByClassName('cname');
            var titleLI = document.getElementsByClassName('title');
            // Get Search Query
            var searchQuery = searchCompanyName.value.toLowerCase();
            // Search Compare & Display
            for (var i = 0; i < cnamesLI.length; i++) {
                const cname = cnamesLI[i].textContent.toLowerCase();

                if (cname.includes(searchQuery)) {
                    cnamesLI[i].style.display = 'block';
                    titleLI[i].style.display = 'block';
                } else {
                    cnamesLI[i].style.display = 'none';
                    titleLI[i].style.display = 'none';
                }
            }
        });

        var searchJobTitle = document.querySelector('#searchJobTitle');
        searchJobTitle.addEventListener('keyup', function (e) {
            // UI Element
            //var jobContainer  = document.getElementsByClassName('job-container');
            var titleLI = document.getElementsByClassName('title');
            var cnamesLI = document.getElementsByClassName('cname');
            // Get Search Query
            var searchQuery = searchJobTitle.value.toLowerCase();

            // Search Compare & Display
            for (var i = 0; i < titleLI.length; i++) {
                const title = titleLI[i].textContent.toLowerCase();

                if (title.includes(searchQuery)) {
                    titleLI[i].style.display = 'block';
                    cnamesLI[i].style.display = 'block';
                } else {
                    titleLI[i].style.display = 'none';
                    cnamesLI[i].style.display = 'none';
                }
            }
        });

        Api.http.category.getAll(function (responseCollection) {

            $dom.categoryPlaceholder.innerHTML = Template.collection.build(dynamicCategoryMenuTemplate, responseCollection);

            $dom.categoryPlaceholder.addEventListener('click', function (e) {
                Api.http.jobOffer.byCategory(e.target.dataset.id, populateJobOfferCollection);
            });

            $dom.listAllJobOffer.addEventListener('click', function () {
                Api.http.jobOffer.getAll(populateJobOfferCollection);
            });

            Api.http.jobOffer.getAll(populateJobOfferCollection); // връща всички реултТИ
        });
    };

    JobController = {
        init: _templateBootstrap
    };

})();