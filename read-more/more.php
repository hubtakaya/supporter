<?php

$str = '';
$tweets = array();

for ($i=0; $i<=1; $i++) {
	$str = 'tweet';
	array_push($tweets, $str);
}

foreach ($tweets as $tweet) {
	echo $tweet;
}
