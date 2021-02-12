<?php

/**
 * 
 * @return type
 */
function apply_for_job() {
    // както при signin и тук ще получаваме обект
    $streamObject = Request::jsonStream();

    $applyRequest  = array(
        'position'          => $streamObject->position        ,
        'company'           => $streamObject->company         ,
        'fname'             => $streamObject->fname           ,
        'lname'             => $streamObject->lname           ,
        'phone'             => $streamObject->phone           ,
        'email'             => $streamObject->email           ,
        'nationality'       => $streamObject->nationality     ,
        'birthdate'         => $streamObject->birthdate       ,
        'drivelicense'      => $streamObject->drivelicense    ,
        'workexperience'    => $streamObject->workexperience  ,
        'education'         => $streamObject->education       ,
        'language'          => $streamObject->language        ,
        'skill'             => $streamObject->skill           ,
        'message'           => $streamObject->message         ,
    );

    if (Apply::doesExists($applyRequest)) {

        return Response::error(array(
                    'message' => 'You have already been applied for this position'
        ));
    }

    if (Apply::applyForJob($applyRequest)) {

        return Response::ok(array(
                    'message'  => 'You applied successfully',
                    'position' => Apply::insertJobCategory(Database::getLastInsertedId(), 1)
        ));
    }
    return Response::error(array(
                'message'      => 'Something went wrong'
    ));
}
