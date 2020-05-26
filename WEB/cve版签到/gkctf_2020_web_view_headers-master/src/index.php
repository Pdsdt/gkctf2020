<?php

error_reporting(0);

if (@$_SERVER['REMOTE_ADDR'] !== "127.0.0.1") {
	header("Hint: Flag in localhost");
}
if (isset($_GET['url']) && substr(parse_url($_GET['url'], PHP_URL_HOST), -11) === '.ctfhub.com') {
	echo "<pre>";
	print_r(get_headers($_GET['url']));
}else{
	if (substr($_SERVER['HTTP_HOST'],-3) !== "123") {
		header("Tips: Host must be end with '123'");
	}else{
		header("FLAG: FLAGFLAGFLAG");
	}
	echo "<a href='/?url=http://www.ctfhub.com'>View CTFHub</a><br/>";
	echo "You just view *.ctfhub.com";
}

?>

<!--
	Venom 在线招人
-->