<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-type: application/json');

include '../config/Database.php';

$db = new Database();
$conn = $db->connect();

$data = array();

$category = $_GET['category'];
$all = $conn->prepare("SELECT * FROM item");
$all->execute();
$results = $all->fetchAll();
switch ($category) {
    case 'all':
        foreach ($results as $result) {
            $item = array(
                'id' => $result['id'],
                'img' => $result['img'],
                'name' => $result['name'],
                'description' => $result['description'],
                'price' => $result['price'],
                'category' => $result['category']
            );
            array_push($data, $item);
        }
        echo json_encode($data);
        break;
    default:
        echo "test1";

}