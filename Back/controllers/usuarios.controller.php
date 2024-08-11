<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];
if ($method == "OPTIONS") {
    die();
}

// TODO: controlador de usuarios
require_once('../models/usuarios.model.php');
error_reporting(0);
$usuarios = new Usuarios;

switch ($_GET["op"]) {
    // TODO: Usuarios
    // TODO: Seleccionar todos los usuarios
    


    case 'todos': 
        $datos = array(); 
        $datos = $usuarios->todos(); 
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;

    //TODO: Seleccionar un usuario
      

    case 'uno':
        $id = $_POST["id"];
        $datos = array();

        $datos = $usuarios->uno($id);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;

    case 'insertar':
        $Nombres = $_POST["Nombres"];
        $Apellidos = $_POST["Apellidos"];
        $Email = $_POST["Email"];
        $NombreUsuario = $_POST["NombreUsuario"];
        $Identificacion = $_POST["Identificacion"];
        $FechaNacimiento = $_POST["FechaNacimiento"];
        $Sexo = $_POST["Sexo"];
        $Telefono = $_POST["Telefono"];
        $Celular = $_POST["Celular"];
        $Observaciones = $_POST["Observaciones"];
        $FechaCreacion = $_POST["FechaCreacion"];
        $Estado = $_POST["Estado"];
        $RolId = $_POST["RolId"];

        $datos = array();
        $datos = $usuarios->insertar($Nombres, $Apellidos, $Email, $NombreUsuario, $Identificacion, $FechaNacimiento, $Sexo, $Telefono, $Celular, $Observaciones, $FechaCreacion, $Estado, $RolId);
        echo json_encode($datos);
        break;

    case 'actualizar':
        $id = $_POST["id"];
        $Nombres = $_POST["Nombres"];
        $Apellidos = $_POST["Apellidos"];
        $Email = $_POST["Email"];
        $NombreUsuario = $_POST["NombreUsuario"];
        $Identificacion = $_POST["Identificacion"];
        $FechaNacimiento = $_POST["FechaNacimiento"];
        $Sexo = $_POST["Sexo"];
        $Telefono = $_POST["Telefono"];
        $Celular = $_POST["Celular"];
        $Observaciones = $_POST["Observaciones"];
        $FechaCreacion = $_POST["FechaCreacion"];
        $Estado = $_POST["Estado"];
        $RolId = $_POST["RolId"];

        $datos = array();
        $datos = $usuarios->actualizar($id, $Nombres, $Apellidos, $Email, $NombreUsuario, $Identificacion, $FechaNacimiento, $Sexo, $Telefono, $Celular, $Observaciones, $FechaCreacion, $Estado, $RolId);
        echo json_encode($datos);
        break;

    case 'eliminar':
        $id = $_POST["id"];
        $datos = array();
        $datos = $usuarios->eliminar($id);
        echo json_encode($datos);
        break;
}
?>
