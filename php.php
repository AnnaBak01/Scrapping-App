<?php
$link = mysqli_connect('localhost', 'root', '', 'school');
if (mysqli_connect_errno()) {
     die("Failed to connect to MySQL: " . mysqli_connect_error());
}
mysqli_set_charset($link, 'utf-8');
$id = mysqli_prepare($link, "SELECT * FROM reference where id = ?");

function get_all_teachers($link)
{
     $result = mysqli_query($link, "SELECT * FROM reference");
     $data = [];
     while ($row = mysqli_fetch_assoc($result)) {
          $data[] = $row;
     }
     echo json_encode($data);
}

function get_one_teacher($link, $id)
{
     $statement = mysqli_prepare($link, "SELECT * FROM reference where id = ?");
     $statement->bind_param("i", $id);
     $statement->execute();
     $result = $statement->get_result();

     $data = [];
     while ($row = mysqli_fetch_assoc($result)) {
          $data[] = $row;
     }

     echo json_encode($data);
}

$list = explode('/', $_SERVER['REQUEST_URI']);

$param1 = $list[3];
$param2 = $list[4];

if ($param1 == "all" && $param2 == "") {
     get_all_teachers($link);
} elseif (is_numeric($param2)) {
     get_one_teacher($link, $param2);
}
