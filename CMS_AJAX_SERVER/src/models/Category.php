<?php

class Category {

    private static $table = 'tm_categories';

    /**
     * 
     * @return type
     */
    public static function getAll() {

        return Database::select(self::$table)::build();
    }

    /**
     * 
     * @param type $category_id
     * @return type
     */
    public static function get($category_id) {

        return Database::get("SELECT title FROM tm_categories WHERE id = $category_id");
    }
}
