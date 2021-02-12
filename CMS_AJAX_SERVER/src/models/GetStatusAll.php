<?php

class GetAll {

    private static $table = 'tm_status';

    /**
     * 
     * @return type
     */
    public static function status() {
        return Database::select(self::$table)::build();
    }

}
