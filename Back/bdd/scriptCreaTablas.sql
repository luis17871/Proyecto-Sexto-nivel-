-- Tabla Rol
CREATE TABLE Rol (
    id VARCHAR(36) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Tabla Area
CREATE TABLE Area (
    id VARCHAR(36) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Tabla Valores_Rendimiento
CREATE TABLE Valores_Rendimiento (
    id VARCHAR(36) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

-- Tabla Usuario
CREATE TABLE Usuario (
    id VARCHAR(36) PRIMARY KEY,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    nombreUsuario VARCHAR(255) NOT NULL,
    identificacion VARCHAR(255) NOT NULL,
    fechaNacimiento DATE,
    sexo BOOLEAN,
    telefono VARCHAR(20),
    celular VARCHAR(20),
    observaciones TEXT,
    fechaCreacion DATETIME,
    estado BOOLEAN,
    rol_id VARCHAR(36),
    FOREIGN KEY (rol_id) REFERENCES Rol(id)
);

-- Tabla Grupos
CREATE TABLE Grupos (
    id VARCHAR(36) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    area VARCHAR(255),
    observaciones TEXT,
    area_id VARCHAR(36),
    FOREIGN KEY (area_id) REFERENCES Area(id)
);

-- Tabla Usuario_Grupo (relación muchos a muchos entre Usuario y Grupos)
CREATE TABLE Usuario_Grupo (
    usuario_id VARCHAR(36),
    grupo_id VARCHAR(36),
    PRIMARY KEY (usuario_id, grupo_id),
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (grupo_id) REFERENCES Grupos(id)
);

-- Tabla Tareas
CREATE TABLE Tareas (
    id VARCHAR(36) PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT
);

-- Tabla Asignacion_de_Tareas
CREATE TABLE Asignacion_de_Tareas (
    id VARCHAR(36) PRIMARY KEY,
    tipoAsignacion INT,
    idGrupo VARCHAR(36),
    idUsuario VARCHAR(36),
    idTarea VARCHAR(36),
    estado BOOLEAN,
    prioridad VARCHAR(50),
    FOREIGN KEY (idGrupo) REFERENCES Grupos(id),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id),
    FOREIGN KEY (idTarea) REFERENCES Tareas(id)
);

-- Tabla Rendimiento
CREATE TABLE Rendimiento (
    id VARCHAR(36) PRIMARY KEY,
    idValorRendimiento VARCHAR(36),
    idAsignacionTarea VARCHAR(36),
    valor INT,
    FOREIGN KEY (idValorRendimiento) REFERENCES Valores_Rendimiento(id),
    FOREIGN KEY (idAsignacionTarea) REFERENCES Asignacion_de_Tareas(id)
);

-- Tabla InformeRendimiento
CREATE TABLE InformeRendimiento (
    id VARCHAR(36) PRIMARY KEY,
    fecha DATE,
    idGrupo VARCHAR(36),
    idUsuario VARCHAR(36),
    FOREIGN KEY (idGrupo) REFERENCES Grupos(id),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(id)
);

-- Tabla Rendimiento_InformeRendimiento (relación muchos a muchos)
CREATE TABLE Rendimiento_InformeRendimiento (
    rendimiento_id VARCHAR(36),
    informeRendimiento_id VARCHAR(36),
    PRIMARY KEY (rendimiento_id, informeRendimiento_id),
    FOREIGN KEY (rendimiento_id) REFERENCES Rendimiento(id),
    FOREIGN KEY (informeRendimiento_id) REFERENCES InformeRendimiento(id)
);