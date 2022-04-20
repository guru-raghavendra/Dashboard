import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
selector: 'app-e-commerce',
templateUrl: './e-commerce.component.html',
styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {
	chartOptions={}
	Highcharts=Highcharts;
	constructor(){}

	ngOnInit(){
		this.chartOptions=
		{
				chart: {
					type: 'bubble'
				},
				legend: {
					bubbleLegend: {
						enabled: true,
						minSize: 20,
						maxSize: 60,
						ranges: [{
							value: 14
						}, {
							value: 89
						}]
					}
				},
				series: [{
					minSize: 20,
					maxSize: 60,
					data: [
						[9, 81, 63],
						[98, 5, 89],
						[51, 50, 73],
						[41, 22, 14],
						[58, 24, 20]
					]
				}]
			
		};
		HC_exporting(Highcharts);
		setTimeout(() => {
			window.dispatchEvent(
				new Event('resize')
			);
		}, 300);
	}
}











// {
// 	chart: {
// 		type: 'area'
// 	},
// 	title: {
// 		text: 'Historic and Estimated Worldwide Population Growth by Region'
// 	},
// 	subtitle: {
// 		text: 'Source: Wikipedia.org'
// 	},
// 	xAxis: {
// 		categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
// 		tickmarkPlacement: 'on',
// 		title: {
// 			enabled: false
// 		}
// 	},
// 	yAxis: {
// 		title: {
// 			text: 'Billions'
// 		},
// 		labels: {
			
// 		}
// 	},
// 	tooltip: {
// 		split: true,
// 		valueSuffix: ' millions'
// 	},
// 	plotOptions: {
// 		area: {
// 			stacking: 'normal',
// 			lineColor: '#666666',
// 			lineWidth: 1,
// 			marker: {
// 				lineWidth: 1,
// 				lineColor: '#666666'
// 			}
// 		}
// 	},
// 	series: [{
// 		name: 'Asia',
// 		data: [502, 635, 809, 947, 1402, 3634, 5268]
// 	}, {
// 		name: 'Africa',
// 		data: [106, 107, 111, 133, 221, 767, 1766]
// 	}, {
// 		name: 'Europe',
// 		data: [163, 203, 276, 408, 547, 729, 628]
// 	}, {
// 		name: 'America',
// 		data: [18, 31, 54, 156, 339, 818, 1201]
// 	}, {
// 		name: 'Oceania',
// 		data: [2, 2, 2, 6, 13, 30, 46]
// 	}]
// };