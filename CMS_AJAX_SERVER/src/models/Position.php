<?php

class Position {

    private static $table = 'tm_position';

    /**
     * 
     * @return type
     */
    public static function getAll() {

        return Database::select(self::$table)::build();
    }

    /**
     * 
     * @param type $positionId
     * @return type
     */
    public static function get($positionId) {

        return Database::get("SELECT * FROM tm_position WHERE id = $positionId");
    }

}
