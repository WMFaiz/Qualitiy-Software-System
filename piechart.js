window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
        theme: "dark2",
	    exportEnabled: true,
	    animationEnabled: true,
		title:{
			text: "Your Software Quality"
        },	
		data: [
		{       
			type: "pie",
			showInLegend: true,
			toolTipContent: "{y} - #percent %",
			yValueFormatString: "#,##0,,.## Million",
			legendText: "{indexLabel}",
			dataPoints: [
				{  y: 4181563, indexLabel: "Portability" },
				{  y: 2175498, indexLabel: "Reusability" },
				{  y: 3125844, indexLabel: "Interoperability" },
				{  y: 1176121, indexLabel: "Correctness"},
				{  y: 1727161, indexLabel: "Reliability" },
				{  y: 4303364, indexLabel: "Efficiency"},
                {  y: 1717786, indexLabel: "Usability"},
                {  y: 2123442, indexLabel: "Maintainability"},
                {  y: 3433135, indexLabel: "Flexibility"},
                {  y: 6782211, indexLabel: "Testability"}
			]
		}
		]
	});
    chart.render();
}