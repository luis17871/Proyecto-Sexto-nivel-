<?php

use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     title="API de Áreas",
 *     version="1.0.0",
 *     description="API para la gestión de áreas"
 * )
 */

/**
 * @OA\Tag(
 *     name="Áreas",
 *     description="Operaciones relacionadas con las áreas"
 * )
 */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

require_once('../models/area.model.php');
$area = new Area();

/**
 * @OA\Get(
 *     path="/areas",
 *     tags={"Áreas"},
 *     summary="Obtiene todas las áreas",
 *     @OA\Response(
 *         response=200,
 *         description="Lista de áreas"
 *     )
 * )
 */
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
        $resultado = $area->uno($_GET['id']);
    } else {
        $resultado = $area->todos();
    }
    echo json_encode($resultado);
}

/**
 * @OA\Post(
 *     path="/areas",
 *     tags={"Áreas"},
 *     summary="Crea una nueva área",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             required={"nombre"},
 *             @OA\Property(property="nombre", type="string")
 *         )
 *     ),
 *     @OA\Response(
 *         response=201,
 *         description="Área creada exitosamente"
 *     )
 * )
 */
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $resultado = $area->crear($data['nombre']);
    echo json_encode($resultado);
}

/**
 * @OA\Put(
 *     path="/areas",
 *     tags={"Áreas"},
 *     summary="Actualiza un área existente",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             required={"id", "nombre"},
 *             @OA\Property(property="id", type="string"),
 *             @OA\Property(property="nombre", type="string")
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Área actualizada exitosamente"
 *     )
 * )
 */
if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents("php://input"), true);
    $resultado = $area->actualizar($data['id'], $data['nombre']);
    echo json_encode($resultado);
}

/**
 * @OA\Delete(
 *     path="/areas",
 *     tags={"Áreas"},
 *     summary="Elimina un área",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\JsonContent(
 *             required={"id"},
 *             @OA\Property(property="id", type="string")
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Área eliminada exitosamente"
 *     )
 * )
 */
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents("php://input"), true);
    $resultado = $area->eliminar($data['id']);
    echo json_encode($resultado);
}
