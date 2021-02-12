CREATE TABLE monsterjob.tm_roles (
    id     iNTEGER auto_increment PRIMARY KEY,
    title  VARCHAR(256) NOT NULL
);

INSERT INTO  monsterjob.tm_roles(title) VALUES('EMPLOYEE');
INSERT INTO  monsterjob.tm_roles(title) VALUES('EMPLOYER');
INSERT INTO  monsterjob.tm_roles(title) VALUES('HR'	 );
INSERT INTO  monsterjob.tm_roles(title) VALUES('SUPER'	 );

CREATE TABLE monsterjob.tb_user__role(
    user_id INTEGER,
    role_id INTEGER,
    PRIMARY KEY(user_id, role_id)
);