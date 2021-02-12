var Template = {
    collection: {} //обект
};

var templateUrl = (templateName) => {
    const TEMPLATE_URL = `http://localhost/Ajax/CMS_AJAX_CLIENT/src/controllers`;
    return `${TEMPLATE_URL}/${templateName}`;
};


Template.collection.build = function (templateProvider, collection) { // обхождаме колекццията

    var templateCollection = [];
    var collection = collection.data; // връщаме данните под формата на data ресурс(пропърти)
    for (var i = 0; i < collection.length; i++) {

        var template = templateProvider(collection[i]);
        templateCollection.push(template);
    }

    return templateCollection.join('');
};

Template.load = (templateName, callback) => {  //зареждаме си темплейтите
    Ajax.get(templateUrl(templateName), (ajaxObject, res) => {
        callback(res);
    });
};

