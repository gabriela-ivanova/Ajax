<?php

class Request {

    /**
     * 
     * @return type
     */
    public static function jsonStream() {

        $jsonObject = file_get_contents("php://input"); // функцията получава данни от url адрес   /    php://input е стриймов поток(поток от данни) 
        return json_decode($jsonObject);
    }

    //наличие на тоукън в request header-а
    /**
     * 
     * @return type
     */
    public static function authTokken() {
        return isset(apache_request_headers()['dev-tokken']) ? apache_request_headers()['dev-tokken'] : null;
    }

}
