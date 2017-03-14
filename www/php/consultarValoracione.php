<?php

	mysql_connect("aiguasport.esy.es","u260339176","Rst678jur195"); // conexion servidor MYSQL
	mysql_select_db("u260339176_asprt"); // conexion base de datos

	$resSQL=mysql_query("SELECT puntos FROM valoraciones WHERE escuela_id=".$_REQUEST['idEscl']); // consulta SQL

	
	/*for($fil=0; $fil < mysql_num_rows($resSQL); $fil++) // bucle para recorrer todas filas
	{
		$res .= '<br>' /*. chr(13) . chr(10)*/; // salto de linia en formato HTML o en formato fichero de texto
		/*for ($col=0; $col < mysql_num_fields($resSQL); $col++) // bucle para recorrer todas las columnas de una fila
		{
			$res .= mysql_field_name($resSQL, $col) . " = "; // inserta el nombre de cada columna y su valor
			$res .= mysql_result($resSQL, $fil, $col) . "; ";  //   en un string (mediante una concatencion)
		}
	}*/
	while ($fila = mysql_fetch_array($resSQL)) {
		$res = $fila[0];  
	}

	echo $res; // muestra por pantalla el string (el resultado de la consulta SQL)

?>
