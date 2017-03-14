<?php
	header('Content-Type: text/html;charset=utf-8');
	error_reporting(E_ALL);
	function cambiaf_a_mysql($date, $elm='-'){ 
		 if($date == '') return NULL;
			$date2 = explode($elm, $date);
			return $date2[2].$elm.$date2[1].$elm.$date2[0];
				//return "hola";
	}
	
	
	mysql_connect("aiguasport.esy.es","u260339176","Rst678jur195"); // conexion servidor MYSQL
	mysql_select_db("u260339176_asprt"); // conexion base de datos
	mysql_query("SET NAMES 'utf8'");
    $fecha_mysql = cambiaf_a_mysql($_REQUEST['fecha']);
	$sql="INSERT INTO mensajesEv (numevent, nombreus, mensaje) VALUES ('".$_REQUEST['numevent']."','".$_REQUEST['nombreus']."','".$_REQUEST['mensaje']."')";
	echo $sql;
	$resSQL=mysql_query($sql); // consulta SQL
	$res='ok';

?>
cargarMensaje.php?numevent=27&nombreus="valeria"&mensaje="hola"
