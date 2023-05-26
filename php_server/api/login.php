<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-type: application/json');

include '../config/Database.php';

$db = new Database();
$conn = $db->connect();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $query = $conn->prepare("SELECT email, hash, fname FROM user where email=?");

    try {
        $query->execute([$data->email]);

        if ($query->rowCount() >= 1) {
            $fetch = $query->fetch();
            // echo $fetch[1];
            // echo $hashed_pass;
            if (password_verify($data->password, $fetch[1])) {
                echo json_encode(['success' => true, 'message' => "Login Successful", 'name' => $fetch[2]]);
            } else {
                echo json_encode(['success' => false, 'message' => "Invalid Credentials"]);
            }

        } else {
            echo json_encode(['success' => false, 'message' => "Account Doesn't Exists"]);
        }

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "ُError: " . $e->getMessage()]);

    }
}