CREATE TABLE monsterjob.tb_employee (
    id              INTEGER AUTO_INCREMENT PRIMARY KEY ,
    position        VARCHAR(256)                       ,
    company         VARCHAR(256)                       ,
    fname 	    VARCHAR(256)                       , 
    lname 	    VARCHAR(256)                       ,
    phone           VARCHAR(256)                       ,
    email	    VARCHAR(256)                       ,
    nationality     VARCHAR(256)                       ,
    birthdate       VARCHAR(256)                       ,
    drivelicense    VARCHAR(256)                       ,
    workexperience  TEXT NULL                          ,
    education       TEXT NOT NULL                      ,
    language        TEXT NOT NULL                      ,
    skill           TEXT NOT NULL                      ,
    message         TEXT NULL 
);