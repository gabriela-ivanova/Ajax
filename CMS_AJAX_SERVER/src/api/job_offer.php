<?php

/**
 * 
 * @return type
 */
function get_job_offer_all() {

    $jobOfferCollection = JobOffer::getAll();
    return Response::ok(array('data' => $jobOfferCollection));
}

/**
 * 
 * @param type $jobId
 * @return type
 */
function get_job_offer_single($jobId) {

    //return single blog post
    //$blogPostEntity = Database::get("SELECT * FROM tb_blog_post a WHERE a.id = $postId");
    $jobOfferEntity = JobOffer::get($jobId);

    //проверяваме дали $blogPostEntity има стойност null
    if (is_null($jobOfferEntity)) {
        return Response::notFound(array('message' => 'Error no data found for this blog post entry. Please specify existing number'));
    }
    return Response::ok(array('data' => $jobOfferEntity));
}

/**
 * 
 * @param type $categoryId
 * @return type
 */
function get_job_offer_by_category($categoryId) {

    //return by category
    //селектираме по категории
    //blog_post/category/10

    $jobOfferCollection = JobOffer::getByCategory($categoryId);

    return Response::ok(array('data' => $jobOfferCollection));
}
