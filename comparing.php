<?php
$link = mysqli_connect('localhost', 'root', '', 'school');
if (mysqli_connect_errno()) {
     die("Failed to connect to MySQL: " . mysqli_connect_error());
}
mysqli_set_charset($link, 'utf-8');

$result = mysqli_query($link, "SELECT homework FROM reference");
$row = mysqli_fetch_array($result);

$result2 = mysqli_query($link, "SELECT homeworkUP FROM reference");
$row2 = mysqli_fetch_array($result2);

$x = 1;

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
     $data[] = $row;
}
$data1 = [];
while ($row = mysqli_fetch_assoc($result2)) {
     $data1[] = $row;
}

while ($row = mysqli_fetch_array($result)) {
     while ($row2 = mysqli_fetch_array($result2)) {
          for ($i = 0; $i < 13; $i++) {
               if ($data[$i] == $data1[$i]) {
                    echo ("jest");
               } else {
                    echo ("nie jest");
               }
          }
     }
}
