function typeShowHide()
{
	var box = $('.courseSearch').val().toLowerCase();
	if ("psych 303-0".indexOf(box) != -1 || "psych303-0".indexOf(box) != -1)
		if(box != "" && box.length  > 6)
		{
			$('#results303').show();
			$('#error').hide();
		}
		else
		{
			$('#results303').hide();
			$('#resultsPsycho').hide();
			$('#error').hide();
		}
	else if ("psychopathology".indexOf(box) != -1)
	{
		if(box != "" && box.length  > 5)
		{
			$('#resultsPsycho').show();
			$('#error').hide();
		}
		else
		{
			$('#results303').hide();
			$('#resultsPsycho').hide();
			$('#error').hide();
		}
	}
	else
	{
		$('#results303').hide();
		$('#resultsPsycho').hide();
		$('#error').show();
	}
}

function clickHide()
{
	$('.autoCompleteBox').hide();
}

function revealCourse()
{
	$('#greeting').hide();
	$('.courseSearch').val("Psych 303-0: Psychopathology");
	$('#firstTab').addClass("active");
	$('#saveButton').show(400);
}

function revealList()
{
	$('.saveList').show(400);
}