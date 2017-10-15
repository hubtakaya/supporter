<script type="text/javascript" charset="utf-8" async defer>
	$(function() {
		var max_id = 1;

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() == $(document).height()){
				more();
			}
		});

		function more() {
			$('#loading').show();

			if($('#tweets > li').length) {
				max_id = $('#tweets > li:last').attr('id').replace(/^tweet-/, '');
				console.log(max_id);
			}

			$.ajax({
				url: 'read_more.php',
				type: 'post',
				dataType: 'json',
				data: {
					max_id: max_id
				},
			})
			.done(function(response) {
				$('#loading').hide();
				$('#tweets').append(response.tweets);
			})
			.fail(function(e) {
				$('#loading').hide();
				alert('Ajax failed.');
				$('#tweets').append('<li>Ajax failed.</li>');
			});
		}

		more();

	});
</script>