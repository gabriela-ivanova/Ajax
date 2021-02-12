CREATE TABLE monsterjob.tm_position(
       id      INTEGER AUTO_INCREMENT PRIMARY KEY ,
       title   VARCHAR(256)                       ,
       company VARCHAR(256)
);

INSERT INTO monsterjob.tm_position(title, company) VALUES('Мениджър клиенти', 'Britanica OOD')                        ;
INSERT INTO monsterjob.tm_position(title, company) VALUES('Продавач консултант', 'Bed Bath & Table')                  ;
INSERT INTO monsterjob.tm_position(title, company) VALUES('Python Developer', 'Electrosfera EOOD')                    ;
INSERT INTO monsterjob.tm_position(title, company) VALUES('Senior Oracle DBA', 'DXC Technology')                      ;
INSERT INTO monsterjob.tm_position(title, company) VALUES('Главен експерт - "Картови операции"', 'Admiral Bank EOOD') ;
INSERT INTO monsterjob.tm_position(title, company) VALUES('Senior Accountant','Prima Intelect EAD')                   ;
       