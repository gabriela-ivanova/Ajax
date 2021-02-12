<?php

class Update {

    private static $table = 'tb_employee_status';

    /**
     * 
     * @param type $status
     * @param type $email
     * @param type $position
     * @return type
     */
    public static function status($status, $email, $position) {

        return Database::query(" UPDATE tb_employee_status SET status = '$status' "
                             . " WHERE email = '$email' AND "
                             . " position    = '$position' ");
    }

    /**
     * 
     * @param type $parameterCollection
     * @return type
     */
    public static function doesExists($parameterCollection) {

        $collection = Database::select(self::$table)
                              ::where('email', $parameterCollection['email'])
                              ::andWhere('position', $parameterCollection['position'])
                              ::build();

        return (count($collection) > 0);
    }

}
