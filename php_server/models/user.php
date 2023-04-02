<?php
class User
{
    private $conn;
    private $table = 'user';

    public $id;
    public $fname;
    public $lname;
    public $email;
    public $mobile;
    public $hash;

    public function __construct($db)
    {
        $this->conn = $db;
    }



}