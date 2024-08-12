<?php

use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *     title="API de Usuarios",
 *     version="1.0.0",
 *     description="API para la gestión de usuarios"
 * )
 */


/**
 * @OA\Tag(
 *     name="Usuarios",
 *     description="Operaciones relacionadas con los usuarios"
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

require_once('../models/usuarios.model.php');
require_once('../utils/jwt_utils.php'); // Utilidad para manejo de tokens

$usuarios = new Usuarios;

/**
 * @OA\Get(
 *     path="/usuarios",
 *     tags={"Usuarios"},
 *     summary="Obtiene todos los usuarios",
 *     @OA\Response(
 *         response=200,
 *         description="Lista de usuarios"
 *     )
 * )
 */
switch ($_GET["op"]) {
    case 'todos': 
        $datos = $usuarios->todos();
        $todos = [];
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;

    /**
     * @OA\Get(
     *     path="/usuarios/{id}",
     *     tags={"Usuarios"},
     *     summary="Obtiene un usuario por ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Datos del usuario"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Usuario no encontrado"
     *     )
     * )
     */
    case 'uno':
        $id = $_POST["id"] ?? null;
        if ($id) {
            $datos = $usuarios->uno($id);
            $res = mysqli_fetch_assoc($datos);
            echo json_encode($res);
        } else {
            echo json_encode(["status" => "error", "message" => "ID no proporcionado"]);
        }
        break;

    /**
     * @OA\Post(
     *     path="/usuarios",
     *     tags={"Usuarios"},
     *     summary="Inserta un nuevo usuario",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"Nombres", "Apellidos", "Email", "NombreUsuario", "Identificacion", "FechaNacimiento", "Sexo", "Telefono", "Celular", "Observaciones", "FechaCreacion", "Estado", "RolId", "Password"},
     *             @OA\Property(property="Nombres", type="string"),
     *             @OA\Property(property="Apellidos", type="string"),
     *             @OA\Property(property="Email", type="string"),
     *             @OA\Property(property="NombreUsuario", type="string"),
     *             @OA\Property(property="Identificacion", type="string"),
     *             @OA\Property(property="FechaNacimiento", type="string"),
     *             @OA\Property(property="Sexo", type="string"),
     *             @OA\Property(property="Telefono", type="string"),
     *             @OA\Property(property="Celular", type="string"),
     *             @OA\Property(property="Observaciones", type="string"),
     *             @OA\Property(property="FechaCreacion", type="string"),
     *             @OA\Property(property="Estado", type="string"),
     *             @OA\Property(property="RolId", type="integer"),
     *             @OA\Property(property="Password", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Usuario insertado exitosamente"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Faltan datos requeridos"
     *     )
     * )
     */
    case 'insertar':
        $Nombres = $_POST["Nombres"] ?? null;
        $Apellidos = $_POST["Apellidos"] ?? null;
        $Email = $_POST["Email"] ?? null;
        $NombreUsuario = $_POST["NombreUsuario"] ?? null;
        $Identificacion = $_POST["Identificacion"] ?? null;
        $FechaNacimiento = $_POST["FechaNacimiento"] ?? null;
        $Sexo = $_POST["Sexo"] ?? null;
        $Telefono = $_POST["Telefono"] ?? null;
        $Celular = $_POST["Celular"] ?? null;
        $Observaciones = $_POST["Observaciones"] ?? null;
        $FechaCreacion = $_POST["FechaCreacion"] ?? null;
        $Estado = $_POST["Estado"] ?? null;
        $RolId = $_POST["RolId"] ?? null;
        $Password = $_POST["Password"] ?? null;

        if ($Nombres && $Apellidos && $Email && $NombreUsuario && $Identificacion && $FechaNacimiento && $Sexo && $Telefono && $Celular && $Observaciones && $FechaCreacion && $Estado && $RolId && $Password) {
            $PasswordHash = password_hash($Password, PASSWORD_DEFAULT); // Encriptar la contraseña

            $datos = $usuarios->insertar($Nombres, $Apellidos, $Email, $NombreUsuario, $Identificacion, $FechaNacimiento, $Sexo, $Telefono, $Celular, $Observaciones, $FechaCreacion, $Estado, $RolId, $PasswordHash);
            echo json_encode(["status" => "success", "id" => $datos]);
        } else {
            echo json_encode(["status" => "error", "message" => "Faltan datos requeridos"]);
        }
        break;

    /**
     * @OA\Put(
     *     path="/usuarios/{id}",
     *     tags={"Usuarios"},
     *     summary="Actualiza un usuario existente",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"Nombres", "Apellidos", "Email", "NombreUsuario", "Identificacion", "FechaNacimiento", "Sexo", "Telefono", "Celular", "Observaciones", "FechaCreacion", "Estado", "RolId"},
     *             @OA\Property(property="Nombres", type="string"),
     *             @OA\Property(property="Apellidos", type="string"),
     *             @OA\Property(property="Email", type="string"),
     *             @OA\Property(property="NombreUsuario", type="string"),
     *             @OA\Property(property="Identificacion", type="string"),
     *             @OA\Property(property="FechaNacimiento", type="string"),
     *             @OA\Property(property="Sexo", type="string"),
     *             @OA\Property(property="Telefono", type="string"),
     *             @OA\Property(property="Celular", type="string"),
     *             @OA\Property(property="Observaciones", type="string"),
     *             @OA\Property(property="FechaCreacion", type="string"),
     *             @OA\Property(property="Estado", type="string"),
     *             @OA\Property(property="RolId", type="integer")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Usuario actualizado exitosamente"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Faltan datos requeridos"
     *     )
     * )
     */
    case 'actualizar':
        $id = $_POST["id"] ?? null;
        $Nombres = $_POST["Nombres"] ?? null;
        $Apellidos = $_POST["Apellidos"] ?? null;
        $Email = $_POST["Email"] ?? null;
        $NombreUsuario = $_POST["NombreUsuario"] ?? null;
        $Identificacion = $_POST["Identificacion"] ?? null;
        $FechaNacimiento = $_POST["FechaNacimiento"] ?? null;
        $Sexo = $_POST["Sexo"] ?? null;
        $Telefono = $_POST["Telefono"] ?? null;
        $Celular = $_POST["Celular"] ?? null;
        $Observaciones = $_POST["Observaciones"] ?? null;
        $FechaCreacion = $_POST["FechaCreacion"] ?? null;
        $Estado = $_POST["Estado"] ?? null;
        $RolId = $_POST["rol_id"] ?? null;

        if ($id && $Nombres && $Apellidos && $Email && $NombreUsuario && $Identificacion && $FechaNacimiento && $Sexo && $Telefono && $Celular && $Observaciones && $FechaCreacion && $Estado && $RolId) {
            $datos = $usuarios->actualizar($id, $Nombres, $Apellidos, $Email, $NombreUsuario, $Identificacion, $FechaNacimiento, $Sexo, $Telefono, $Celular, $Observaciones, $FechaCreacion, $Estado, $RolId);
            echo json_encode(["status" => "success", "id" => $datos]);
        } else {
            echo json_encode(["status" => "error", "message" => "Faltan datos requeridos"]);
        }
        break;

    /**
     * @OA\Delete(
     *     path="/usuarios/{id}",
     *     tags={"Usuarios"},
     *     summary="Elimina un usuario",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Usuario eliminado exitosamente"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Usuario no encontrado"
     *     )
     * )
     */
    case 'eliminar':
        $id = $_POST["id"] ?? null;
        if ($id) {
            $datos = $usuarios->eliminar($id);
            echo json_encode(["status" => "success", "message" => "Usuario eliminado"]);
        } else {
            echo json_encode(["status" => "error", "message" => "ID no proporcionado"]);
        }
        break;

    /**
     * @OA\Post(
     *     path="/usuarios/login",
     *     tags={"Usuarios"},
     *     summary="Autentica a un usuario",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"Email", "Password"},
     *             @OA\Property(property="Email", type="string"),
     *             @OA\Property(property="Password", type="string")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Autenticación exitosa"
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Credenciales incorrectas"
     *     )
     * )
     */
    case 'login':
        $Email = $_POST["Email"] ?? null;
        $Password = $_POST["Password"] ?? null;

        if ($Email && $Password) {
            $datos = $usuarios->login($Email);
            $res = mysqli_fetch_assoc($datos);

            if ($res && password_verify($Password, $res['Password'])) {
                $token = JwtUtils::createToken($res['idUsuario'], $res['Email']); // Generar token JWT
                echo json_encode(["status" => "success", "token" => $token]);
            } else {
                echo json_encode(["status" => "error", "message" => "Credenciales incorrectas"]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Email o Password no proporcionado"]);
        }
        break;
}
?>
