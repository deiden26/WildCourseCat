function typeShowHide()
{
	var box = $('.courseSearch').val();
	if ("psych 303-0".indexOf(box) != -1 || "Psych 303-0".indexOf(box) != -1 || "PSYCH 303-0".indexOf(box) != -1)
		if(box != "")
		{
			$('#results').show();
			$('#error').hide();
		}
		else
		{
			$('#results').hide();
			$('#error').hide();
		}
	else
	{
		$('#results').hide();
		$('#error').show();
	}
}

function clickHide()
{
	$('.autoCompleteBox').hide();
}

function reveal()
{
	$('#greeting').hide();
	$('.courseSearch').val("Psych 303-0: Psychopathology");
	$('#firstTab').addClass("active");
}