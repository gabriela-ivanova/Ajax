<?php

class Auth {

// изнасяме логиката за проверка дали този тоукън съществува в базата данни
    private static $tableName = 'tb_auth_tokken';

    /**
     * 
     * @param type $tokkenId
     * @return type
     */
    public static function isTokkenAvailable($tokkenId) {
        // ще върне единичен тоукън
        $tokken = Database::select(self::$tableName)
                          ::where('tokken', $tokkenId) // column, value
                          ::build();

        // проверяваме дали ни се е върнал единичен тоукън
        return (count($tokken) == 1);
    }

    /**
     * 
     * @param type $requestParameter
     * @return type
     */
    public static function createNewTokken($requestParameter) {
        // този тоукън ще генерира хеш от email, password и uniqid()
        $tokken = hash('sha256', $requestParameter['email'] . $requestParameter['password'] . uniqid());
        Database::insert(self::$tableName, array(
            'tokken' => $tokken
        ));
        
        return $tokken;
    }
}
