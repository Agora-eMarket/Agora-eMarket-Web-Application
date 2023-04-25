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
    // Insert the data into the table
    $sql = "INSERT INTO orders (id, email, items, totalPrice, status) VALUES (NULL, :email, :items, :totalPrice, :status)";
    $stmt = $conn->prepare($sql);
    $items = json_encode($data->items);
    $stmt->bindParam(':email', $data->email);
    $stmt->bindParam(':items', $items);
    $stmt->bindParam(':totalPrice', $data->totalPrice);
    $stmt->bindParam(':status', $data->status);

    try {
        $stmt->execute();
        echo json_encode(['success' => true, 'message' => "Order Added Successfully"]);

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "Error: Something Happened, Who Knows What!"]);
        ;
    }
}