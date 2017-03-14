<?php
	error_reporting(E_ALL);
	header('Content-Type: application/json');
	mysql_connect("aiguasport.esy.es","u260339176","Rst678jur195"); // conexion servidor MYSQL
	mysql_select_db("u260339176_asprt"); // conexion base de datos
	
	$resSQL=mysql_query("SELECT puntos, escuela_id FROM valoraciones"); // consulta SQL
	$resultado=array();
	while ($fila = mysql_fetch_array($resSQL)) {
		array_push($resultado,$fila);
	}

	echo json_encode($resultado); // muestra por pantalla el string (el resultado de la consulta SQL)

?>
