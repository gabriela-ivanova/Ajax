<?php

/**
 * 
 * @return type
 */
function get_position_all() {

    $positionCollection = Employee::getAll();
    return Response::ok(array('data' => $positionCollection));
}

/**
 * 
 * @param type $id
 * @return type
 */
function get_position_single($id) {

    $positionEntity = Employee::get($id);


    if (is_null($positionEntity)) {

        return Response::notFound(array('message' => 'Error no data found for this blog post entry. Please specify existing number'));
    }
    return Response::ok(array('data' => $positionEntity));
}

/**
 * 
 * @param type $positionId
 * @return type
 */
function get_by_position($positionId) {

    $positionCollection = Employee::getByPosition($positionId);
    return Response::ok(array('data' => $positionCollection)) ;
}
