<?php

/**
 * 
 * @param type $id
 */
function get_user($id) {
    return Response::ok();
}

/**
 * 
 * @return type
 */
function sign_in_user() {

    $streamObject = Request::jsonStream();


    $userRequest = array(
        'email'    => $streamObject->email,
        'password' => hash('sha256', $streamObject->password)
    );

    $userRecord = User::get($userRequest);

    if ($userRecord) {

        // var_dump($userRecord);
        // прихващаме си tokken

        $tokken = Auth::createNewTokken($userRequest);
        $role = $userRecord['roles'][0]['role_title'];
        $fname = $userRecord['user']['fname']        ;
        $lname = $userRecord['user']['lname']        ;
        $cname = $userRecord['user']['cname']        ;
        $email = $userRecord['user']['email']        ;

        return Response::ok(array(
                    'data' => array(
                            'tokken' => $tokken,
                            'role'   => $role   ,
                            'fname'  => $fname  ,
                            'lname'  => $lname  ,
                            'cname'  => $cname  ,
                            'email'  => $email
                    ),
                    'message'    => 'User is logged in successfully'
        ));
    }
    return Response::notFound(array(
                'message'        => 'This user does not exists'));
}

/**
 * 
 * @return type
 */
function sign_up_user() {
    // както при signin и тук ще получаваме обект
    $streamObject = Request::jsonStream();

    $userRequest = array(
        'fname'     => $streamObject->fname                    ,
        'lname'     => $streamObject->lname                    ,
        'age'       => $streamObject->age                      ,
        'uic'       => $streamObject->uic                      ,
        'cname'     => $streamObject->cname                    ,
        'industry'  => $streamObject->industry                 ,
        'activity'  => $streamObject->activity                 ,
        'country'   => $streamObject->country                  ,
        'city_town' => $streamObject->city_town                ,
        'user_name' => $streamObject->user_name                ,
        'email'     => $streamObject->email                    ,
        'password'  => hash('sha256', $streamObject->password)
    );



    if (User::doesExists($userRequest)) {

        return Response::error(array(
            'message' => 'The username or email is already used'
        ));
    }

    if (User::signup($userRequest)) {

        return Response::ok(array(
            'message' => 'User created successfully',
            'role'    => User::assigneRoleToUser(Database::getLastInsertedId(), 1)
        ));
    }

    return Response::error(array(
        'message'     => 'Something went wrong'
    ));
}
