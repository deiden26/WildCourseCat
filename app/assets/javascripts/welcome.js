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

function makeGraph()
{
	var ctx = document.getElementById("myChart").getContext("2d");
	var data = {
		labels : ["Sara Broaders","Renee Engeln","Susan Minka"],
		datasets :
		[
			{
				title: "Amount Learned",
				fillColor : "rgba(232,159,192,0.5)",
				strokeColor : "rgba(232,159,192,1)",
				data : [5, 4.73, 4.71]
			},
			{
				title: "Quality of Instruction",
				fillColor : "rgba(255,139,110,0.5)",
				strokeColor : "rgba(255,139,110,1)",
				data : [5.43, 5.62, 5.43]
			},
			{
				title: "Quality of Course Overall",
				fillColor : "rgba(112,188,255,0.5)",
				strokeColor : "rgba(112,188,255,1)",
				data : [4.55, 3.47, 3.72]
			}

		]
	}
	var options = 
	{
		scaleOverride : true,
		scaleSteps : 12,
		scaleStepWidth : 0.5,
		barValueSpacing : 20

	}
	new Chart(ctx).Bar(data, options);
	var parent = document.getElementById("myLegend");
	legend(parent, data);
}