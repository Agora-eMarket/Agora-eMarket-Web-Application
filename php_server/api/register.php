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
    if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => "Invalid email format"]);
    } else if (!preg_match("/^[0-9]{3}[0-9]{3}[0-9]{4}$/", $data->mobile)) {
        echo json_encode(['success' => false, 'message' => "Invalid mobile number format"]);
    } else if (strlen($data->password) < 8 || !preg_match("#[0-9]+#", $data->password) || !preg_match("#[A-Z]+#", $data->password) || !preg_match("#[a-z]+#", $data->password) || !preg_match("#\W+#", $data->password)) {
        echo json_encode(['success' => false, 'message' => "Invalid password format"]);
    } else {
        $hashed_pass = password_hash($data->password, PASSWORD_DEFAULT);

        // Insert the data into the table
        $sql = "INSERT INTO user (id, fname, lname, email, mobile, hash) VALUES (null, :fname, :lname, :email, :mobile, :hash)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':fname', $data->fname);
        $stmt->bindParam(':lname', $data->lname);
        $stmt->bindParam(':email', $data->email);
        $stmt->bindParam(':mobile', $data->mobile);
        $stmt->bindParam(':hash', $hashed_pass);

        try {
            $stmt->execute();
            echo json_encode(['success' => true, 'message' => "New record created successfully"]);

        } catch (PDOException $e) {
            echo json_encode(['success' => false, 'message' => "Account Exists"]);
        }
    }
}