<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once('./Back/models/area.model.php');

$area = new Area();

// Probar obtener todas las áreas
echo "<h2>Todas las Áreas:</h2>";
$areas = $area->todos();
while ($row = $areas->fetch_assoc()) {
    echo "ID: " . $row["id"] . " - Nombre: " . $row["nombre"] . "<br>";
}

// Probar crear una nueva área
echo "<h2>Crear Nueva Área:</h2>";
$resultado = $area->crear('Área de Prueba');
echo $resultado ? "Área creada exitosamente.<br>" : "Error al crear el área.<br>";

// Probar obtener un área por ID
echo "<h2>Obtener Área por ID:</h2>";
$unaArea = $area->uno('1'); // Reemplaza '1' con un ID existente en tu base de datos
if ($fila = $unaArea->fetch_assoc()) {
    echo "ID: " . $fila["id"] . " - Nombre: " . $fila["nombre"] . "<br>";
} else {
    echo "Área no encontrada.<br>";
}

// Probar actualizar un área
echo "<h2>Actualizar Área:</h2>";
$actualizarArea = $area->actualizar('1', 'Área Actualizada'); // Reemplaza '1' con un ID existente
echo $actualizarArea ? "Área actualizada exitosamente.<br>" : "Error al actualizar el área.<br>";

// Probar eliminar un área
echo "<h2>Eliminar Área:</h2>";
$eliminarArea = $area->eliminar('1'); // Reemplaza '1' con un ID existente
echo $eliminarArea ? "Área eliminada exitosamente.<br>" : "Error al eliminar el área.<br>";
