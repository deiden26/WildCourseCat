function showHide()
{
	var box = $('.courseSearch').val();
	if ("psych".indexOf(box) != -1)
		$('.autoCompleteBox').show();
	else
		$('.autoCompleteBox').hide();
}