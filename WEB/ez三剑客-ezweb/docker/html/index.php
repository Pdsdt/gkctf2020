<!DOCTYPE html>
<html>
<head>
	<title></title>
<link rel="stylesheet" type="text/css" href="1.css">
</head>
<body>
<div class="form-style-6" style="width:100%;text-align:center">
<h1>假装是个很漂亮的前端</h1><br><br>
<form action="index.php" method="GET" >
<input type="text" name="url" placeholder="Your url" />
<br>
<input type="submit" name="submit" value="提交" />
</form>
</div>
</body>
</html>
<!--?secret-->
<?php
function curl($url){  
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    echo curl_exec($ch);
    curl_close($ch);
}

if(isset($_GET['submit'])){
		$url = $_GET['url'];
		//echo $url."\n";
		if(preg_match('/file\:\/\/|dict|\.\.\/|127.0.0.1|localhost/is', $url,$match))
		{
			//var_dump($match);
			die('别这样');
		}
		curl($url);
}
if(isset($_GET['secret'])){
	system('ifconfig');
}
?>
