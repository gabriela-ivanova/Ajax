<?php

/**
 * 
 * @return type
 */
function get_status() {

    $statusCollection = Status::get();
    return Response::ok(array('data' => $statusCollection));
}
