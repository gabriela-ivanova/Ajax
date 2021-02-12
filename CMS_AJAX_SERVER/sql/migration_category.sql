CREATE TABLE monsterjob.tm_categories(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(4000) NOT NULL
);

INSERT INTO monsterjob.tm_categories(title) VALUES('Търговия и продажби')             ;
INSERT INTO monsterjob.tm_categories(title) VALUES('ИТ')                              ;
INSERT INTO monsterjob.tm_categories(title) VALUES('Банки, кредитиране, застраховане');


CREATE TABLE monsterjob.tb_job_offer__categories(
    job_offer_id INTEGER,
    category_id  INTEGER,
    PRIMARY KEY(job_offer_id, category_id)
);

INSERT INTO monsterjob.tb_job_offer__categories(job_offer_id, category_id) VALUES(1, 1);
INSERT INTO monsterjob.tb_job_offer__categories(job_offer_id, category_id) VALUES(2, 1);
INSERT INTO monsterjob.tb_job_offer__categories(job_offer_id, category_id) VALUES(3, 2);
INSERT INTO monsterjob.tb_job_offer__categories(job_offer_id, category_id) VALUES(4, 2);
INSERT INTO monsterjob.tb_job_offer__categories(job_offer_id, category_id) VALUES(5, 3);
INSERT INTO monsterjob.tb_job_offer__categories(job_offer_id, category_id) VALUES(6, 3);




              
       