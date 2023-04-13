DROP DATABASE IF EXISTS premiosOrden;
CREATE DATABASE premiosOrden;
USE premiosOrden;

--
-- Base de datos: `premiosOrden`
--

-- TABLAS


CREATE TABLE PREMIOS (
  id INT NOT NULL ,
  nombre VARCHAR(80) NOT NULL,
  PRIMARY KEY (id)
);



CREATE TABLE ARTISTAS (
  id int NOT NULL,
  nombre VARCHAR(80) NOT NULL,
  foto VARCHAR(400) DEFAULT NULL,
  ubicacion VARCHAR(400) DEFAULT NULL,
  descripcion VARCHAR(400) DEFAULT NULL,
  idPremio INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (idPremio) REFERENCES premios(id)
);


CREATE TABLE USUARIOS (
  id int NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  user VARCHAR(10) NOT NULL, 
  passwort VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

-- --------------------------------------------------------
-- INSERTAR DATOS
-- --------------------------------------------------------


INSERT INTO PREMIOS VALUES
    (1, 'The Fact Music Awards'),
    (2, 'MAMA'),
    (3, 'AMA'),
    (4, 'Billboard Music Awards'),
    (5, 'Show Champion');


INSERT INTO ARTISTAS VALUES
(1, 'Stray Kids', 'https://i.pinimg.com/564x/5f/a3/b4/5fa3b4746866c11ff300a13acaedb0d3.jpg', 'HermosaKSPO Dome, Seúl - Corea del Sur', 'Nominados a los premios de Artist Of The Year y Fan N Star Four N Star Award.', 1);



