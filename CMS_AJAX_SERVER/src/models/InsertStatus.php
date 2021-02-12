<?php

class Insert {

    private static $table = 'tb_employee_status';

    /**
     * 
     * @param type $employeeStatus
     * @return type
     */
    public static function status($employeeStatus) {

        Database::insert(self::$table, $employeeStatus);
        return Database::getLastInsertedId();
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
