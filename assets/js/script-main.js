$(document).ready(function (){

	$("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });


	$('#sidebarCollapse').on('click', function(){
		$('#sidebar').toggleClass('active');

		$('.collapse.in').toggleClass('in');

		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});


	let ctx = document.getElementById("myChart").getContext('2d');
	let labels = ['pizza', 'taco', 'hot dog', 'sushi'];
	let colorHex = ['#FB3640','#EFCA08','#43AA8B','#25306B'];

	let myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			datasets: [{
				data: [30, 10, 40, 20],
				backgroundColor: colorHex
			}],
			labels: labels
		},
		options: {
			responsive: true,
			legend:{
				position: 'bottom'
			},
			plugin:{
				datalabels:{
					colorHex: '#fff',
					anchor: 'end',
					align: 'start',
					offset: -10,
					borderWidth: 2,
					borderColor: '#fff',
					borderRadius: 26,
					backgroundColor: (context) => {
						return context.dataset.backgroundColor;
					}
				}
			}
		}
	});



	let ctx2 = document.getElementById("myChart2").getContext('2d');
	let labels2 = ['Motorola', 'Sasmung', 'Huawei', 'IPhone'];
	let colorHex2 = ['#16B5A4','#4838E6','#9E1393','#BB3D0C'];

	let myChart2 = new Chart(ctx2, {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [30, 10, 40, 20],
				backgroundColor: colorHex2
			}],
			labels: labels2
		},
		options: {
			responsive: true,
			legend:{
				position: 'top'
			},
			plugin:{
				datalabels:{
					colorHex: '#fff',
					anchor: 'end',
					align: 'start',
					offset: -10,
					borderWidth: 2,
					borderColor: '#fff',
					borderRadius: 26,
					backgroundColor: (context) => {
						return context.dataset.backgroundColor;
					}
				}
			}
		}
	});



// Jquery Map Vector
$('#map-vector').vectorMap();







}); //jquery onload