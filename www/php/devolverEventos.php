<?php
	error_reporting(E_ALL);
	header('Content-Type: application/json;charset=utf-8');
	mysql_connect("aiguasport.esy.es","u260339176","Rst678jur195"); // conexion servidor MYSQL
	mysql_select_db("u260339176_asprt"); // conexion base de datos
	mysql_query("SET NAMES 'utf8'");

	
	$resSQL=mysql_query("SELECT * FROM eventos WHERE fecha>=SYSDATE()"); // consulta SQL
	$resultado=array();
	while ($fila = mysql_fetch_array($resSQL)) {
		array_push($resultado,$fila);
	}

	echo json_encode($resultado); // muestra por pantalla el string (el resultado de la consulta SQL)

?>
