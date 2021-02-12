<?php

class Employee {

    private static $table1 = 'tb_employee';

    /**
     * 
     * @return type
     */
    public static function getAll() {
        return Database::select(self::$table1)::build();
    }

    /**
     * 
     * @param type $id
     * @return type
     */
    public static function get($id) {
        return Database::get("SELECT * FROM tb_employee a WHERE a.id = $id");
    }

    /**
     * 
     * @param type $positionId
     * @return type
     */
    public static function getByPosition($positionId) {

        return Database::getAll("SELECT * FROM tb_employee a,
                                                tb_job_offer__employee b
                                                WHERE a.id = b.employee_id AND 
                                                b.position_id = $positionId");
    }
}
