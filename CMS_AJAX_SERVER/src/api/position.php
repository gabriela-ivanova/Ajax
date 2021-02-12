<?php

/**
 * 
 * @return type
 */
function get_position_all() {
    $positionCollection = Position::getAll();
    return Response::ok(array('data' => $positionCollection));
}

/**
 * 
 * @param type $id
 * @return 
 */
function get_position_single($id) {

    $requestResult = Position::get($id);
    return Response::ok(array('data' => $requestResult));
}
