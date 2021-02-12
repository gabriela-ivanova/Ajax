<?php

class Employer {

    private static $table1 = 'tb_job_offer'            ;
    private static $table2 = 'tb_job_offer__categories';

    /**
     * 
     * @param type $jobOfferCollection
     * @return type
     */
    public static function doesExists($jobOfferCollection) {

        $collection = Database::select(self::$table1)
                              ::where('title', $jobOfferCollection['title'])
                              ::orwhere('content', $jobOfferCollection['content'])
                              ::build();

        return (count($collection) > 0);
    }

    /**
     * 
     * @param type $parameterCollection
     * @return type
     */
    public static function createNewJobOffer($parameterCollection) {

        Database::insert(self::$table1, $parameterCollection);

        return Database::getLastInsertedId();
    }

    /**
     * 
     * @param type $jobOfferId
     * @param type $categoryId
     * @return type
     */
    public static function insertJobCategory($jobOfferId, $categoryId) {

        return Database::insert(self::$table2, array(
                    'job_offer_id' => $jobOfferId,
                    'category_id'  => $categoryId
        ));
    }
}
