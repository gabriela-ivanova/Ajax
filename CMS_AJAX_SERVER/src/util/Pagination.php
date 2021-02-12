<?php

class Pagination {

    private static $pageLimit  = 5;
    private static $totalCount = 0;

    /**
     * 
     * @param type $pageLimit
     */
    static function setPageLimit($pageLimit) {
        Pagination::$pageLimit = $pageLimit;
    }

    /**
     * 
     * @return type
     */
    static function getPageLimit() {
        return Pagination::$pageLimit;
    }

    /**
     * 
     * @return type
     */
    static function getPageOffset() {

        return (Pagination::getPageIndex() - 1) *
                (Pagination::getPageLimit());
    }

    /**
     * 
     * @return type
     */
    static function getPageIndex() {
        return isset($_GET['page_index']) ? $_GET['page_index'] : 1;
    }

    /**
     * 
     * @param type $count
     */
    static function setTotalCount($count) {
        Pagination::$totalCount = $count;
    }

    /**
     * 
     * @return type
     */
    static function getTotalCount() {
        return Pagination::$totalCount;
    }

    /**
     * 
     * @return type
     */
    static function hasNextPage() {
        return (Pagination::getPageOffset() + Pagination::getPageLimit()) < Pagination::getTotalCount();
    }

    /**
     * 
     * @return type
     */
    static function hasPrevPage() {
        return Pagination::getPageIndex() > 1;
    }

    /**
     * 
     */
    static function display() {

        $pageIndex     = Pagination::getPageIndex();
        $nextPageIndex = $pageIndex + 1;
        $prevPageIndex = $pageIndex - 1;

        if (Pagination::hasPrevPage()) {
            echo "<a class='pagination' href='?page_index=$prevPageIndex'>Prev</a>";
        }

        echo '<span>' . Pagination::getPageOffset() . ' - ' . Pagination::getTotalCount() . '</span>';

        if (Pagination::hasNextPage()) {
            echo "<a class='pagination' href='?page_index=$nextPageIndex'>Next</a>";
        }
    }

}
