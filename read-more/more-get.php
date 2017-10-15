<?php

$tweet = '';
$tweets = array();

if(isset($_GET['max_id'])) {

	$params['max_id'] = ($_GET['max_id']) == null? 1: $_GET['max_id'];
	$params['count']  = 30;

	for ($i=0; $i < $params['count']; $i++) {
		$tweet = '<li id="tweet-' . ($params['max_id']+$i) . '">tweet-' . ($params['max_id']+$i) . '</li>';
		array_push($tweets, $tweet);
	}

	if ($params['max_id'] != 1) {
		array_shift($tweets);
	}

} else {


}

foreach ($tweets as $responce) {
	echo $responce;
}