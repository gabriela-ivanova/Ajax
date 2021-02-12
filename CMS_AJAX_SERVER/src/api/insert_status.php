<?php

/**
 * 
 * @return type
 */
function insert_employee_status() {
    // както при signin и тук ще получаваме обект
    $streamObject = Request::jsonStream();

    $statusRequest = array(
        'status'          => $streamObject->status         ,
        'position'        => $streamObject->position       ,
        'company'         => $streamObject->company        ,
        'fullname'        => $streamObject->fullname       ,
        'phone'           => $streamObject->phone          ,
        'email'           => $streamObject->email          ,
        'nationality'     => $streamObject->nationality    ,  
        'birthdate'       => $streamObject->birthdate      ,  
        'drivelicense'    => $streamObject->drivelicense   ,  
        'workexperience'  => $streamObject->workexperience ,  
        'education'       => $streamObject->education      ,  
        'language'        => $streamObject->language       ,  
        'skill'           => $streamObject->skill          ,  
        'message'         => $streamObject->message        
    );


    if (Insert::doesExists($statusRequest)) {

        return Response::error(array(
                    'message' => 'Status already exists'
        ));
    }


    if (Insert::status($statusRequest)) {

        return Response::ok(array(
                    'message' => 'Status saved successfully'
        ));
    }
    return Response::error(array(
                    'message'     => 'Something went wrong'
    ));
}
