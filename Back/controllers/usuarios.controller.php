<?php
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

switch ($_GET["op"]) {
    case 'todos': 
        $datos = $usuarios->todos();
        $todos = [];
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;

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
            $RolId = $_POST["RolId"] ?? null; // Asegúrate de que el nombre es consistente
            $Password = $_POST["Password"] ?? null;
    
            if ($Nombres && $Apellidos && $Email && $NombreUsuario && $Identificacion && $FechaNacimiento && $Sexo && $Telefono && $Celular && $Observaciones && $FechaCreacion && $Estado && $RolId && $Password) {
                $PasswordHash = password_hash($Password, PASSWORD_DEFAULT); // Encriptar la contraseña
    
                $datos = $usuarios->insertar($Nombres, $Apellidos, $Email, $NombreUsuario, $Identificacion, $FechaNacimiento, $Sexo, $Telefono, $Celular, $Observaciones, $FechaCreacion, $Estado, $RolId, $PasswordHash);
                echo json_encode(["status" => "success", "id" => $datos]);
            } else {
                echo json_encode(["status" => "error", "message" => "Faltan datos requeridos"]);
            }
            break;

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

        // Comprobar que todos los datos necesarios están presentes
        if ($id && $Nombres && $Apellidos && $Email && $NombreUsuario && $Identificacion && $FechaNacimiento && $Sexo && $Telefono && $Celular && $Observaciones && $FechaCreacion && $Estado && $RolId) {
            $datos = $usuarios->actualizar($id, $Nombres, $Apellidos, $Email, $NombreUsuario, $Identificacion, $FechaNacimiento, $Sexo, $Telefono, $Celular, $Observaciones, $FechaCreacion, $Estado, $RolId);
            echo json_encode(["status" => "success", "id" => $datos]);
        } else {
            echo json_encode(["status" => "error", "message" => "Faltan datos requeridos"]);
        }
        break;

    case 'eliminar':
        $id = $_POST["id"] ?? null;
        if ($id) {
            $datos = $usuarios->eliminar($id);
            echo json_encode(["status" => "success", "id" => $id, "estado" => $datos]);
        } else {
            echo json_encode(["status" => "error", "message" => "ID no proporcionado"]);
        }
        break;

    // case 'login':
    //     $email = $_POST["Email"] ?? null;
    //     $password = $_POST["Password"] ?? null;
    //     if ($email && $password) {
    //         $result = $usuarios->login($email, $password);
    //         echo json_encode($result);
    //     } else {
    //         echo json_encode(["status" => "error", "message" => "Email o contraseña no proporcionados"]);
    //     }
    //     break;
    case 'login':
        $nombreUsuario = $_POST["nombreUsuario"] ?? null;
        $password = $_POST["Password"] ?? null;
        if ($nombreUsuario && $password) {
            $result = $usuarios->login($nombreUsuario, $password);
            if ($result['status'] === 'success') {
                // Solo devolver el token
                echo json_encode(["status" => "success", "token" => $result['token']]);
            } else {
                echo json_encode($result);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "nombreUsuario o contraseña no proporcionados"]);
        }
        break;
    
    default:
        echo json_encode(["status" => "error", "message" => "Operación no válida"]);
        break;
}
?>
