<?php
require_once __DIR__ . '/../vendor/autoload.php'; // Asegúrate de que la ruta es correcta
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function generateToken($userId, $rolId)
{
    $key = 'your_secret_key'; // Cambia a una clave secreta segura
    $payload = [
        'user_id' => $userId,
        'rol_id' => $rolId,
        'exp' => time() + 3600 // Token válido por 1 hora
    ];
    return JWT::encode($payload, $key, 'HS256'); // Especifica el algoritmo
}

function verifyToken($token) {
    $key = 'your_secret_key'; // Debe coincidir con la clave usada para codificar
    try {
        $decoded = JWT::decode($token, new Key($key, 'HS256')); // Usa el objeto Key y especifica el algoritmo
        return (array) $decoded;
    } catch (Exception $e) {
        return false;
    }
}
?>
