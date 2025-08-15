<?php
    header("Access-Control-Allow-Origin: *");

    include("conexao.php");

    // Getting the received JSON into $json variable.
    $json = file_get_contents('php://input');
 
    // decoding the received JSON and store into $obj variable.
    $obj = json_decode($json,true);
     
   
    $nomeConvidado= $obj['convidado'];

    $sql = " INSERT INTO tbconvidado values(null, '$nomeConvidado','2023-05-22')";

    $stmt = $pdo->prepare($sql);	
    $stmt ->execute();    
?>