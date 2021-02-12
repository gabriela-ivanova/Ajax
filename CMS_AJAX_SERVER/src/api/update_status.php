<?php

/**
 * 
 * @return type
 */
function update_employee_status() {

    $streamObject = Request::jsonStream();

    $statusRequest = array(
        'status'          => $streamObject->status          ,
        'position'        => $streamObject->position        ,
        'company'         => $streamObject->company         ,
        'fullname'        => $streamObject->fullname        ,
        'phone'           => $streamObject->phone           ,
        'email'           => $streamObject->email           ,
        'nationality'     => $streamObject->nationality     ,  
        'birthdate'       => $streamObject->birthdate       ,  
        'drivelicense'    => $streamObject->drivelicense    ,  
        'workexperience'  => $streamObject->workexperience  ,  
        'education'       => $streamObject->education       ,  
        'language'        => $streamObject->language        ,  
        'skill'           => $streamObject->skill           ,  
        'message'         => $streamObject->message
    );


    if (Update::doesExists($statusRequest)) {

        return Response::ok(array(
                    'message' => 'Status changed successfully'                ,
                    'update'  => Update::status($streamObject->status         ,
                                                $streamObject->email          ,
                                                $streamObject->position)                                       
        ));
    }
    
    
}
