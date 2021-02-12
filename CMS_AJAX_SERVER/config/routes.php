<?php

function getRequestActionMapping() {
        
    return array(
        'category' => 'category_manager'
    );
}

function getRequestEndpointMapping() {
          
    return array(
        //method: GET
        
        array(
            'endpoint'  => 'job_offer',
            'execute'   => 'get_job_offer_all',
            'method'    => 'GET', 
        ),
        
        array(
            'endpoint'  => 'job_offer/{id}',
            'execute'   => 'get_job_offer_single',
            'method'    => 'GET'
        ),
        
        array(
            'endpoint'  => 'job_offer/category/{category_id}',
            'execute'   => 'get_job_offer_by_category',
            'method'    => 'GET'
        ),
        
        array(
            'endpoint'  => 'category',
            'execute'   => 'get_category_all',
            'method'    => 'GET'
        ),
        
        array(
            'endpoint'  => 'category/{id}',
            'execute'   => 'get_category_single',
            'method'    => 'GET'
        ),     
        
        array(
            'endpoint'  => 'user/signin',
            'execute'   => 'sign_in_user',
            'method'    => 'POST'
        ),
        
                
        array(
            'endpoint'  => 'user/signup',
            'execute'   => 'sign_up_user',
            'method'    => 'POST'
        ),
        
        
        array(
            'endpoint'  => 'user/{id}',
            'execute'   => 'get_user',
            'method'    => 'GET'
        ),
        

        array(
            'endpoint'  => 'contact',
            'execute'   => 'get_all_contacts',
            'method'    => 'GET',
        ),
        
        array(
            'endpoint'  => 'employer/create_new_job_offer',
            'execute'   => 'create_new_job_offer',
            'method'    => 'POST'
        ),
        
        array(
            'endpoint'  => 'apply',
            'execute'   => 'apply_for_job',
            'method'    => 'POST'
        ),
        
        array(
            'endpoint'  => 'search_job',
            'execute'   => 'search_job_offer',
            'method'    => 'GET'
        ),
        
        
        array(
            'endpoint'  => 'employee',
            'execute'   => 'get_position_all',
            'method'    => 'GET'
        ),
          

        array(
            'endpoint'  => 'employee/{id}',
            'execute'   => 'get_position_single',
            'method'    => 'GET'
        ),
        
        array(
            'endpoint'  => 'employee/position/{position_id}',
            'execute'   => 'get_by_position',
            'method'    => 'GET'
        ),
        
        array(
            'endpoint'  => 'position',
            'execute'   => 'get_position_all',
            'method'    => 'GET'
        ),
        
        array(
            'endpoint'  => 'position/{id}',
            'execute'   => 'get_position_single',
            'method'    => 'GET',
        ), 
        

        array(
            'endpoint'  => 'get_status_all',
            'execute'   => 'get_status_all',
            'method'    => 'GET'
        ),
        
        
        array(
            'endpoint'  => 'get_employee_status',
            'execute'   => 'get_status',
            'method'    => 'GET'
        ),
        
        
        array(
            'endpoint'  => 'insert_status',
            'execute'   => 'insert_employee_status',
            'method'    => 'POST'
        ),
     
        array(
            'endpoint'  => 'update_status',
            'execute'   => 'update_employee_status',
            'method'    => 'POST'
        )
 
    );
}