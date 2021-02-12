<?php

class Status {

    private static $table = 'tb_employee_status';

    /**
     * 
     * @return type
     */
    public static function get() {

        return Database::select(self::$table)::build();
    }

}
