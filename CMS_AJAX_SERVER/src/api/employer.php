<?php

/**
 * 
 * @return type
 */
function create_new_job_offer() {

    $streamObject = Request::jsonStream();

    $createJobOffer = array(
        'title'        => $streamObject->title        ,
        'company_name' => $streamObject->company_name ,
        'content'      => $streamObject->content
    );


    if (Employer::doesExists($createJobOffer)) {
        return Response::error(array(
                    'message'  => 'Job offer already exists'
        ));
    }

    if (Employer::createNewJobOffer($createJobOffer)) {
        return Response::ok(array(
                    'message'  => 'Job offer created successfully',
                    'category' => Employer::insertJobCategory(Database::getLastInsertedId(), 1)
        ));
    }

    return Response::error(array(
                'message'      => 'Something went wrong'
    ));
}
