<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Configuración de la base de datos
$host = "54.159.51.246";
$usuario = "sa";
$pass = "Uni2024@";
$base = "pcw";
$puerto = 90;

// Intentar la conexión a la base de datos
$conexion = mysqli_connect($host, $usuario, $pass, $base, $puerto);

// Verificar la conexión
if (!$conexion) {
    die("Conexión fallida: " . mysqli_connect_error());
} else {
    echo "Conexión exitosa a la base de datos '$base'.";
}

// Realizar una consulta simple para verificar la conectividad
$consulta = "SHOW TABLES";
$resultado = mysqli_query($conexion, $consulta);

if ($resultado) {
    echo "<br><br>Tablas en la base de datos '$base':<br>";
    while ($fila = mysqli_fetch_row($resultado)) {
        echo $fila[0] . "<br>";
    }
} else {
    echo "<br>Error en la consulta: " . mysqli_error($conexion);
}

// Cerrar la conexión
mysqli_close($conexion);
