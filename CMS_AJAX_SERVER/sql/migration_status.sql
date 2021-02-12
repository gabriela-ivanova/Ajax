CREATE TABLE monsterjob.tm_status (
    id    iNTEGER auto_increment PRIMARY KEY,
    title VARCHAR(256) NOT NULL
);

INSERT INTO  monsterjob.tm_status(title) VALUES('APPROVED FOR INTERVIEW');
INSERT INTO  monsterjob.tm_status(title) VALUES('INTERVIEWED'           );
INSERT INTO  monsterjob.tm_status(title) VALUES('APPROVED'	        );
INSERT INTO  monsterjob.tm_status(title) VALUES('REJECTED'	        );
