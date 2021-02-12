<?php

class JobOffer {

    private static $table = 'tb_job_offer';

    /**
     * 
     * @author Gabriela Ivanova
     * @example return all of the available blog post items
     * @return DatabaseObject 
     */
    public static function getAll() {   //array('title')
        return Database::select(self::$table)::build(); //върни ми същия клас и към него мога да си закача всеки метод от този клас
    }

    /**
     * 
     * @param type $id
     * @return type
     */
    public static function get($id) {
        return Database::get("SELECT * FROM tb_job_offer a WHERE a.id = $id");
//        return Database::select(self::$table)
//                       ::where('id', $parameterCollection['id'])
//                       ::buildSingle();
    }

    /**
     * 
     * @param type $categoryId
     * @return type
     */
    public static function getByCategory($categoryId) {

//        return Database::join(array('tb_blog_post' => 'a',
//                                    'tb_blog_post__categories' => 'b'))
//                        ::where(array(
//                                    'a.id' => 'b.blog_post_id',
//                                    'b.category_id' => $categoryId));


        return Database::getAll("SELECT * FROM tb_job_offer a,
                                                tb_job_offer__categories b
                                                WHERE a.id = b.job_offer_id AND 
                                                b.category_id = $categoryId");
    }
}
