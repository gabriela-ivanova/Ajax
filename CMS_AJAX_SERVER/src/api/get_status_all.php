<?php

/**
 * 
 * @return type
 */
function get_status_all() {

    $statusCollection = GetAll::status();
    return Response::ok(array('data' => $statusCollection));
}
