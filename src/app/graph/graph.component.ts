import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as nv from 'nvd3';

@Component({
    selector: 'app-graph',
    templateUrl: './graph.component.html',
    styleUrls: [

    ]
})
export class GraphComponent implements OnInit {

    ticks = [1, 2, 3, 4, 5, 6, 7];
    tickLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    chart;
    data = [
        {
            key: 'Series 1',
            values: [
                [
                    1,
                    10
                ],
                [
                    2,
                    20
                ],
                [
                    3,
                    30
                ],
                [
                    4,
                    40
                ],
                [
                    5,
                    50
                ],
                [
                    6,
                    60
                ],
                [
                    7,
                    70
                ]
            ]
        },
        {
            key: 'Series 2',
            values: [
                [
                    1,
                    10
                ],
                [
                    2,
                    30
                ],
                [
                    3,
                    23
                ],
                [
                    4,
                    20
                ],
                [
                    5,
                    44
                ],
                [
                    6,
                    59
                ],
                [
                    7,
                    70
                ]
            ]
        }
    ];

    ngOnInit() {
        nv.addGraph(() => {
            this.chart = nv.models.lineChart()
                .x(function (d) {
                    return d[0];
                })
                .y(function (d) {
                    return d[1];
                })
                .useInteractiveGuideline(true)
                .clipEdge(true)
                .showLegend(true);

            this.chart.forceY([0]);
            this.chart.forceX([0]);
            this.chart.yAxis
                .tickFormat(d3.format('.2s'));
            this.chart.xAxis
                .showMaxMin(false)
                .tickValues(this.ticks)
                .tickFormat((d, i) => this.tickLabels[i]);

            d3.select('#chart svg')
                    .datum(this.data)
                    .call(this.chart);

            return this.chart;
        });
    }
}
