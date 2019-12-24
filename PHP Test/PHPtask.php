<!DOCTYPE html>
<html>
<head>
	<title>PHP Task</title>
</head>
<body>
	<?php $filename = "pam_invoices1.csv";
	$file = fopen($filename, "r");
	if($file == false)
	{echo("Error in opening file");
	exit();}


	$new = fopen("new.csv", "w");


	while(!feof($file)){
		$data = fgetcsv($file, 1000);
		if($data[6]==1){
			$val=$data[1]."\n";
			fwrite($new, $val);
			//fwrite($new, "\n");
		echo $val?> <br>
		<?php
		// echo $new; 
	}
	}



	fclose($file);
	?>


	

</body>
</html>