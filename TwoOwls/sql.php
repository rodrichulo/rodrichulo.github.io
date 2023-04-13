<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
	<?php
	
	//establish connection info
$server = "localhost";// your server
$userid = "ue4qawbberbnu"; // your user id
$pw = "deylvgguslgx"; // your pw
$db= "dbsvx9uvpyj3ov"; // your database
		
// Create connection
$conn = new mysqli($server, $userid, $pw );

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully<br>";
	
//select the database
$conn->select_db($db);

	//run a query
$sql = "SELECT first_name, last_name FROM users";
$result = $conn->query($sql);

//get results
    while($row = $result->fetch_assoc()) 
   {
    	echo $row["item_name"]. " " . $row["item_cost"]. "<br>";
   }

	
//close the connection	
$conn->close();

	
	?>
</body>
</html>