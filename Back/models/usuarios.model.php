<?php
require_once('../config/config.php');
require_once('../utils/uuid_utils.php'); // Utilidad para generar UUID
require_once('../utils/jwt_utils.php'); // Utilidad para manejo de tokens

class Usuarios
{
    public function todos() 
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "SELECT u.*, r.nombre AS rol_nombre 
                   FROM `usuario` u
                   LEFT JOIN `rol` r ON u.rol_id = r.id";
        $datos = mysqli_query($con, $cadena);
        if (!$datos) {
            return "Error en la consulta: " . mysqli_error($con);
        }
        $con->close();
        return $datos;
    }

    public function uno($id) 
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $id = mysqli_real_escape_string($con, $id);
        $cadena = "SELECT u.*, r.nombre AS rol_nombre 
                   FROM `usuario` u
                   LEFT JOIN `rol` r ON u.rol_id = r.id
                   WHERE u.id = '$id'";
        $datos = mysqli_query($con, $cadena);
        if (!$datos) {
            return "Error en la consulta: " . mysqli_error($con);
        }
        $con->close();
        return $datos;
    }

    public function insertar($Nombres, $Apellidos, $Email, $NombreUsuario, $Identificacion, $FechaNacimiento, $Sexo, $Telefono, $Celular, $Observaciones, $FechaCreacion, $Estado, $RolId, $Password) 
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoParaConectar();
            $id = generateUUID(); // Generar UUID para el usuario
            $cadena = "INSERT INTO `usuario` (`id`, `nombres`, `apellidos`, `email`, `nombreUsuario`, `identificacion`, `fechaNacimiento`, `sexo`, `telefono`, `celular`, `observaciones`, `fechaCreacion`, `estado`, `rol_id`, `password`) 
                       VALUES ('$id', '$Nombres', '$Apellidos', '$Email', '$NombreUsuario', '$Identificacion', '$FechaNacimiento', '$Sexo', '$Telefono', '$Celular', '$Observaciones', '$FechaCreacion', '$Estado', '$RolId', '$Password')";
            if (mysqli_query($con, $cadena)) {
                return $id;
            } else {
                return "Error en la consulta: " . mysqli_error($con); // Agregada más información de error
            }
        } catch (Exception $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function actualizar($id, $Nombres, $Apellidos, $Email, $NombreUsuario, $Identificacion, $FechaNacimiento, $Sexo, $Telefono, $Celular, $Observaciones, $RolId) 
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoParaConectar();
            $id = mysqli_real_escape_string($con, $id);
            $cadena = "UPDATE `usuario` SET `nombres`='$Nombres', `apellidos`='$Apellidos', `email`='$Email', `nombreUsuario`='$NombreUsuario', 
                      `identificacion`='$Identificacion', `fechaNacimiento`='$FechaNacimiento', `sexo`='$Sexo', `telefono`='$Telefono', 
                      `celular`='$Celular', `observaciones`='$Observaciones', `rol_id`='$RolId' WHERE `id` = '$id'";
            if (mysqli_query($con, $cadena)) {
                return $id;
            } else {
                return $con->error;
            }
        } catch (Exception $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    public function eliminar($id) 
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoParaConectar();
            $id = mysqli_real_escape_string($con, $id);
            $query = "SELECT `estado` FROM `usuario` WHERE `id` = '$id'";
            $result = mysqli_query($con, $query);
            if ($result) {
                $row = mysqli_fetch_assoc($result);
                $estado_actual = $row['estado'];
                $nuevo_estado = $estado_actual == 1 ? 0 : 1;
                $cadena = "UPDATE `usuario` SET `estado` = '$nuevo_estado' WHERE `id` = '$id'";
                if (mysqli_query($con, $cadena)) {
                    return 1; 
                } else {
                    return $con->error; 
                }
            } else {
                return "Error al obtener el estado actual: " . mysqli_error($con);
            }
        } catch (Exception $th) {
            return $th->getMessage();
        } finally {
            $con->close();
        }
    }

    // public function login($email, $Password)
    // {
    //     $con = new ClaseConectar();
    //     $con = $con->ProcedimientoParaConectar();
    //     $email = mysqli_real_escape_string($con, $email);
    //     $cadena = "SELECT * FROM `usuario` WHERE `email` = '$email'";
    //     $result = mysqli_query($con, $cadena);
    //     if ($result && mysqli_num_rows($result) > 0) {
    //         $user = mysqli_fetch_assoc($result);
    //         if (isset($user['password']) && password_verify($Password, $user['password'])) {
    //             // Generar y retornar el token
    //             $token = generateToken($user['id'], $user['rol_id']);
    //             return ["status" => "success", "token" => $token, "user" => $user];
    //         } else {
    //             return ["status" => "error", "message" => "Contraseña incorrecta"];
    //         }
    //     } else {
    //         return ["status" => "error", "message" => "Usuario no encontrado"];
    //     }
    // }
    
    public function login($nombreUsuario, $Password)
{
    $con = new ClaseConectar();
    $con = $con->ProcedimientoParaConectar();
    $nombreUsuario = mysqli_real_escape_string($con, $nombreUsuario);
    $cadena = "SELECT * FROM `usuario` WHERE `nombreUsuario` = '$nombreUsuario'";
    $result = mysqli_query($con, $cadena);
    if ($result && mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);
        if (password_verify($Password, $user['password'])) { // Asegúrate de usar el campo correcto
            // Generar y retornar el token
            $token = generateToken($user['id'], $user['rol_id']);
            return ["status" => "success", "token" => $token];
        } else {
            return ["status" => "error", "message" => "Contraseña incorrecta"];
        }
    } else {
        return ["status" => "error", "message" => "Usuario no encontrado"];
    }
}

    

}
?>
