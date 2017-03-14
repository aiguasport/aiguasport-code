<?php
	mysql_connect("aiguasport.esy.es","u260339176","Rst678jur195"); // conexion servidor MYSQL
	mysql_select_db("u260339176_asprt"); // conexion base de datos

	$resSQL=mysql_query("INSERT INTO eventos (nombre, fecha, descripcion, organizador) VALUES ('".$_REQUEST['nombre']."','".$_REQUEST['fecha']."','".$_REQUEST['descripcion']."','".$_REQUEST['descripcion']."'"); // consulta SQL
	

?>
INSERT INTO `eventos`(`codigo`, `nombre`, `fecha`, `descripcion`, `organizador`) VALUES ([value-1],[value-2],[value-3],[value-4],[value-5])
