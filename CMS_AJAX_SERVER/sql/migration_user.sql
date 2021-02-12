CREATE TABLE monsterjob.tb_users (
    id         INTEGER AUTO_INCREMENT PRIMARY KEY ,
    fname      VARCHAR(256) NULL                  ,  
    lname      VARCHAR(256) NULL                  , 
    age        Varchar(3)   NULL                  ,
    uic        VARCHAR(256) NULL                  ,
    cname      VARCHAR(256) NULL                  , 
    industry   VARCHAR(256) NULL                  , 
    activity   VARCHAR(256) NULL                  ,  
    country    VARCHAR(30)                        ,
    city_town  VARCHAR(30)                        ,
    user_name  VARCHAR(256)                       , 
    email      VARCHAR(256)                       , 
    password   VARCHAR(256)
);