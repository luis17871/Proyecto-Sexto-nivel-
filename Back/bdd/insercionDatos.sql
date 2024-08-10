use pcw;

-- Insertar roles
INSERT INTO Rol (id, nombre) VALUES
('1', 'Administrador'),
('2', 'Técnico'),
('3', 'Vendedor'),
('4', 'Soporte al Cliente');

-- Insertar áreas
INSERT INTO Area (id, nombre) VALUES
('1', 'Ventas'),
('2', 'Servicio Técnico'),
('3', 'Atención al Cliente'),
('4', 'Almacén');

-- Insertar valores de rendimiento
INSERT INTO Valores_Rendimiento (id, nombre) VALUES
('1', 'Excelente'),
('2', 'Bueno'),
('3', 'Regular'),
('4', 'Necesita Mejorar');

-- Insertar usuarios
INSERT INTO Usuario (id, nombres, apellidos, email, nombreUsuario, identificacion, fechaNacimiento, sexo, telefono, celular, observaciones, fechaCreacion, estado, rol_id) VALUES
('1', 'Juan', 'Pérez', 'juan.perez@empresa.com', 'jperez', '1234567890', '1985-05-15', 1, '555-1234', '555-5678', 'Técnico senior', '2023-01-01 09:00:00', 1, '2'),
('2', 'María', 'González', 'maria.gonzalez@empresa.com', 'mgonzalez', '0987654321', '1990-08-20', 0, '555-2345', '555-6789', 'Vendedora estrella', '2023-01-02 10:00:00', 1, '3'),
('3', 'Carlos', 'Rodríguez', 'carlos.rodriguez@empresa.com', 'crodriguez', '1122334455', '1988-03-10', 1, '555-3456', '555-7890', 'Administrador del sistema', '2023-01-03 11:00:00', 1, '1'),
('4', 'Ana', 'Martínez', 'ana.martinez@empresa.com', 'amartinez', '2233445566', '1992-07-12', 0, '555-4567', '555-8901', 'Especialista en ventas corporativas', '2023-01-04 09:30:00', 1, '3'),
('5', 'Pedro', 'Sánchez', 'pedro.sanchez@empresa.com', 'psanchez', '3344556677', '1987-11-25', 1, '555-5678', '555-9012', 'Técnico de reparación de laptops', '2023-01-05 10:45:00', 1, '2'),
('6', 'Lucía', 'Fernández', 'lucia.fernandez@empresa.com', 'lfernandez', '4455667788', '1993-03-18', 0, '555-6789', '555-0123', 'Atención al cliente, turno mañana', '2023-01-06 11:15:00', 1, '4'),
('7', 'Miguel', 'López', 'miguel.lopez@empresa.com', 'mlopez', '5566778899', '1986-09-30', 1, '555-7890', '555-1234', 'Administrador de redes', '2023-01-07 14:00:00', 1, '2'),
('8', 'Carmen', 'Ruiz', 'carmen.ruiz@empresa.com', 'cruiz', '6677889900', '1991-05-05', 0, '555-8901', '555-2345', 'Vendedora de equipos de gaming', '2023-01-08 15:30:00', 1, '3'),
('9', 'Javier', 'Gómez', 'javier.gomez@empresa.com', 'jgomez', '7788990011', '1989-12-20', 1, '555-9012', '555-3456', 'Soporte técnico remoto', '2023-01-09 16:45:00', 1, '4'),
('10', 'Isabel', 'Díaz', 'isabel.diaz@empresa.com', 'idiaz', '8899001122', '1994-02-28', 0, '555-0123', '555-4567', 'Gerente de ventas', '2023-01-10 09:00:00', 1, '1'),
('11', 'Roberto', 'Herrera', 'roberto.herrera@empresa.com', 'rherrera', '9900112233', '1985-08-15', 1, '555-1234', '555-5678', 'Técnico senior de servidores', '2023-01-11 10:15:00', 1, '2'),
('12', 'Sofía', 'Vargas', 'sofia.vargas@empresa.com', 'svargas', '0011223344', '1990-04-10', 0, '555-2345', '555-6789', 'Especialista en ciberseguridad', '2023-01-12 11:30:00', 1, '2'),
('13', 'Diego', 'Morales', 'diego.morales@empresa.com', 'dmorales', '1122334455', '1988-06-22', 1, '555-3456', '555-7890', 'Vendedor de soluciones empresariales', '2023-01-13 14:45:00', 1, '3'),
('14', 'Laura', 'Ortiz', 'laura.ortiz@empresa.com', 'lortiz', '2233445566', '1993-10-05', 0, '555-4567', '555-8901', 'Coordinadora de servicio al cliente', '2023-01-14 16:00:00', 1, '4'),
('15', 'Andrés', 'Mendoza', 'andres.mendoza@empresa.com', 'amendoza', '3344556677', '1987-01-17', 1, '555-5678', '555-9012', 'Técnico de impresoras y plotters', '2023-01-15 09:30:00', 1, '2'),
('16', 'Valentina', 'Espinoza', 'valentina.espinoza@empresa.com', 'vespinoza', '4455667788', '1995-09-28', 0, '555-6789', '555-0123', 'Especialista en nuevos modelos de computadoras y ofertas de servicios técnicos', '2023-01-16 10:00:00', 1, '3'),
('17', 'Gabriel', 'Navarro', 'gabriel.navarro@empresa.com', 'gnavarro', '5566778899', '1986-04-14', 1, '555-7890', '555-1234', 'Técnico especializado en reparación de laptops y desktops', '2023-01-17 11:15:00', 1, '2'),
('18', 'Camila', 'Torres', 'camila.torres@empresa.com', 'ctorres', '6677889900', '1992-12-03', 0, '555-8901', '555-2345', 'Analista de ventas', '2023-01-18 14:30:00', 1, '1'),
('19', 'Alejandro', 'Rojas', 'alejandro.rojas@empresa.com', 'arojas', '7788990011', '1989-07-19', 1, '555-9012', '555-3456', 'Coordinador de de equipos y piezas de repuesto', '2023-01-19 15:45:00', 1, '4'),
('20', 'Daniela', 'Paredes', 'daniela.paredes@empresa.com', 'dparedes', '8899001122', '1993-02-08', 0, '555-0123', '555-4567', 'Encargada del software de diagnóstico para el equipo de soporte técnico', '2023-01-20 16:00:00', 1, '2');
-- Insertar grupos
INSERT INTO Grupos (id, nombre, descripcion, area, observaciones, area_id) VALUES
('1', 'Equipo de Ventas', 'Grupo encargado de las ventas de equipos', 'Ventas', 'Equipo de alto rendimiento', '1'),
('2', 'Soporte Técnico', 'Equipo de mantenimiento y reparación', 'Servicio Técnico', 'Especialistas en hardware y software', '2'),
('3', 'Atención al Cliente', 'Equipo de soporte y atención al cliente', 'Atención al Cliente', 'Enfoque en satisfacción del cliente', '3');

-- Insertar relaciones usuario-grupo
INSERT INTO Usuario_Grupo (usuario_id, grupo_id) VALUES
('1', '2'),
('2', '1'),
('3', '3');

-- Insertar tareas
INSERT INTO Tareas (id, nombre, descripcion) VALUES
('1', 'Mantenimiento de PC', 'Realizar mantenimiento preventivo de computadoras'),
('2', 'Venta de Laptops', 'Gestionar la venta de laptops a clientes'),
('3', 'Atención de Reclamos', 'Manejar y resolver reclamos de clientes');

-- Insertar asignaciones de tareas
INSERT INTO Asignacion_de_Tareas (id, tipoAsignacion, idGrupo, idUsuario, idTarea, estado, prioridad) VALUES
('1', 1, '2', '1', '1', 1, 'Alta'),
('2', 2, '1', '2', '2', 1, 'Media'),
('3', 1, '3', '3', '3', 1, 'Normal');

-- Insertar rendimientos
INSERT INTO Rendimiento (id, idValorRendimiento, idAsignacionTarea, valor) VALUES
('1', '1', '1', 95),
('2', '2', '2', 85),
('3', '2', '3', 80);

-- Insertar informes de rendimiento
INSERT INTO InformeRendimiento (id, fecha, idGrupo, idUsuario) VALUES
('1', '2023-06-30', '2', '1'),
('2', '2023-06-30', '1', '2'),
('3', '2023-06-30', '3', '3');

-- Insertar relaciones rendimiento-informe
INSERT INTO Rendimiento_InformeRendimiento (rendimiento_id, informeRendimiento_id) VALUES
('1', '1'),
('2', '2'),
('3', '3');