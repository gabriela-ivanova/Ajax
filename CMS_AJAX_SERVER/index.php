<?php

include './src/db/Database.php';
include './src/util/Pagination.php';
include './src/util/Request.php';
include './src/util/Response.php';
include './config/routes.php';
include './src/util/Router.php';

include './src/models/JobOffer.php';
include './src/models/Category.php';
include './src/models/User.php';
include './src/models/Employer.php';
include './src/models/Apply.php';
include './src/models/Employee.php';
include './src/models/Position.php';
include './src/models/InsertStatus.php';
include './src/models/GetStatusAll.php';
include './src/models/GetEmployeeStatus.php';
include './src/models/UpdateStatus.php';
include './src/models/Auth.php';

Router::bootstrap();

