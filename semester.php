<?php
$semester_id = $_POST['semester_id'];
try{
    $connect = new mysqli('localhost','root','','db_pkmc_2079_sl');
    $selectquery = "select * from subjects where semester_id='$semester_id'";
    $result = $connect->query($selectquery);
    $semesters = [];
    $html = "<option value=''>Select subject</option>";
   if ($result->num_rows > 0) {
        while ($semester= $result->fetch_assoc()) {
            $html .= "<option value='" . $semester['id'] . "'>" . $semester['title']  . "</option>";
        }
    }
   }catch(Exection $ex){
    die('Error:' . $ex->getMessage());
    }
    echo $html;

?>
