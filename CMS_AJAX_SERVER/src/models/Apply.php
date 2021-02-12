<?php

class Apply {

    private static $table1 = 'tb_employee'           ;
    private static $table2 = 'tb_job_offer__employee';

    /**
     * 
     * @param type $parameterCollection
     * @return type
     */
    public static function doesExists($parameterCollection) {

        $collection = Database::select(self::$table1)
                              ::where('email', $parameterCollection['email'])
                              ::andWhere('position', $parameterCollection['position'])
                              ::build();

        return (count($collection) > 0);
    }

    /**
     * 
     * @param type $parameterCollection
     * @return type
     */
    public static function applyForJob($parameterCollection) {

        Database::insert(self::$table1, $parameterCollection);

        //ще върне или null, или стойност(1, 2, 3)
        return Database::getLastInsertedId();
    }

    /**
     * 
     * @param type $employeeId
     * @param type $positionId
     * @return type
     */
    public static function insertJobCategory($employeeId, $positionId) {

        return Database::insert(self::$table2, array(
                    'employee_id' => $employeeId,
                    'position_id' => $positionId
        ));
    }
}
