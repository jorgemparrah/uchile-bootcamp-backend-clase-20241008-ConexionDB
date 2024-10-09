-- Seleccionar la base de datos
USE universidad;

-- Insertar datos en la tabla departamentos
INSERT INTO departamentos (id, area) VALUES
(1, 'Matemáticas'),
(2, 'Ciencias Computacionales'),
(3, 'Física'),
(4, 'Ingeniería Química'),
(5, 'Literatura'),
(6, 'Biología'),
(7, 'Química'),
(8, 'Historia'),
(9, 'Filosofía'),
(10, 'Sociología');

-- Insertar datos en la tabla cursos
INSERT INTO cursos (id, nombre, id_departamento) VALUES
(1, 'Álgebra', 1),
(2, 'Cálculo', 1),
(3, 'Programación', 2),
(4, 'Estructuras de Datos', 2),
(5, 'Mecánica Clásica', 3),
(6, 'Termodinámica', 3),
(7, 'Química Orgánica', 7),
(8, 'Historia de Roma', 8),
(9, 'Literatura Medieval', 5),
(10, 'Filosofía Moderna', 9);

-- Insertar datos en la tabla estudiantes
INSERT INTO estudiantes (rut, nombre_completo, fecha_nacimiento, direccion, telefonos) VALUES
('12345678-9', 'Juan Pérez', '2000-01-15', 'Calle Falsa 123', '123456789'),
('23456789-0', 'María González', '1999-02-20', 'Avenida Siempre Viva 456', '987654321'),
('34567890-1', 'Carlos Díaz', '2001-03-30', 'Calle 456', '564738291'),
('45678901-2', 'Ana Torres', '2000-04-05', 'Calle Principal 789', '192837465'),
('56789012-3', 'Pedro Flores', '1998-05-10', 'Calle Segunda 101', '273645819'),
('67890123-4', 'Lucía Moreno', '1999-06-12', 'Calle Tercera 202', '384756192'),
('78901234-5', 'Jorge Castillo', '2000-07-18', 'Avenida Principal 303', '475839201'),
('89012345-6', 'Sofía Paredes', '2001-08-25', 'Calle Cuarta 404', '573829102'),
('90123456-7', 'Fernando Núñez', '1997-09-17', 'Avenida Central 505', '647392810'),
('01234567-8', 'Isabel Reyes', '1998-10-10', 'Calle Quinta 606', '738291045');

-- Insertar datos en la tabla calificaciones
INSERT INTO calificaciones (rut_estudiante, id_curso, semestre, calificacion) VALUES
('12345678-9', 1, '2023-1', 85),
('12345678-9', 3, '2023-1', 90),
('23456789-0', 2, '2023-2', 78),
('34567890-1', 4, '2023-1', 88),
('45678901-2', 5, '2023-2', 91),
('56789012-3', 6, '2023-1', 84),
('67890123-4', 7, '2023-2', 76),
('78901234-5', 8, '2023-1', 89),
('89012345-6', 9, '2023-2', 92),
('90123456-7', 10, '2023-1', 80);

-- Insertar datos en la tabla profesores
INSERT INTO profesores (rut, nombres, apellidos, direccion, telefonos, id_departamento) VALUES
('23456789-0', 'Luis', 'Martínez', 'Calle Central 123', '123654789', 1),
('34567890-1', 'Carmen', 'López', 'Avenida Libertad 456', '987123654', 2),
('45678901-2', 'Pablo', 'Hernández', 'Calle Secundaria 789', '654987321', 3),
('56789012-3', 'Miguel', 'Ramírez', 'Avenida Universidad 101', '321654987', 4),
('67890123-4', 'Lorena', 'Vega', 'Calle Norte 202', '987456321', 5),
('78901234-5', 'Raúl', 'Mendoza', 'Calle Este 303', '654321987', 6),
('89012345-6', 'Julia', 'Suárez', 'Calle Oeste 404', '321987654', 7),
('90123456-7', 'Francisco', 'Rojas', 'Calle Sur 505', '123987654', 8),
('01234567-8', 'Lucía', 'Fernández', 'Avenida Principal 606', '987654123', 9),
('12345678-9', 'Esteban', 'Pérez', 'Calle Secundaria 707', '654789321', 10);

-- Insertar datos en la tabla profesor_curso
INSERT INTO profesor_curso (rut_profesor, id_curso, semestre) VALUES
('23456789-0', 1, '2023-1'),
('23456789-0', 2, '2023-2'),
('34567890-1', 3, '2023-1'),
('34567890-1', 4, '2023-2'),
('45678901-2', 5, '2023-1'),
('45678901-2', 6, '2023-2'),
('56789012-3', 7, '2023-1'),
('67890123-4', 8, '2023-2'),
('78901234-5', 9, '2023-1'),
('89012345-6', 10, '2023-2');
