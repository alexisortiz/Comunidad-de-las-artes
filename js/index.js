$('.event-modal').modal({
    allowMultiple: false
  });
  
$('#showmodal').click(function() {
	$('.mini.modal')
        .modal('show');
});

$('.event-modal.info').each(function(idx, elem) {
	$(elem).modal('attach events', '#' + $(elem).attr('data-object'));
});

