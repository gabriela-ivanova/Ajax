// модул, чрез който проверяваме дали потребителят е автентикиран или не в системата
const Auth = {}                              ;

Auth.isAuthenticated = () => { // lambda
    return !!localStorage.getItem('_tokken') ;
};

Auth.getTokken = () => {
    return localStorage.getItem('_tokken')   ;
};


Auth.getRole = () => {
    return localStorage.getItem('_role')     ;
};

Auth.signout = () => {
    localStorage.clear()                     ;
};

Auth.hasRole = (roleTitle) => {
    if (Auth.getRole() == roleTitle) {
        return true                          ;
    }
    return false                             ;
};
//
Auth.isEmployee = () => {

    return Auth.isAuthenticated() &&
            Auth.hasRole('EMPLOYEE')         ;
};

Auth.isEmployer = () => {

    return Auth.isAuthenticated() &&
            Auth.hasRole('EMPLOYER')         ;
};


Auth.isHR = () => {

    return Auth.isAuthenticated() &&
            Auth.hasRole('HR')               ;
};

Auth.isSuper = () => {

    return Auth.isAuthenticated() &&
            Auth.hasRole('SUPER')            ;
};








    