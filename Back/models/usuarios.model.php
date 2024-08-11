<?php
// TODO: Clase de Usuario
require_once('../config/config.php');

class Usuarios
{
    public function todos() 
{
    $con = new ClaseConectar();
    $con = $con->ProcedimientoParaConectar();
    
    // Realizamos una consulta JOIN entre `usuario` y `rol`
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
    
    // Escapamos el valor para prevenir SQL injection
    $id = mysqli_real_escape_string($con, $id);
    
    // Consulta con JOIN para obtener los datos del usuario y el nombre del rol
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


    public function insertar($Nombres, $Apellidos, $Email, $NombreUsuario, $Identificacion, $FechaNacimiento, $Sexo, $Telefono, $Celular, $Observaciones, $FechaCreacion, $Estado, $RolId) 
    {
        try {
            $con = new ClaseConectar();
            $con = $con->ProcedimientoParaConectar();
            // Escapamos los valores para prevenir SQL injection
            $Nombres = mysqli_real_escape_string($con, $Nombres);
            $Apellidos = mysqli_real_escape_string($con, $Apellidos);
            $Email = mysqli_real_escape_string($con, $Email);
            $NombreUsuario = mysqli_real_escape_string($con, $NombreUsuario);
            $Identificacion = mysqli_real_escape_string($con, $Identificacion);
            $FechaNacimiento = mysqli_real_escape_string($con, $FechaNacimiento);
            $Sexo = mysqli_real_escape_string($con, $Sexo);
            $Telefono = mysqli_real_escape_string($con, $Telefono);
            $Celular = mysqli_real_escape_string($con, $Celular);
            $Observaciones = mysqli_real_escape_string($con, $Observaciones);
            $FechaCreacion = mysqli_real_escape_string($con, $FechaCreacion);
            $Estado = mysqli_real_escape_string($con, $Estado);
            $RolId = mysqli_real_escape_string($con, $RolId);

            $cadena = "INSERT INTO `usuario` (`nombres`, `apellidos`, `email`, `nombreUsuario`, `identificacion`, `fechaNacimiento`, `sexo`, `telefono`, `celular`, `observaciones`, `fechaCreacion`, `estado`, `rol_id`) VALUES ('$Nombres','$Apellidos','$Email','$NombreUsuario','$Identificacion','$FechaNacimiento','$Sexo','$Telefono','$Celular','$Observaciones','$FechaCreacion','$Estado','$RolId')";
            if (mysqli_query($con, $cadena)) {
                return $con->insert_id;
            } else {
                return $con->error;
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
            
            // Escapamos los valores para prevenir SQL injection
            $id = mysqli_real_escape_string($con, $id);
            $Nombres = mysqli_real_escape_string($con, $Nombres);
            $Apellidos = mysqli_real_escape_string($con, $Apellidos);
            $Email = mysqli_real_escape_string($con, $Email);
            $NombreUsuario = mysqli_real_escape_string($con, $NombreUsuario);
            $Identificacion = mysqli_real_escape_string($con, $Identificacion);
            $FechaNacimiento = mysqli_real_escape_string($con, $FechaNacimiento);
            $Sexo = mysqli_real_escape_string($con, $Sexo);
            $Telefono = mysqli_real_escape_string($con, $Telefono);
            $Celular = mysqli_real_escape_string($con, $Celular);
            $Observaciones = mysqli_real_escape_string($con, $Observaciones);
            $RolId = mysqli_real_escape_string($con, $RolId);

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
            
            // Escapamos el valor para prevenir SQL injection
            $id = mysqli_real_escape_string($con, $id);
            
            // Obtener el estado actual del usuario
            $query = "SELECT `estado` FROM `usuario` WHERE `id` = '$id'";
            $result = mysqli_query($con, $query);
            if ($result) {
                $row = mysqli_fetch_assoc($result);
                $estado_actual = $row['estado'];
                
                // Invertir el estado (si es true, poner false; si es false, poner true)
                $nuevo_estado = $estado_actual == 1 ? 0 : 1;
    
                // Actualizar el estado del usuario
                $cadena = "UPDATE `usuario` SET `estado` = '$nuevo_estado' WHERE `id` = '$id'";
                if (mysqli_query($con, $cadena)) {
                    return 1; // Operación exitosa
                } else {
                    return $con->error; // Error en la operación
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
    
}
?>
