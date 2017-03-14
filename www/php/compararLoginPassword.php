<?php
	$mysqli =new mysqli("biobigdata.es", "u260339176_asprt", "Rst678jur195", "aiguasport");
	 // consulta SQL
	 if ($mysqli->connect_error) {
		die("Connection failed: " . $mysqli->connect_error);
	} 
	$result =$mysqli->query("SELECT login, password FROM usuarios WHERE login='".$_REQUEST['username']."' AND password='".md5($_REQUEST['password'])."'");
	 if ($result->num_rows > 0){
		 $res='ok';
	 }else{
		 $res='no';
	 }
	echo $res; // muestra por pantalla el string (el resultado de la consulta SQL)

?>
