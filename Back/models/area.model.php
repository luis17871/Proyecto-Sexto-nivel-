<?php
require_once(__DIR__ . '/../config/config.php');
require_once(__DIR__ . '/../utils/uuid_utils.php');


class Area
{
    public function todos() 
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $cadena = "SELECT * FROM `area`";
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
        $cadena = "SELECT * FROM `area` WHERE id = '$id'";
        $datos = mysqli_query($con, $cadena);
        if (!$datos) {
            return "Error en la consulta: " . mysqli_error($con);
        }
        $con->close();
        return $datos;
    }

    public function crear($nombre) 
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $id = generateUUID(); // Asumiendo que esta función está en uuid_utils.php
        $nombre = mysqli_real_escape_string($con, $nombre);
        $cadena = "INSERT INTO `area` (id, nombre) VALUES ('$id', '$nombre')";
        $resultado = mysqli_query($con, $cadena);
        if (!$resultado) {
            return "Error al crear el área: " . mysqli_error($con);
        }
        $con->close();
        return $resultado;
    }

    public function actualizar($id, $nombre) 
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $id = mysqli_real_escape_string($con, $id);
        $nombre = mysqli_real_escape_string($con, $nombre);
        $cadena = "UPDATE `area` SET nombre = '$nombre' WHERE id = '$id'";
        $resultado = mysqli_query($con, $cadena);
        if (!$resultado) {
            return "Error al actualizar el área: " . mysqli_error($con);
        }
        $con->close();
        return $resultado;
    }

    public function eliminar($id) 
    {
        $con = new ClaseConectar();
        $con = $con->ProcedimientoParaConectar();
        $id = mysqli_real_escape_string($con, $id);
        $cadena = "DELETE FROM `area` WHERE id = '$id'";
        $resultado = mysqli_query($con, $cadena);
        if (!$resultado) {
            return "Error al eliminar el área: " . mysqli_error($con);
        }
        $con->close();
        return $resultado;
    }
}
