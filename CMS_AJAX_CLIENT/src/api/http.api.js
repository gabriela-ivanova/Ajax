//Организирахме си всичките заявки

var HttpApi = {};   //обект

//Lambda - ако имаме 1 ред няма нужда от return
var url = (endpoint, queryParameterCollection) => {

    var URL = `http://localhost/Ajax/CMS_AJAX_SERVER`;
    var urlEndpoint = `${URL}/${endpoint}`;

    if (queryParameterCollection) {

        var query = '';
        for (var index in queryParameterCollection) {
            query += `${index}=${queryParameterCollection[index]}&`; // index = category;  queryParameterCollection[index] = 1; което прави category = 1
        }
        query = query.substring(0, query.length - 1);
        return `${urlEndpoint}?${query}`;

    }

    return urlEndpoint;
}

//той ще има подобекти7
HttpApi.jobOffer = {};

/**
 * @author Gabriela Ivanova
 * @param (type) callback
 * @example http://localhost/Ajax/CMS_AJAX_SERVER/blog_post/
 * @description Get all of the available blog post entity collection
 */
HttpApi.jobOffer.getAll = (callback) => {  //ще взима всичките блог постове

    Ajax.getJSON(url('job_offer'), (ajaxObject, res) => {
        callback(res)
    });
};

/**
 * 
 * @param {type} body
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.jobOffer.create = (body, callback) => {

    Ajax.postJSON(url('employer/create_new_job_offer'), body, (ajaxObject, res) => {
        callback(res);
    });
};

/**
 * 
 * @param {type} body
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.jobOffer.apply = (body, callback) => {

    Ajax.postJSON(url('apply'), body, (ajaxObject, res) => {
        callback(res);
    });
};


/**
 * @author Gabriela Ivanova
 * @param (type) callback
 * @example http://localhost/Ajax/CMS_AJAX_SERVER/blog_post?id=1
 * @description Get all of the available blog post entity collection
 */
HttpApi.jobOffer.get = (jobId, callback) => {

    Ajax.getJSON(url(`job_offer/${jobId}`), (ajaxObject, res) => {
        callback(res.data);
    }); // връщаме данните под формата на data ресурс(пропърти)
    //Ajax.getJSON(url(`blog_post/${postId}`), (ajaxObject, res) => { callback(res); }); // за да получим всички данни
};

/**
 * @author Gabriela Ivanova
 * @param (type) callback
 * @example http://localhost/Ajax/CMS_AJAX_SERVER/blog_post?category=10
 * @description Get all of the available blog post entity collection
 */
HttpApi.jobOffer.byCategory = (categoryId, callback) => {

    Ajax.getJSON(url(`job_offer/category/${categoryId}`), (ajaxObject, res) => {
        callback(res)
    });
};

HttpApi.category = {};

/**
 * @author Gabriela Ivanova
 * @param (type) callback
 * @example http://localhost/Ajax/CMS_AJAX_SERVER/category/
 * @description Get all of the available blog post entity collection
 */
HttpApi.category.getAll = (callback) => {

    //ajaxObject - пази се цялата AJAX data, а в res - само отговора
    Ajax.getJSON(url('category'), (ajaxObject, res) => {
        callback(res)
    });
};


HttpApi.contact = {};

/**
 * 
 * @param {type} callback
 * @returns {undefined}
 * @example http://localhost/Ajax/CMS_AJAX_SERVER/office/
 * scope private (означава, че изисква форма на автентикация)
 */
HttpApi.contact.getAll = (callback) => {

    Ajax.getJSON(url('contact'), (ajaxObject, res) => {
        callback(res)
    });
};


HttpApi.user = {};

/**
 * @author Gabriela Ivanova
 * @param (type) body
 * @param (type) callback
 * @returns  (undefined) 
 */
HttpApi.user.signin = (body, callback) => {
    Ajax.postJSON(url('user/signin'), body, (ajaxObject, res) => {
        callback(res);
    });
};

/**
 * 
 * @param {type} body
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.user.signup = (body, callback) => {
    Ajax.postJSON(url('user/signup'), body, (ajaxObject, res) => {
        callback(res);
    });
};



HttpApi.employee = {};

/**
 * 
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.employee.getAll = (callback) => {  //ще взима всичките блог постове

    Ajax.getJSON(url('employee'), (ajaxObject, res) => {
        callback(res)
    });
};


/**
 * 
 * @param {type} id
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.employee.get = (id, callback) => {

    Ajax.getJSON(url(`employee/${id}`), (ajaxObject, res) => {
        callback(res);
    }); // връщаме данните под формата на data ресурс(пропърти)
};


/**
 * 
 * @param {type} positionId
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.employee.byPosition = (positionId, callback) => {

    Ajax.getJSON(url(`employee/position/${positionId}`), (ajaxObject, res) => {
        callback(res)
    });
};



HttpApi.status = {};

/**
 * 
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.status.get = (callback) => {  //прихващаме си данните за employee

    Ajax.getJSON(url('get_employee_status'), (ajaxObject, res) => {
        callback(res)
    });
};

/**
 * 
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.status.getAll = (callback) => {

    Ajax.getJSON(url('get_status_all'), (ajaxObject, res) => {
        callback(res)
    });
};

/**
 * 
 * @param {type} body
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.status.insert = (body, callback) => {

    Ajax.postJSON(url('insert_status'), body, (ajaxObject, res) => {
        callback(res);
    });
};

/**
 * 
 * @param {type} body
 * @param {type} callback
 * @returns {undefined}
 */
HttpApi.status.update = (body, callback) => {

    Ajax.postJSON(url('update_status'), body, (ajaxObject, res) => {
        callback(res);
    });
};
















