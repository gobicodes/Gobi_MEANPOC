CREATE database wu_gcc;
CREATE USER 'gcc'@'localhost' identified BY 'password';
GRANT ALL privileges ON wu_gcc.* TO 'gcc'@'localhost' identified BY 'password';
USE wu_gcc;
CREATE TABLE roles (
    role_id INT PRIMARY key NOT NULL auto_increment,
    role_name VARCHAR(100));
CREATE TABLE users (
    user_id INT PRIMARY key NOT NULL auto_increment,
    role_id INT,
    user_name VARCHAR(100),
    email_address VARCHAR(100),
    password VARCHAR(50),
    FOREIGN key (role_id) REFERENCES roles (role_id));

INSERT INTO roles (role_name) VALUES ('ADMIN');
INSERT INTO roles (role_name) VALUES ('CRMUSER');
INSERT INTO roles (role_name) VALUES ('OTHERUSER');
INSERT INTO roles (role_name) VALUES ('LOCALUSER');
INSERT INTO users (user_name, email_address, password, role_id) 
  VALUES ('lister', 'yourmailid', '123', 
          (SELECT role_id FROM roles WHERE role_name = 'ADMIN'));
